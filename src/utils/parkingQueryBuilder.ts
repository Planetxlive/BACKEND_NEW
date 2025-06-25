export function buildParkingQueryOptions(
    page: number,
    limit: number,
    filters: { search?: string; parkingType?: string; userId?: string; }
) {
    const skip = (page - 1) * limit;

    const where: any = {
        isDeleted: false,
        ...(filters.userId && { userId: filters.userId }),
        ...(filters.parkingType && { parkingType: filters.parkingType }),
        ...(filters.search && {
            OR: [
                { name: { contains: filters.search, mode: "insensitive" } },
                { description: { contains: filters.search, mode: "insensitive" } }
            ]
        })
    };

    return {
        skip,
        take: limit,
        where,
        orderBy: { createdAt: "desc" as const }
    };
}
