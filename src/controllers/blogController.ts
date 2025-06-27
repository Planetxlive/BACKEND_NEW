import { NextFunction, Request, Response } from "express";
import logger from "../config/logger";
import { getAuth } from "@clerk/express";
import blogService from "../services/blog.service";

// create blog
const createBlog = async (req: Request, res: Response, next: NextFunction) => {
    const {
        contactInfo,
        title,
        excerpt,
        location,
        content,
        tags,
        category,
        image
    } = req.body;

    try {
        const { userId } = getAuth(req);
        if (!userId) {
            logger.warn("Unauthorized blog creation attempt");
            res.status(401).json({ success: false, message: "Unauthorized request" });
            return;
        }

        const blog = await blogService.createBlog({
            userId,
            title,
            excerpt,
            location,
            content,
            contactInfo,
            tags,
            category,
            image
        });

        res.status(201).json({ success: true, blog });
    } catch (error: any) {
        logger.error("Error while creating blog", {
            error: error.message || error,
        });
        return next(error);
    }
};

// all blogs
const getAllBlogs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const blogType = req.query.blogType as string | undefined;
        const search = req.query.search as string | undefined;

       

        const data = (await blogService.getBlogs(
            page,
            limit,
            blogType,
            search
        )) as { blogs: any[]; pagination?: any; };

       

        res.status(200).json({ success: true, data });
    } catch (error: any) {
        logger.error("Failed to process blogs", {
            error: error.message || error,
        });
        return next(error);
    }
};

// user blogs
const getUserBlogs = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const blogType = req.query.blogType as string | undefined;
        const search = req.query.search as string | undefined;

        const { userId } = getAuth(req);
        if (!userId) {
            logger.warn("Unauthorized blog fetching by user");
            res.status(401).json({ success: false, message: "Unauthorized request" });
            return;
        }

        logger.info("Fetching user blogs with filters", {
            page,
            limit,
            blogType,
            search,
            userId,
        });

        const data = (await blogService.getUserBlogs(
            userId,
            page,
            limit,
            blogType,
            search
        )) as { blogs: any[]; pagination?: any; };

        logger.info("Blogs fetched successfully", {
            totalBlogs: data?.blogs?.length,
            pagination: data?.pagination,
        });

        res.status(200).json({ success: true, data });
    } catch (error: any) {
        logger.error("Failed to process blogs", {
            error: error.message || error,
        });
        return next(error);
    }
};

// blog by id
const getBlogById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        logger.info("Fetching blog by ID", { blogId: id });

        const blog = await blogService.getBlogById(id);
        
        if (!blog) {
            logger.warn("Blog not found", { blogId: id });
            res.status(404).json({ success: false, message: "Blog not found" });
            return;
        }

        const views = await blogService.incrementViews(id);

        res.status(200).json({ success: true, blog, views });
    } catch (error: any) {
        logger.error("Failed to process blog fetch", {
            error: error.message || error,
        });
        return next(error);
    }
};

// like or dislike blog
const toggleLike = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { blogId } = req.params;
        const { userId } = getAuth(req);

        if (!userId) {
            logger.warn("Unauthorized attempt to toggle like");
            res.status(401).json({ success: false, message: "Unauthorized request" });
            return;
        }

        const blog = await blogService.checkBlogExists(blogId);

        if (!blog) {
            res.status(404).json({ success: false, message: "Blog not found" });
            return;
        }

        const result = await blogService.toggleLike(userId, blogId);

        logger.info("Toggled like status", {
            blogId,
            userId,
            liked: result.liked,
        });

        res.status(200).json({ success: true, ...result });
    } catch (error: any) {
        logger.error("Failed to toggle like", {
            error: error.message || error,
        });
        return next(error);
    }
};

// add comment
const addComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = getAuth(req);
        const { blogId } = req.params;
        const { comment } = req.body;

        if (!userId) {
            logger.warn("Unauthorized comment attempt");
            res.status(401).json({ success: false, message: "Unauthorized request" });
            return;
        }

        const blog = await blogService.checkBlogExists(blogId);

        if (!blog) {
            res.status(404).json({ success: false, message: "Blog not found" });
            return;
        }

        const newComment = await blogService.addComment(userId, blogId, comment);

        logger.info("Comment added successfully", {
            blogId,
            userId,
            commentId: newComment.id,
        });
        res.status(201).json({ success: true, comment: newComment });
    } catch (error: any) {
        logger.error("Failed to add comment", {
            error: error.message || error,
        });
        return next(error);
    }
};

const getComments = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { blogId } = req.params;

        const blog = await blogService.checkBlogExists(blogId);

        if (!blog) {
            res.status(404).json({ success: false, message: "Blog not found" });
            return;
        }

        const commentsResult = await blogService.getComments(blogId);
        const comments: any[] = Array.isArray(commentsResult) ? commentsResult : [];
        logger.info("Fetched comments", {
            blogId,
            commentCount: comments.length,
        });
        res.status(200).json({ success: true, comments });
    } catch (error: any) {
        logger.error("Failed to fetch comments", {
            error: error.message || error,
        });
        return next(error);
    }
};
const deleteBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { userId } = getAuth(req);
 

        if (!userId) {
            logger.warn("Unauthorized blog deletion attempt");
            res.status(401).json({ success: false, message: "Unauthorized request" });
            return;
        }
      

        const blog = await blogService.checkBlogExists(id);
        if (!blog) {
            res.status(404).json({ success: false, message: "Blog not found" });
            return;
        }

        await blogService.deleteBlog(id);

        
        
        res.status(200).json({ success: true, message: "Blog deleted successfully" });
    } catch (error: any) {
        logger.error("Failed to delete blog", {
            error: error.message || error,
        });
        return next(error);
    }
};

export {
    createBlog,
    getBlogById,
    getAllBlogs,
    getUserBlogs,
    toggleLike,
    addComment,
    getComments,
    deleteBlog,
};
