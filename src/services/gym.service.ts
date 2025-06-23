import prisma from "../db/db.config";
import { GymCreate, GymUpdate } from "../interfaces/gymInterface";
import { buildGymQueryOptions } from "../utils/gymQueryBuilder";

class GymService {
    // Create gym
    async createGym(data: GymCreate) {
        try {
            const gym = await prisma.gym.create({
                data,
            });
            return gym;
        } catch (error) {
            throw error;
        }
    }

    // Get all gyms with pagination + filters
    async getGyms(
        page: number = 1,
        limit: number = 10,
        search?: string,
        category?: string,
        gender?: string
    ) {
        try {
            const queryOptions = buildGymQueryOptions(page, limit, {
                search,
                category,
                gender,
            });

            queryOptions.where = {
                ...queryOptions.where,
                isDeleted: false
            };

            const [gyms, totalCount] = await Promise.all([
                prisma.gym.findMany(queryOptions),
                prisma.gym.count({ where: queryOptions.where }),
            ]);

            return {
                gyms,
                pagination: {
                    total: totalCount,
                    page,
                    limit,
                    totalPages: Math.ceil(totalCount / limit),
                },
            };
        } catch (error) {
            throw error;
        }
    }

    // Get gyms by user with optional filters
    async getUserGyms(
        userId: string,
        page: number = 1,
        limit: number = 10,
        search?: string,
        category?: string,
        gender?: string
    ) {
        try {
            const queryOptions = buildGymQueryOptions(page, limit, {
                userId,
                search,
                category,
                gender,
            });

            queryOptions.where = {
                ...queryOptions.where,
                isDeleted: false
            };

            const [gyms, totalCount] = await Promise.all([
                prisma.gym.findMany(queryOptions),
                prisma.gym.count({ where: queryOptions.where }),
            ]);

            return {
                gyms,
                pagination: {
                    total: totalCount,
                    page,
                    limit,
                    totalPages: Math.ceil(totalCount / limit),
                },
            };
        } catch (error) {
            throw error;
        }
    }

    // Get gym by ID
    async getGymById(id: string) {
        try {
            const gym = await prisma.gym.findUnique({
                where: { id, isDeleted: false },
            });
            return gym;
        } catch (error) {
            throw error;
        }
    }

    // Update gym
    async updateGym(id: string, userId: string, data: GymUpdate) {
        try {
            const updated = await prisma.gym.update({
                where: { id, userId },
                data
            });
            return updated;
        } catch (error) {
            throw error;
        }
    }

    // Soft delete gym
    async deleteGym(id: string, userId: string) {
        try {
            const deleted = await prisma.gym.update({
                where: { id, userId },
                data: {
                    isDeleted: true
                }
            });
            return deleted;
        } catch (error) {
            throw error;
        }
    }

    // Check gym exists
    async checkGymExists(id: string): Promise<boolean> {
        try {
            const gym = await prisma.gym.findUnique({
                where: { id },
                select: { id: true, isDeleted: false },
            });
            return !!gym;
        } catch (error) {
            throw error;
        }
    }

    // Get minimal gym info for authorization (id, userId, isDeleted)
    async getGymMetaById(id: string) {
        try {
            const gym = await prisma.gym.findUnique({
                where: { id },
                select: {
                    id: true,
                    userId: true,
                    isDeleted: true,
                }
            });
            return gym;
        } catch (error) {
            throw error;
        }
    }
}

export default new GymService();
