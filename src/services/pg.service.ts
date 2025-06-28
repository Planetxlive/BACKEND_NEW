import prisma from "../db/db.config";
import RedisCache from "../utils/RedisCache";
import {
    PayingGuestsCreate,
    PayingGuestsUpdate,
} from "../interfaces/pgInterface";
import { buildPayingGuestsQueryOptions } from "../utils/pgQueryBuilder";

class PayingGuestsService {
    private readonly CACHE_TTL = {
        PAYING_GUEST: 3600, // 1 hour
        PAYING_GUESTS_LIST: 300, // 5 minutes
        NEARBY_GUESTS: 1800, // 30 minutes
        REVIEWS: 3600, // 1 hour
    };

    async createPayingGuest(data: PayingGuestsCreate) {
        try {
            const payingGuest = await prisma.payingGuests.create({
                data,
            });

            await this.invalidatePayingGuestCaches(data.userId);

            return payingGuest;
        } catch (error) {
            throw error;
        }
    }

    async getPayingGuests(
        page: number = 1,
        limit: number = 10,
        search?: string,
        subCategory?: string
    ) {
        try {
            const cacheKey = `payingGuests:all:${page}:${limit}:${subCategory || "all"
                }:${search || "none"}`;

            const cached = await RedisCache.get(cacheKey);
            if (cached) return cached;

            const queryOptions = buildPayingGuestsQueryOptions(page, limit, {
                search,
                subCategory,
            });

            queryOptions.where.isDeleted = false;

            const [payingGuests, totalCount] = await Promise.all([
                prisma.payingGuests.findMany({
                    ...queryOptions,
                    include: { user: { select: { id: true, name: true } } },
                }),
                prisma.payingGuests.count({ where: queryOptions.where }),
            ]);

            const data = {
                payingGuests,
                pagination: {
                    total: totalCount,
                    page,
                    limit,
                    totalPages: Math.ceil(totalCount / limit),
                },
            };

            await RedisCache.set(cacheKey, data, this.CACHE_TTL.PAYING_GUESTS_LIST);

            return data;
        } catch (error) {
            throw error;
        }
    }

    async getPayingGuestById(id: string) {
        try {
            const cacheKey = `payingGuest:${id}`;

            const cached = await RedisCache.get(cacheKey);
            if (cached) return cached;

            const payingGuest = await prisma.payingGuests.findFirst({
                where: { id, isDeleted: false },
                include: {
                    user: { select: { id: true, name: true } },
                    reviews: { where: { pgId: id } },
                },
            });

            if (payingGuest) {
                await RedisCache.set(
                    cacheKey,
                    payingGuest,
                    this.CACHE_TTL.PAYING_GUEST
                );
            }

            return payingGuest;
        } catch (error) {
            throw error;
        }
    }

    async getUserPayingGuests(
        userId: string,
        page: number = 1,
        limit: number = 10
    ) {
        try {
            const cacheKey = `payingGuests:user:${userId}:${page}:${limit}`;

            const cached = await RedisCache.get(cacheKey);
            if (cached) return cached;

            const queryOptions = buildPayingGuestsQueryOptions(page, limit, {
                userId,
            });
            queryOptions.where.isDeleted = false;

            const [payingGuests, totalCount] = await Promise.all([
                prisma.payingGuests.findMany({
                    ...queryOptions,
                    include: { user: { select: { id: true, name: true } } },
                }),
                prisma.payingGuests.count({ where: queryOptions.where }),
            ]);

            const data = {
                payingGuests,
                pagination: {
                    total: totalCount,
                    page,
                    limit,
                    totalPages: Math.ceil(totalCount / limit),
                },
            };

            await RedisCache.set(cacheKey, data, this.CACHE_TTL.PAYING_GUESTS_LIST);

            return data;
        } catch (error) {
            throw error;
        }
    }

