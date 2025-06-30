export function buildEventSpaceQueryOptions(
    page: number,
    limit: number,
    filters: { search?: string; subCategory?: string; userId?: string; }
) {
    const skip = (page - 1) * limit;

    const where: any = {
        isDeleted: false,
        ...(filters.userId && { userId: filters.userId }),
        ...(filters.subCategory && { subCategory: filters.subCategory }),
        ...(filters.search && {
            OR: [
                { description: { contains: filters.search, mode: "insensitive" } },
                { type: { contains: filters.search, mode: "insensitive" } },
            ],
        }),
    };

    return {
        skip,
        take: limit,
        where,
        orderBy: { createdAt: "desc" as const },
    };
}
