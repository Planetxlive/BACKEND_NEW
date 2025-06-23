export function buildGymQueryOptions(
    page: number,
    limit: number,
    filters: {
        userId?: string;
        category?: string;
        gender?: string;
        search?: string;
    }
) {
    const skip = (page - 1) * limit;

    const where: any = {
        ...(filters.userId && { userId: filters.userId }),
        ...(filters.gender && { gender: filters.gender }),
        ...(filters.category && { categories: { has: filters.category } }),
        ...(filters.search && {
            OR: [
                { gymName: { contains: filters.search, mode: "insensitive" } },
                { description: { contains: filters.search, mode: "insensitive" } },
                { services: { has: filters.search } },
                { benefits: { has: filters.search } },
                { amenities: { has: filters.search } },
                { availableSports: { has: filters.search } },
                { strengthEquipments: { has: filters.search } },
                { cardioEquipments: { has: filters.search } },
                { rules: { has: filters.search } },
            ],
        }),
    };

    return {
        skip,
        take: limit,
        where,
        orderBy: {
            yearOfGym: "desc" as const,
        },
    };
}
