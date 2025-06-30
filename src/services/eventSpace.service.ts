import prisma from "../db/db.config";
import RedisCache from "../utils/RedisCache";
import {
    EventSpaceCreate,
    EventSpaceUpdate,
} from "../interfaces/eventSpaceInterface";
import { buildEventSpaceQueryOptions } from "../utils/eventSpaceQueryBuilder";

class EventSpaceService {
    private readonly CACHE_TTL = {
        EVENT_SPACE: 3600,
        EVENT_SPACES_LIST: 300,
        REVIEWS: 3600,
    };

    async createEventSpace(data: EventSpaceCreate) {
        try {
            const eventSpace = await prisma.eventSpace.create({ data });
            await this.invalidateEventSpaceCaches(data.userId);
            return eventSpace;
        } catch (error) {
            throw error;
        }
    }

    async getEventSpaces(
        page: number = 1,
        limit: number = 10,
        search?: string,
        subCategory?: string
    ) {
        try {
            const cacheKey = `eventSpaces:all:${page}:${limit}:${subCategory || "all"
                }:${search || "none"}`;
            const cached = await RedisCache.get(cacheKey);
            if (cached) return cached;

            const queryOptions = buildEventSpaceQueryOptions(page, limit, {
                search,
                subCategory,
            });
            queryOptions.where.isDeleted = false;

            const [eventSpaces, totalCount] = await Promise.all([
                prisma.eventSpace.findMany({
                    ...queryOptions,
                    include: { user: { select: { id: true, name: true } } },
                }),
                prisma.eventSpace.count({ where: queryOptions.where }),
            ]);

            const data = {
                eventSpaces,
                pagination: {
                    total: totalCount,
                    page,
                    limit,
                    totalPages: Math.ceil(totalCount / limit),
                },
            };

            await RedisCache.set(cacheKey, data, this.CACHE_TTL.EVENT_SPACES_LIST);
            return data;
        } catch (error) {
            throw error;
        }
    }

    async getEventSpaceById(id: string) {
        try {
            const cacheKey = `eventSpace:${id}`;
            const cached = await RedisCache.get(cacheKey);
            if (cached) return cached;

            const eventSpace = await prisma.eventSpace.findFirst({
                where: { id, isDeleted: false },
                include: {
                    user: { select: { id: true, name: true } },
                    reviews: true,
                },
            });

            if (eventSpace) {
                await RedisCache.set(cacheKey, eventSpace, this.CACHE_TTL.EVENT_SPACE);
            }

            return eventSpace;
        } catch (error) {
            throw error;
        }
    }

    async getUserEventSpaces(
        userId: string,
        page: number = 1,
        limit: number = 10
    ) {
        try {
            const cacheKey = `eventSpaces:user:${userId}:${page}:${limit}`;
            const cached = await RedisCache.get(cacheKey);
            if (cached) return cached;

            const queryOptions = buildEventSpaceQueryOptions(page, limit, { userId });
            queryOptions.where.isDeleted = false;

            const [eventSpaces, totalCount] = await Promise.all([
                prisma.eventSpace.findMany({
                    ...queryOptions,
                    include: { user: { select: { id: true, name: true } } },
                }),
                prisma.eventSpace.count({ where: queryOptions.where }),
            ]);

            const data = {
                eventSpaces,
                pagination: {
                    total: totalCount,
                    page,
                    limit,
                    totalPages: Math.ceil(totalCount / limit),
                },
            };

            await RedisCache.set(cacheKey, data, this.CACHE_TTL.EVENT_SPACES_LIST);
            return data;
        } catch (error) {
            throw error;
        }
    }

    async updateEventSpace(id: string, data: EventSpaceUpdate) {
        try {
            const eventSpace = await prisma.eventSpace.update({
                where: { id },
                data,
            });
            await this.invalidateEventSpaceCaches(eventSpace.userId, id);
            return eventSpace;
        } catch (error) {
            throw error;
        }
    }

    async deleteEventSpace(id: string) {
        try {
            const eventSpace = await prisma.eventSpace.update({
                where: { id },
                data: { isDeleted: true },
            });
            await this.invalidateEventSpaceCaches(eventSpace.userId, id);
            return eventSpace;
        } catch (error) {
            throw error;
        }
    }

