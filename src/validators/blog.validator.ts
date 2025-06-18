import { z } from "zod";

export const blogSchema = z.object({
    blogType: z.string(),
    title: z.string(),
    description: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    contactInfo: z.string().optional(),
    images: z.array(z.string()).optional(),
});

export const commentSchema = z.object({
    comment: z
        .string()
        .trim()
        .min(1, { message: "Comment cannot be empty." })
        .max(500, { message: "Comment must be under 500 characters." }),
});
