import prisma from "../db/db.config";
import { Blog } from "../generated/prisma";
import { BlogCreate } from "../interfaces/blogInterface";
import { buildBlogQueryOptions } from "../utils/blogQueryBuilder";
import RedisCache from "../utils/RedisCache";

class BlogService {
    private readonly CACHE_TTL = {
        BLOG: 3600,
        BLOGS_LIST: 300,
        COMMENTS: 600,
    };

    // create blog
    async createBlog(data: BlogCreate) {
        try {
            const blog = await prisma.blog.create({
                data: {
                    userId: data.userId,
                    category: data.category,
                    title: data.title,
                    excerpt: data.excerpt,
                    location: data.location,
                    image: data.image,
                    content: data.content,
                    contactInfo: data.contactInfo,
                    tags: data.tags,
                },
            });
            await this.invalidateBlogCaches(blog.userId, blog.category);

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
            const cacheKey = `blogs:all:${page}:${limit}:${blogType || "all"}:${search || "none"
                }`;
            const cachedData = await RedisCache.get(cacheKey);
            if (cachedData) return cachedData;

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

            await RedisCache.set(cacheKey, data, this.CACHE_TTL.BLOGS_LIST);
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
            const cacheKey = `blogs:user:${userId}:${page}:${limit}:${blogType || "all"
                }:${search || "none"}`;
            const cachedData = await RedisCache.get(cacheKey);
            if (cachedData) return cachedData;

            const queryOptions = buildBlogQueryOptions(page, limit, {
                userId,
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

            await RedisCache.set(cacheKey, data, this.CACHE_TTL.BLOGS_LIST);
            return data;
        } catch (error) {
            throw error;
        }
    }

    // get blog by id
    async getBlogById(id: string) {
        try {
            const cacheKey = `blog:${id}`;
            const cachedBlog = await RedisCache.get(cacheKey);
            if (cachedBlog) return cachedBlog;

            const blog = await prisma.blog.findUnique({
                where: { id: id },
                select: {
                    likes: true,
                    comments: true,
                    category: true,
                    contactInfo: true,
                    content: true,
                    title: true,
                    updatedAt: true,
                    location: true,
                    image: true,
                    id: true,
                    excerpt: true,
                    tags: true,
                    views: true,
                    user: {
                        select: {
                            id: true,
                            name: true,
                            coverURL: true,
                            whatsappMobile: true,
                            mobile: true,
                            state: true,
                            city: true,
                        }
                    }
                }
            });

            if (blog) {
                await RedisCache.set(cacheKey, blog, this.CACHE_TTL.BLOG);
            }

            return blog;
        } catch (error) {
            throw error;
        }
    }

    // increment views
    async incrementViews(id: string) {
        try {
            const updatedBlog = await prisma.blog.update({
                where: { id },
                data: {
                    views: {
                        increment: 1
                    }
                },
                select: { views: true }
            });

            await RedisCache.del(`blog:${id}`);
            return updatedBlog.views;
        } catch (error) {
            throw error;
        }
    }

    // check blog exists
    async checkBlogExists(blogId: string): Promise<boolean> {
        const cacheKey = `blog:exists:${blogId}`;
        const cachedExists = await RedisCache.get<boolean>(cacheKey);
        if (cachedExists !== null) return cachedExists;

        const blog = await prisma.blog.findUnique({
            where: { id: blogId },
            select: { id: true },
        });

        const exists = !!blog;
        await RedisCache.set(cacheKey, exists, this.CACHE_TTL.BLOG);
        return exists;
    }

    // toggle like
    async toggleLike(userId: string, blogId: string) {
        const existing = await prisma.like.findUnique({
            where: { userId_blogId: { userId, blogId } },
        });

        let result;
        if (existing) {
            await prisma.like.delete({
                where: { userId_blogId: { userId, blogId } },
            });
            result = { liked: false };
        } else {
            await prisma.like.create({
                data: { userId, blogId },
            });
            result = { liked: true };
        }

        await RedisCache.del(`blog:${blogId}`);
        return result;
    }

    // add comment
    async addComment(userId: string, blogId: string, comment: string) {
        const newComment = await prisma.comment.create({
            data: { blogId, userId, comment },
            include: {
                user: {

                    select: {
                        id: true,
                        name: true,
                        coverURL: true,
                        state: true,
                        city: true,
                    },
                },
            },
        });

        await Promise.all([
            RedisCache.del(`blog:${blogId}`),
            RedisCache.del(`comments:${blogId}`),
        ]);

        return newComment;
    }

    // get comments
    async getComments(blogId: string) {
        const cacheKey = `comments:${blogId}`;
        const cachedComments = await RedisCache.get(cacheKey);
        if (cachedComments) return cachedComments;

        const comments = await prisma.comment.findMany({
            where: { blogId },
            include: {
                user: {

                    select: {
                        id: true,
                        name: true,
                        coverURL: true,
                        state: true,
                        city: true,
                    },
                },
            },
        });

        await RedisCache.set(cacheKey, comments, this.CACHE_TTL.COMMENTS);
        return comments;
    }

    private async invalidateBlogCaches(userId?: string, blogType?: string) {
        const commonKeys = [
            "blogs:all:1:10:all:none",
            "blogs:all:1:10:all:",
            ...(userId ? [`blogs:user:${userId}:1:10:all:none`] : []),
            ...(blogType ? [`blogs:all:1:10:${blogType}:none`] : []),
        ];

        await Promise.all(commonKeys.map((key) => RedisCache.del(key)));
    }
}

export default new BlogService();
