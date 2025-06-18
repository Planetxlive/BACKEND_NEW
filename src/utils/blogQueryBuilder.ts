export function buildBlogQueryOptions(
    page: number,
    limit: number,
    filters: { blogType?: string; search?: string; userId?: string; }
) {
    const skip = (page - 1) * limit;

    const where: any = {
        ...(filters.userId && { userId: filters.userId }),
        ...(filters.blogType && { blogType: filters.blogType }),
        ...(filters.search && {
            OR: [
                { title: { contains: filters.search, mode: "insensitive" } },
                { description: { contains: filters.search, mode: "insensitive" } },
            ],
        }),
    };

    return {
        skip,
        take: limit,
        where,
        orderBy: {
            createdAt: "desc" as const,
        },
        include: {
            likes: true,
            comments: true,
            user: {
                select: {
                    id: true,
                    name: true,
                    imageURL: true,
                },
            },
        },
    };
}
