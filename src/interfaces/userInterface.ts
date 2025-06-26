import { Prisma } from "../generated/prisma";

export type UserWithRelations = Prisma.UserGetPayload<{
    include: {
        blogs: true;
        likes: true;
        comments: true;
        gyms: true;
        parkings: true;
    };
}>;