    async updatePayingGuest(id: string, data: PayingGuestsUpdate) {
        try {
            const payingGuest = await prisma.payingGuests.update({
                where: { id },
                data,
            });

            await this.invalidatePayingGuestCaches(payingGuest.userId, id);

            return payingGuest;
        } catch (error) {
            throw error;
        }
    }

    async deletePayingGuest(id: string) {
        try {
            const payingGuest = await prisma.payingGuests.update({
                where: { id },
                data: { isDeleted: true },
            });

            await this.invalidatePayingGuestCaches(payingGuest.userId, id);

            return payingGuest;
        } catch (error) {
            throw error;
        }
    }

    async checkPayingGuestExists(id: string): Promise<boolean> {
        const cacheKey = `payingGuest:exists:${id}`;

        const cached = await RedisCache.get<boolean>(cacheKey);
        if (cached !== null) return cached;

        const payingGuest = await prisma.payingGuests.findUnique({
            where: { id },
            select: { id: true, isDeleted: true },
        });

        const exists = !!payingGuest && !payingGuest.isDeleted;

        await RedisCache.set(cacheKey, exists, this.CACHE_TTL.PAYING_GUEST);

        return exists;
    }

    async updateAvailabilityStatus(id: string, status: string) {
        try {
            const payingGuest = await prisma.payingGuests.update({
                where: { id, isDeleted: false },
                data: { availabilityStatus: status },
            });

            await this.invalidatePayingGuestCaches(payingGuest.userId, id);

            return payingGuest;
        } catch (error) {
            throw error;
        }
    }

    async getNearbyPayingGuests(
        latitude: number,
        longitude: number,
        radiusKm: number,
        page: number = 1,
        limit: number = 10
    ) {
        try {
            const cacheKey = `payingGuests:nearby:${latitude}:${longitude}:${radiusKm}:${page}:${limit}`;

            const cached = await RedisCache.get(cacheKey);
            if (cached) return cached;

            const queryOptions = buildPayingGuestsQueryOptions(page, limit, {});
            queryOptions.where.isDeleted = false;

            const payingGuests = await prisma.payingGuests.findMany({
                ...queryOptions,
                where: {
                    ...queryOptions.where,
                    nearbyPlaces: {
                        path: ["coordinates"],
                        not: null,
                    },
                },
                include: { user: { select: { id: true, name: true } } },
            });

            const filteredGuests = payingGuests.filter((guest) => {
                let coords: { lat: number; lng: number; } | undefined;
                if (guest.nearbyPlaces) {
                    if (typeof guest.nearbyPlaces === "string") {
                        try {
                            const parsed = JSON.parse(guest.nearbyPlaces);
                            coords = parsed?.coordinates;
                        } catch {
                            coords = undefined;
                        }
                    } else if (
                        typeof guest.nearbyPlaces === "object" &&
                        "coordinates" in guest.nearbyPlaces
                    ) {
                        coords = (guest.nearbyPlaces as any).coordinates;
                    }
                }
                if (!coords) return false;

                const R = 6371; // Earth's radius in km
                const dLat = ((coords.lat - latitude) * Math.PI) / 180;
                const dLon = ((coords.lng - longitude) * Math.PI) / 180;
                const a =
                    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos((latitude * Math.PI) / 180) *
                    Math.cos((coords.lat * Math.PI) / 180) *
                    Math.sin(dLon / 2) *
                    Math.sin(dLon / 2);
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                const distance = R * c;

                return distance <= radiusKm;
            });

            const totalCount = filteredGuests.length;
            const paginatedGuests = filteredGuests.slice(
                (page - 1) * limit,
                page * limit
            );

            const data = {
                payingGuests: paginatedGuests,
                pagination: {
                    total: totalCount,
                    page,
                    limit,
                    totalPages: Math.ceil(totalCount / limit),
                },
            };

            await RedisCache.set(cacheKey, data, this.CACHE_TTL.NEARBY_GUESTS);

            return data;
        } catch (error) {
            throw error;
        }
    }

