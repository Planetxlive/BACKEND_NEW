import { z } from "zod";

// Used when creating a new EventSpace
export const eventSpaceCreateSchema = z.object({
    subCategory: z.string().min(1),
    type: z.string().optional(),
    propertyDetails: z.object({}).passthrough().optional(),
    pricing: z.object({}).passthrough().optional(),
    amenities: z.array(z.string()).optional(),
    facilities: z.array(z.string()).optional(),
    availableSpaces: z.object({}).passthrough().optional(),
    bookingDetails: z.object({}).passthrough().optional(),
    additionalServices: z.object({}).passthrough().optional(),
    rules: z.object({}).passthrough().optional(),
    nearbyPlaces: z.array(z.string()).optional(),
    availabilityStatus: z.enum(["available", "unavailable"]).optional(),
    ageOfProperty: z.number().int().positive().optional(),
    description: z.string().max(1000).optional(),
    images: z.array(z.string().url()).optional(),
    videos: z.array(z.string().url()).optional(),
});

// Used for partial updates
export const eventSpaceUpdateSchema = eventSpaceCreateSchema.partial();

// Used for availability status updates only
export const updateAvailabilitySchema = z.object({
    status: z.enum(["available", "unavailable"]),
});
