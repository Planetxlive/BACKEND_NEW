import express, { Request, Response } from "express";
import { config } from "./config/config";
import logger from "./config/logger";
import morgan from "morgan";
import { clerkMiddleware } from '@clerk/express';
import limiter from "./middlewares/rateLimiter";
import router from "./routes";
import errorHandler from "./middlewares/errorHandler";
import cors from "cors";
import client from "prom-client";
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
      openapi: '3.0.0',
      info: { title: 'PlanetX API', version: '1.0.0' },
    },
    apis: ['./src/routes/*.ts'], // Path to route files with JSDoc comments
  };
  const specs = swaggerJsdoc(options);


const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const app = express();
app.get("/metrics", async (req: Request, res: Response) => {
    res.setHeader("Content-Type", client.register.contentType);
    res.send(await client.register.metrics());
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));



app.use(express.json());
app.use(morgan('combined', {
    stream: {
        write: (message) => logger.http(message.trim()),
    },
}));
app.use(cors());
app.use(limiter);
app.use(clerkMiddleware());

app.get("/", (req: Request, res: Response) => {
    logger.info("Root route hit");
    res.json({ msg: "Hello from PlanetX" });
});

app.use("/api/v1", router);
app.use(errorHandler);

const PORT = config.port || 8000;

app.listen(PORT, () => {
    logger.info(`🚀 Server started on http://localhost:${PORT}`);
});