import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";
import logger from "../config/logger";

export const validateBody = (schema: ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const parsed = schema.safeParse(req.body);

        if (!parsed.success) {
            logger.warn("Validation failed", {
                errors: parsed.error.flatten().fieldErrors,
                body: req.body,
            });

            res.status(400).json({
                success: false,
                message: "Validation error",
                errors: parsed.error.flatten().fieldErrors,
            });
            return;
        }

        req.body = parsed.data;
        next();
    };
};

export const validateId = (name: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const value = req.params[name];
        if (!value) {
            logger.error(`Missing ${name}`);
            res.status(400).json({ success: false, message: `Invalid or missing ${name}` });
            return;
        }
        next();
    };
};
