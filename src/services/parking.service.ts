import prisma from "../db/db.config";
import RedisCache from "../utils/RedisCache";
import { ParkingCreate, ParkingUpdate } from "../interfaces/parkingInterface";
import { buildParkingQueryOptions } from "../utils/parkingQueryBuilder";

class ParkingService {
    private readonly CACHE_TTL = {
        PARKING: 3600, // 1 hour
        PARKINGS_LIST: 300, // 5 minutes
    };

    async createParking(data: ParkingCreate) {
        try {
            const parking = await prisma.parking.create({
                data,
            });

            await this.invalidateParkingCaches(data.userId);

            return parking;
        } catch (error) {
            throw error;
        }
    }

    async getParkings(
        page: number = 1,
        limit: number = 10,
        search?: string,
        parkingType?: string
    ) {
        try {
            const cacheKey = `parkings:all:${page}:${limit}:${parkingType || "all"}:${search || "none"
                }`;

            const cached = await RedisCache.get(cacheKey);
            if (cached) return cached;

            const queryOptions = buildParkingQueryOptions(page, limit, {
                search,
                parkingType,
            });

            queryOptions.where.isDeleted = false;

            const [parkings, totalCount] = await Promise.all([
                prisma.parking.findMany(queryOptions),
                prisma.parking.count({ where: queryOptions.where }),
            ]);

            const data = {
                parkings,
                pagination: {
                    total: totalCount,
                    page,
                    limit,
                    totalPages: Math.ceil(totalCount / limit),
                },
            };

            await RedisCache.set(cacheKey, data, this.CACHE_TTL.PARKINGS_LIST);

            return data;
        } catch (error) {
            throw error;
        }
    }

    async getParkingById(id: string) {
        try {
            const cacheKey = `parking:${id}`;

            const cached = await RedisCache.get(cacheKey);
            if (cached) return cached;

            const parking = await prisma.parking.findFirst({
                where: { id, isDeleted: false },
            });

            if (parking) {
                await RedisCache.set(cacheKey, parking, this.CACHE_TTL.PARKING);
            }

            return parking;
        } catch (error) {
            throw error;
        }
    }

    async getUserParkings(userId: string, page: number = 1, limit: number = 10) {
        try {
            const cacheKey = `parkings:user:${userId}:${page}:${limit}`;

            const cached = await RedisCache.get(cacheKey);
            if (cached) return cached;

            const queryOptions = buildParkingQueryOptions(page, limit, { userId });
            queryOptions.where.isDeleted = false;

            const [parkings, totalCount] = await Promise.all([
                prisma.parking.findMany(queryOptions),
                prisma.parking.count({ where: queryOptions.where }),
            ]);

            const data = {
                parkings,
                pagination: {
                    total: totalCount,
                    page,
                    limit,
                    totalPages: Math.ceil(totalCount / limit),
                },
            };

            await RedisCache.set(cacheKey, data, this.CACHE_TTL.PARKINGS_LIST);

            return data;
        } catch (error) {
            throw error;
        }
    }

    async updateParking(id: string, data: ParkingUpdate) {
        try {
            const parking = await prisma.parking.update({
                where: { id },
                data,
            });

            await this.invalidateParkingCaches(parking.userId, id);

            return parking;
        } catch (error) {
            throw error;
        }
    }

    async deleteParking(id: string) {
        try {
            const parking = await prisma.parking.update({
                where: { id },
                data: { isDeleted: true },
            });

            await this.invalidateParkingCaches(parking.userId, id);

            return parking;
        } catch (error) {
            throw error;
        }
    }

    async checkParkingExists(id: string): Promise<boolean> {
        const cacheKey = `parking:exists:${id}`;

        const cached = await RedisCache.get<boolean>(cacheKey);
        if (cached !== null) return cached;

        const parking = await prisma.parking.findUnique({
            where: { id },
            select: { id: true, isDeleted: true },
        });

        const exists = !!parking && !parking.isDeleted;

        await RedisCache.set(cacheKey, exists, this.CACHE_TTL.PARKING);

        return exists;
    }

    private async invalidateParkingCaches(userId?: string, parkingId?: string) {
        const commonKeys = [
            "parkings:all:1:10:all:none",
            ...(userId ? [`parkings:user:${userId}:1:10`] : []),
            ...(parkingId
                ? [`parking:${parkingId}`, `parking:exists:${parkingId}`]
                : []),
        ];

        await Promise.all(commonKeys.map((key) => RedisCache.del(key)));
    }
}

export default new ParkingService();