    async updateAvailabilityStatus(id: string, status: string) {
        try {
            const eventSpace = await prisma.eventSpace.update({
                where: { id, isDeleted: false },
                data: { availabilityStatus: status },
            });
            await this.invalidateEventSpaceCaches(eventSpace.userId, id);
            return eventSpace;
        } catch (error) {
            throw error;
        }
    }

    async addReview(
        eventSpaceId: string,
        userId: string,
        rating: number,
        comment?: string
    ) {
        try {
            const review = await prisma.review.create({
                data: {
                    eventSpaceId,
                    userId,
                    rating,
                    comment,
                },
            });

            await RedisCache.del(`eventSpace:${eventSpaceId}`);
            await RedisCache.del(`reviews:eventSpace:${eventSpaceId}`);

            return review;
        } catch (error) {
            throw error;
        }
    }

    async getReviews(eventSpaceId: string, page: number = 1, limit: number = 10) {
        try {
            const cacheKey = `reviews:eventSpace:${eventSpaceId}:${page}:${limit}`;
            const cached = await RedisCache.get(cacheKey);
            if (cached) return cached;

            const skip = (page - 1) * limit;

            const [reviews, totalCount] = await Promise.all([
                prisma.review.findMany({
                    where: { eventSpaceId },
                    skip,
                    take: limit,
                    orderBy: { createdAt: "desc" },
                    include: { user: { select: { id: true, name: true } } },
                }),
                prisma.review.count({ where: { eventSpaceId } }),
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
            const cacheKey = `review:eventSpace:${reviewId}`;
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
                select: { eventSpaceId: true },
            });

            if (!review?.eventSpaceId) {
                throw new Error("Review not found or not associated with an event space");
            }

            const updatedReview = await prisma.review.update({
                where: { id: reviewId },
                data,
            });

            await RedisCache.del(`eventSpace:${review.eventSpaceId}`);
            await RedisCache.del(`reviews:eventSpace:${review.eventSpaceId}`);
            await RedisCache.del(`eventSpace:rating:${review.eventSpaceId}`);

            return updatedReview;
        } catch (error) {
            throw error;
        }
    }

    async deleteReview(reviewId: string) {
        try {
            const review = await prisma.review.findUnique({
                where: { id: reviewId },
                select: { eventSpaceId: true },
            });

            if (!review?.eventSpaceId) {
                throw new Error("Review not found or not associated with an event space");
            }

            const deletedReview = await prisma.review.delete({
                where: { id: reviewId },
            });

            await RedisCache.del(`eventSpace:${review.eventSpaceId}`);
            await RedisCache.del(`reviews:eventSpace:${review.eventSpaceId}`);
            await RedisCache.del(`eventSpace:rating:${review.eventSpaceId}`);

            return deletedReview;
        } catch (error) {
            throw error;
        }
    }

    async getAverageRating(eventSpaceId: string): Promise<number> {
        try {
            const cacheKey = `eventSpace:rating:${eventSpaceId}`;

            const cached = await RedisCache.get<number>(cacheKey);
            if (cached !== null) return cached;

            const reviews = await prisma.review.findMany({
                where: { eventSpaceId },
                select: { rating: true },
            });

            const averageRating = reviews.length
                ? reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length
                : 0;

            await RedisCache.set(cacheKey, averageRating, this.CACHE_TTL.REVIEWS);
            return averageRating;
        } catch (error) {
            throw error;
        }
    }


    private async invalidateEventSpaceCaches(
        userId?: string,
        eventSpaceId?: string
    ) {
        await Promise.all([
            RedisCache.delPattern("eventSpaces:all:*"),
            userId && RedisCache.delPattern(`eventSpaces:user:${userId}:*`),
            eventSpaceId && RedisCache.del(`eventSpace:${eventSpaceId}`),
            eventSpaceId && RedisCache.delPattern(`reviews:eventSpace:${eventSpaceId}:*`),
            eventSpaceId && RedisCache.del(`eventSpace:rating:${eventSpaceId}`),
        ]);

    }
}

export default new EventSpaceService();
