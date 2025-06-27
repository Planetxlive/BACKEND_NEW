import { z } from "zod";

export const reviewCreateSchema = z.object({
    rating: z.number().min(1).max(5),
    comment: z.string().optional(),
});

export const reviewUpdateSchema = reviewCreateSchema.partial();
