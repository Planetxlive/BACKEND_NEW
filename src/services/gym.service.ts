import prisma from "../db/db.config";
import {
    GymCreate,
    GymListResponse,
    GymUpdate,
} from "../interfaces/gymInterface";
import { buildGymQueryOptions } from "../utils/gymQueryBuilder";
import RedisCache from "../utils/RedisCache";

class GymService {
    private readonly CACHE_TTL = {
        GYM: 3600, // 1 hour
        GYM_LIST: 300, // 5 minutes
    };

    async createGym(data: GymCreate) {
        try {
            const gym = await prisma.gym.create({ data });
            await this.invalidateGymCaches(data.userId);
            return gym;
        } catch (error) {
            throw error;
        }
    }

    async getGyms(
        page = 1,
        limit = 10,
        search?: string,
        category?: string,
        gender?: string
    ): Promise<GymListResponse> {
        try {
            const cacheKey = `gyms:all:${page}:${limit}:${search || "none"}:${category || "all"
                }:${gender || "all"}`;
            const cached = await RedisCache.get<GymListResponse>(cacheKey);
            if (cached && cached.gyms && cached.pagination) return cached;

            const queryOptions = buildGymQueryOptions(page, limit, {
                search,
                category,
                gender,
            });
            queryOptions.where = { ...queryOptions.where, isDeleted: false };

            const [gyms, totalCount] = await Promise.all([
                prisma.gym.findMany(queryOptions),
                prisma.gym.count({ where: queryOptions.where }),
            ]);

            const data = {
                gyms,
                pagination: {
                    total: totalCount,
                    page,
                    limit,
                    totalPages: Math.ceil(totalCount / limit),
                },
            };

            await RedisCache.set(cacheKey, data, this.CACHE_TTL.GYM_LIST);
            return data;
        } catch (error) {
            throw error;
        }
    }

    async getUserGyms(
        userId: string,
        page = 1,
        limit = 10,
        search?: string,
        category?: string,
        gender?: string
    ): Promise<GymListResponse> {
        try {
            const cacheKey = `gyms:user:${userId}:${page}:${limit}:${search || "none"
                }:${category || "all"}:${gender || "all"}`;
            const cached = await RedisCache.get<GymListResponse>(cacheKey);
            if (cached && cached.gyms && cached.pagination) return cached;

            const queryOptions = buildGymQueryOptions(page, limit, {
                userId,
                search,
                category,
                gender,
            });
            queryOptions.where = { ...queryOptions.where, isDeleted: false };

            const [gyms, totalCount] = await Promise.all([
                prisma.gym.findMany(queryOptions),
                prisma.gym.count({ where: queryOptions.where }),
            ]);

            const data = {
                gyms,
                pagination: {
                    total: totalCount,
                    page,
                    limit,
                    totalPages: Math.ceil(totalCount / limit),
                },
            };

            await RedisCache.set(cacheKey, data, this.CACHE_TTL.GYM_LIST);
            return data;
        } catch (error) {
            throw error;
        }
    }

    async getGymById(id: string) {
        try {
            const cacheKey = `gym:${id}`;
            const cached = await RedisCache.get(cacheKey);
            if (cached) return cached;

            const gym = await prisma.gym.findUnique({
                where: { id, isDeleted: false },
            });

            if (gym) {
                await RedisCache.set(cacheKey, gym, this.CACHE_TTL.GYM);
            }

            return gym;
        } catch (error) {
            throw error;
        }
    }

    async updateGym(id: string, userId: string, data: GymUpdate) {
        try {
            const updated = await prisma.gym.update({
                where: { id, userId },
                data,
            });
            await this.invalidateGymCaches(userId, id);
            return updated;
        } catch (error) {
            throw error;
        }
    }

    async deleteGym(id: string, userId: string) {
        try {
            const deleted = await prisma.gym.update({
                where: { id, userId },
                data: { isDeleted: true },
            });
            await this.invalidateGymCaches(userId, id);
            return deleted;
        } catch (error) {
            throw error;
        }
    }

    async checkGymExists(id: string): Promise<boolean> {
        const cacheKey = `gym:exists:${id}`;
        const cached = await RedisCache.get<boolean>(cacheKey);
        if (cached !== null) return cached;

        const gym = await prisma.gym.findUnique({
            where: { id },
            select: { id: true, isDeleted: true },
        });

        const exists = !!gym && !gym.isDeleted;
        await RedisCache.set(cacheKey, exists, this.CACHE_TTL.GYM);
        return exists;
    }

    async getGymMetaById(id: string) {
        try {
            return await prisma.gym.findUnique({
                where: { id },
                select: {
                    id: true,
                    userId: true,
                    isDeleted: true,
                },
            });
        } catch (error) {
            throw error;
        }
    }

    private async invalidateGymCaches(userId?: string, gymId?: string) {
        const keys = [
            "gyms:all:1:10:none:all:all",
            ...(userId ? [`gyms:user:${userId}:1:10:none:all:all`] : []),
            ...(gymId ? [`gym:${gymId}`, `gym:exists:${gymId}`] : []),
        ];
        await Promise.all(keys.map((key) => RedisCache.del(key)));
    }
}

export default new GymService();
