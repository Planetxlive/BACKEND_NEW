import { z } from "zod";

export const parkingCreateSchema = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    latitude: z.number(),
    longitude: z.number(),
    price: z.any(),
    yearOfParking: z.number(),
    parkingType: z.string().min(1),
    vacancies: z.number(),
    size: z.string().min(1),
    photos: z.array(z.string()).default([]),
    videos: z.array(z.string()).default([]),
    amenities: z.array(z.string()).default([]),
    accessibility: z.string().min(1),
    capacity: z.number(),
    security: z.array(z.string()).default([]),
    operatingHours: z.any(),
    booking: z.any()
});

export const parkingUpdateSchema = parkingCreateSchema.partial();