    async addReview(
        pgId: string,
        userId: string,
        rating: number,
        comment?: string
    ) {
        try {
            const review = await prisma.review.create({
                data: {
                    pgId,
                    userId,
                    rating,
                    comment,
                },
            });

            await RedisCache.del(`payingGuest:${pgId}`);
            await RedisCache.del(`reviews:payingGuest:${pgId}`);

            return review;
        } catch (error) {
            throw error;
        }
    }

    async getReviews(pgId: string, page: number = 1, limit: number = 10) {
        try {
            const cacheKey = `reviews:payingGuest:${pgId}:${page}:${limit}`;

            const cached = await RedisCache.get(cacheKey);
            if (cached) return cached;

            const skip = (page - 1) * limit;
            const [reviews, totalCount] = await Promise.all([
                prisma.review.findMany({
                    where: {
                        pgId,
                    },
                    skip,
                    take: limit,
                    orderBy: { createdAt: "desc" },
                    include: { user: { select: { id: true, name: true } } },
                }),
                prisma.review.count({
                    where: { pgId },
                }),
            ]);

            const data = {
                reviews,
                pagination: {
                    total: totalCount,
                    page,
                    limit,
                    totalPages: Math.ceil(totalCount / limit),
                },
            };

            await RedisCache.set(cacheKey, data, this.CACHE_TTL.REVIEWS);

            return data;
        } catch (error) {
            throw error;
        }
    }

    async getReview(reviewId: string) {
        try {
            const cacheKey = `review:payingGuest:${reviewId}`;
            const cached = await RedisCache.get(cacheKey);
            if (cached) return cached;
            const review = await prisma.review.findUnique({
                where: { id: reviewId },
            });

            await RedisCache.set(cacheKey, review, this.CACHE_TTL.REVIEWS);
            return review;
        } catch (error) {
            throw error;
        }
    }

    async updateReview(
        reviewId: string,
        data: { rating?: number; comment?: string; }
    ) {
        try {
            const review = await prisma.review.findUnique({
                where: { id: reviewId },
                select: { pgId: true },
            });

            if (!review || !review.pgId) {
                throw new Error(
                    "Review not found or not associated with a paying guest"
                );
            }

            const updatedReview = await prisma.review.update({
                where: { id: reviewId },
                data,
            });

            await RedisCache.del(`payingGuest:${review.pgId}`);
            await RedisCache.del(`reviews:payingGuest:${review.pgId}`);
            await RedisCache.del(`payingGuest:rating:${review.pgId}`);

            return updatedReview;
        } catch (error) {
            throw error;
        }
    }

    async deleteReview(reviewId: string) {
        try {
            const review = await prisma.review.findUnique({
                where: { id: reviewId },
                select: { pgId: true },
            });

            if (!review || !review.pgId) {
                throw new Error(
                    "Review not found or not associated with a paying guest"
                );
            }

            const deletedReview = await prisma.review.update({
                where: { id: reviewId },
                data: {},
            });

            await RedisCache.del(`payingGuest:${review.pgId}`);
            await RedisCache.del(`reviews:payingGuest:${review.pgId}`);
            await RedisCache.del(`payingGuest:rating:${review.pgId}`);

            return deletedReview;
        } catch (error) {
            throw error;
        }
    }

    async verifyPayingGuest(id: string, verificationData: object) {
        try {
            const payingGuest = await prisma.payingGuests.update({
                where: { id, isDeleted: false },
                data: { verification: verificationData },
            });

            await this.invalidatePayingGuestCaches(payingGuest.userId, id);

            return payingGuest;
        } catch (error) {
            throw error;
        }
    }

