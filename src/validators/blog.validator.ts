import { z } from "zod";

export const blogSchema = z.object({
  title:         z.string(),
  excerpt:       z.string(),
  image:         z.string(),
  tags:          z.array(z.string()),
  category:      z.string(),
  content:       z.string(),
  location:      z.string().optional(),
  contactInfo:   z.string().optional(),
});

export const commentSchema = z.object({
    comment: z
        .string()
        .trim()
        .min(1, { message: "Comment cannot be empty." })
        .max(500, { message: "Comment must be under 500 characters." }),
});
