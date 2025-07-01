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
import responseTime from "response-time";
import { createLogger, transports } from "winston";
import LokiTransport from "winston-loki";

const options = {
    transports: [
        new LokiTransport({
          host: "http://127.0.0.1:3100"
        })
      ],
    definition: {
      openapi: '3.0.0',
      info: { title: 'PlanetX API', version: '1.0.0' },
    },
    apis: ['./src/routes/*.ts'], // Path to route files with JSDoc comments
  };
  const specs = swaggerJsdoc(options);


const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();
const reqResTime = new client.Histogram({
    name: 'http_express_req_res_time',
    help: 'Request and response time taken by the server',
    labelNames: ['method', 'route', 'status'],
    buckets: [1, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000],
});
const totalRequestCounter = new client.Counter({
    name: 'total_requests_count',
    help: 'Total number of requests made to the server',
});


const app = express();

app.use(responseTime((req, res, time) => {
    totalRequestCounter.inc();
     reqResTime.labels({
        method: req.method,
        route: req.url,
        status: res.statusCode,
     }).observe(time);
}));


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