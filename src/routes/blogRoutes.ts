import { requireAuth } from "@clerk/express";
import { Router } from "express";
import { validateBody, validateId } from "../middlewares/validate";
import { blogSchema, commentSchema } from "../validators/blog.validator";
import {
    addComment,
    createBlog,
    getAllBlogs,
    getBlogById,
    getComments,
    getUserBlogs,
    toggleLike,
} from "../controllers/blogController";

const blogRouter = Router();

blogRouter.post("/", requireAuth(), validateBody(blogSchema), createBlog);
blogRouter.get("/", getAllBlogs);
blogRouter.get("/user", requireAuth(), getUserBlogs);
blogRouter.get("/:id", validateId("id"), getBlogById);

blogRouter.post(
    "/toggleLike/:blogId",
    requireAuth(),
    validateId("blogId"),
    toggleLike
);
blogRouter.post(
    "/comment/:blogId",
    requireAuth(),
    validateId("blogId"),
    validateBody(commentSchema),
    addComment
);
blogRouter.get("/comment/:blogId", validateId("blogId"), getComments);

export default blogRouter;
