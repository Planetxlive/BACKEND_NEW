import redisClient from "../config/redis";
import logger from "../config/logger";

class RedisCache {
    async get<T>(key: string): Promise<T | null> {
        try {
            const data = await redisClient.get(key);
            return data ? (JSON.parse(data) as T) : null;
        } catch (err) {
            logger.error(`❌ Redis GET error [${key}]: ${(err as Error).message}`);
            return null;
        }
    }

    async set(key: string, value: any, ttlSeconds: number = 3600): Promise<void> {
        try {
            await redisClient.setEx(key, ttlSeconds, JSON.stringify(value));
        } catch (err) {
            logger.error(`❌ Redis SET error [${key}]: ${(err as Error).message}`);
        }
    }

    async del(key: string): Promise<void> {
        try {
            await redisClient.del(key);
        } catch (err) {
            logger.error(`❌ Redis DEL error [${key}]: ${(err as Error).message}`);
        }
    }

    async exists(key: string): Promise<boolean> {
        try {
            const result = await redisClient.exists(key);
            return result === 1;
        } catch (err) {
            logger.error(`❌ Redis EXISTS error [${key}]: ${(err as Error).message}`);
            return false;
        }
    }

    async mget<T>(keys: string[]): Promise<(T | null)[]> {
        try {
            const data = await redisClient.mGet(keys);
            return data.map((item) => (item ? (JSON.parse(item) as T) : null));
        } catch (err) {
            logger.error(
                `❌ Redis MGET error [${keys.join(", ")}]: ${(err as Error).message}`
            );
            return keys.map(() => null);
        }
    }

    async mset(
        keyValuePairs: Record<string, any>,
        ttlSeconds: number = 3600
    ): Promise<void> {
        try {
            const pipeline = redisClient.multi();

            Object.entries(keyValuePairs).forEach(([key, value]) => {
                pipeline.setEx(key, ttlSeconds, JSON.stringify(value));
            });

            await pipeline.exec();
        } catch (err) {
            logger.error(`❌ Redis MSET error: ${(err as Error).message}`);
        }
    }
}

export default new RedisCache();
