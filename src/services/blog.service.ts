import prisma from "../db/db.config";
import { BlogCreate } from "../interfaces/blogInterface";
import { buildBlogQueryOptions } from "../utils/blogQueryBuilder";

class BlogService {
    // create blog
    async createBlog(data: BlogCreate) {
        try {
            const blog = await prisma.blog.create({
                data: {
                    userId: data.userId,
                    blogType: data.blogType,
                    title: data.title,
                    description: data.description,
                    longitude: data.longitude,
                    latitude: data.latitude,
                    contactInfo: data.contactInfo,
                    images: data.images,
                },
            });

            return blog;
        } catch (error) {
            throw error;
        }
    }

    // get all blogs
    async getBlogs(
        page: number = 1,
        limit: number = 10,
        blogType?: string,
        search?: string
    ) {
        try {
            const queryOptions = buildBlogQueryOptions(page, limit, {
                blogType,
                search,
            });

            const [blogs, totalCount] = await Promise.all([
                prisma.blog.findMany(queryOptions),
                prisma.blog.count({ where: queryOptions.where }),
            ]);

            const data = {
                blogs,
                pagination: {
                    total: totalCount,
                    page,
                    limit,
                    totalPages: Math.ceil(totalCount / limit),
                },
            };

            return data;
        } catch (error) {
            throw error;
        }
    }

    // get user blogs
    async getUserBlogs(
        userId: string,
        page: number = 1,
        limit: number = 10,
        blogType?: string,
        search?: string
    ) {
        try {
            const queryOptions = buildBlogQueryOptions(page, limit, {
                userId,
                blogType,
                search,
            });

            const [blogs, totalCount] = await Promise.all([
                prisma.blog.findMany(queryOptions),
                prisma.blog.count({ where: queryOptions.where }),
            ]);

            return {
                blogs,
                pagination: {
                    total: totalCount,
                    page,
                    limit,
                    totalPages: Math.ceil(totalCount / limit),
                },
            };
        } catch (error) {
            throw error;
        }
    }

    // get blog by id
    async getBlogById(id: string) {
        try {
            const blog = await prisma.blog.findUnique({
                where: { id: id },
                include: {
                    likes: true,
                    comments: true,
                },
            });

            return blog;
        } catch (error) {
            throw error;
        }
    }

    // check blog exists
    async checkBlogExists(blogId: string): Promise<boolean> {
        const blog = await prisma.blog.findUnique({
            where: { id: blogId },
            select: { id: true },
        });
        return !!blog;
    }

    // toggle like
    async toggleLike(userId: string, blogId: string) {
        const existing = await prisma.like.findUnique({
            where: {
                userId_blogId: { userId, blogId },
            },
        });

        if (existing) {
            await prisma.like.delete({
                where: { userId_blogId: { userId, blogId } },
            });
            return { liked: false };
        }

        await prisma.like.create({
            data: { userId, blogId },
        });
        return { liked: true };
    }

    // add comment
    async addComment(userId: string, blogId: string, comment: string) {
        return await prisma.comment.create({
            data: {
                blogId,
                userId,
                comment,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        coverURL: true,
                    },
                },
            },
        });
    }

    // get comments
    async getComments(blogId: string) {
        return await prisma.comment.findMany({
            where: { blogId },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        coverURL: true,
                    },
                },
            },
        });
    }
}

export default new BlogService();
