export interface Review {
    id: string;
    userId: string;
    gymId?: string | null;
    parkingId?: string | null;
    eventSpaceId?: string | null;
    pgId?: string | null;
    rating?: number | null;
    comment?: string | null;
    createdAt: Date;
    updatedAt: Date;

    // Optional populated relations (only if included via Prisma `include`)
    //   user?: User;
    //   gym?: Gym | null;
    //   parking?: Parking | null;
    //   pg?: PayingGuests | null;
}