    async getAverageRating(pgId: string): Promise<number> {
        try {
            const cacheKey = `payingGuest:rating:${pgId}`;

            const cached = await RedisCache.get<number>(cacheKey);
            if (cached !== null) return cached;

            const reviews = await prisma.review.findMany({
                where: { pgId },
                select: { rating: true },
            });

            const averageRating = reviews.length
                ? reviews.reduce((sum, review) => sum + (review.rating || 0), 0) /
                reviews.length
                : 0;

            await RedisCache.set(cacheKey, averageRating, this.CACHE_TTL.REVIEWS);

            return averageRating;
        } catch (error) {
            throw error;
        }
    }

    async getPayingGuestsByPriceRange(
        minPrice: number,
        maxPrice: number,
        page: number = 1,
        limit: number = 10
    ) {
        try {
            const cacheKey = `payingGuests:price:${minPrice}:${maxPrice}:${page}:${limit}`;

            const cached = await RedisCache.get(cacheKey);
            if (cached) return cached;

            const queryOptions = buildPayingGuestsQueryOptions(page, limit, {});
            queryOptions.where.isDeleted = false;
            queryOptions.where.pricing = {
                path: ["amount"],
                gte: minPrice,
                lte: maxPrice,
            };

            const [payingGuests, totalCount] = await Promise.all([
                prisma.payingGuests.findMany({
                    ...queryOptions,
                    include: { user: { select: { id: true, name: true } } },
                }),
                prisma.payingGuests.count({ where: queryOptions.where }),
            ]);

            const data = {
                payingGuests,
                pagination: {
                    total: totalCount,
                    page,
                    limit,
                    totalPages: Math.ceil(totalCount / limit),
                },
            };

            await RedisCache.set(cacheKey, data, this.CACHE_TTL.PAYING_GUESTS_LIST);

            return data;
        } catch (error) {
            throw error;
        }
    }

    async getPayingGuestsByAmenities(
        amenities: string[],
        page: number = 1,
        limit: number = 10
    ) {
        try {
            const cacheKey = `payingGuests:amenities:${amenities.join(
                ","
            )}:${page}:${limit}`;

            const cached = await RedisCache.get(cacheKey);
            if (cached) return cached;

            const queryOptions = buildPayingGuestsQueryOptions(page, limit, {});
            queryOptions.where.isDeleted = false;
            queryOptions.where.amenities = {
                hasSome: amenities,
            };

            const [payingGuests, totalCount] = await Promise.all([
                prisma.payingGuests.findMany({
                    ...queryOptions,
                    include: { user: { select: { id: true, name: true } } },
                }),
                prisma.payingGuests.count({ where: queryOptions.where }),
            ]);

            const data = {
                payingGuests,
                pagination: {
                    total: totalCount,
                    page,
                    limit,
                    totalPages: Math.ceil(totalCount / limit),
                },
            };

            await RedisCache.set(cacheKey, data, this.CACHE_TTL.PAYING_GUESTS_LIST);

            return data;
        } catch (error) {
            throw error;
        }
    }

    async toggleFeatured(id: string, isFeatured: boolean) {
        try {
            const payingGuest = await prisma.payingGuests.update({
                where: { id, isDeleted: false },
                data: { otherFeatures: { set: { isFeatured } } },
            });

            await this.invalidatePayingGuestCaches(payingGuest.userId, id);

            return payingGuest;
        } catch (error) {
            throw error;
        }
    }

    private async invalidatePayingGuestCaches(
        userId?: string,
        payingGuestId?: string
    ) {
        const commonKeys = [
            "payingGuests:all:1:10:all:none",
            ...(userId ? [`payingGuests:user:${userId}:1:10`] : []),
            ...(payingGuestId
                ? [
                    `payingGuest:${payingGuestId}`,
                    `payingGuest:exists:${payingGuestId}`,
                    `reviews:payingGuest:${payingGuestId}:1:10`,
                    `payingGuest:rating:${payingGuestId}`,
                ]
                : []),
        ];

        await Promise.all(commonKeys.map((key) => RedisCache.del(key)));
    }
}

export default new PayingGuestsService();
