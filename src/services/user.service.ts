import prisma from "../db/db.config";
import { Prisma } from "../generated/prisma";
import { UserWithRelations } from "../interfaces/userInterface";
import RedisCache from "../utils/RedisCache";

class UserService {
    private readonly CACHE_TTL = {
        USER: 3600, // 1 hour
    };

    async findUserById(userId: string): Promise<UserWithRelations | null> {
        const cacheKey = `user:${userId}`;

        const cached = await RedisCache.get<UserWithRelations>(cacheKey);
        if (cached) return cached;

        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                blogs: true,
                likes: true,
                comments: true,
                gyms: true,
                parkings: true,
            },
        });

        if (user) {
            await RedisCache.set(cacheKey, user, this.CACHE_TTL.USER);
        }

        return user;
    }

    async updateProfile(
        userId: string,
        updates: Partial<Prisma.UserUpdateInput>
    ) {
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: updates,
        });

        await RedisCache.del(`user:${userId}`);

        return updatedUser;
    }

    async deleteProfile(userId: string) {
        const deletedUser = await prisma.user.update({
            where: { id: userId },
            data: { isDeleted: true },
        });

        await RedisCache.del(`user:${userId}`);

        return deletedUser;
    }
}

export default new UserService();
