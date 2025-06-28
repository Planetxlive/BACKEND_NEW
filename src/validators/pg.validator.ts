import { z } from "zod";

export const pgCreateSchema = z.object({
    subCategory: z.array(z.string()),
    roomDetails: z.any().optional(),
    mealDetails: z.any().optional(),
    availabilityStatus: z.string().optional(),
    availableFrom: z.coerce.date().optional(),
    ageOfProperty: z.number().int().optional(),
    description: z.string().max(1000).optional(),
    amenities: z.any().optional(),
    rules: z.any().optional(),
    otherFeatures: z.any().optional(),
    societyBuildingFeatures: z.any().optional(),
    nearbyPlaces: z.any().optional(),
    pricing: z.any().optional(),
    safetyFeatures: z.any().optional(),
    communityFeatures: z.any().optional(),
    images: z.array(z.string()).optional(),
    videos: z.array(z.string()).optional(),
    verification: z.any().optional(),
});

export const pgUpdateSchema = pgCreateSchema.partial();
