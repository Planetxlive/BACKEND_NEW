import { createClient, RedisClientType } from "redis";
import logger from "./logger";
import { config } from "./config";
// Create Redis client
const redisClient: RedisClientType = createClient({
    username: "default",
    password: config.redis_password,
    socket: {
        host: config.redis_host,
        port: Number(config.redis_port) || 6379,
    },
});

redisClient.on("error", (err: Error) => {
    logger.error(`❌ Redis Client Error: ${err.message}`);
});

const connectRedis = async (): Promise<void> => {
    try {
        await redisClient.connect();
        logger.info("✅ Connected to Redis successfully");
    } catch (error: any) {
        logger.error(`❌ Could not connect to Redis: ${error.message}`);
    }
};

connectRedis();

export default redisClient;
