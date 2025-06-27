import { requireAuth } from "@clerk/express";
import { Router } from "express";
import { validateBody, validateId } from "../middlewares/validate";
import { blogSchema, commentSchema } from "../validators/blog.validator";
import {
    addComment,
    createBlog,
    deleteBlog,
    getAllBlogs,
    getBlogById,
    getComments,
    getUserBlogs,
    toggleLike,
} from "../controllers/blogController";

const blogRouter = Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     BlogCreate:
 *       type: object
 *       required:
 *         - title
 *         - excerpt
 *         - image
 *         - tags
 *         - category
 *         - content
 *       properties:
 *         title:
 *           type: string
 *         excerpt:
 *           type: string
 *         image:
 *           type: string
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *         category:
 *           type: string
 *         content:
 *           type: string
 *         location:
 *           type: string
 *         contactInfo:
 *           type: string
 *     Blog:
 *       allOf:
 *         - $ref: '#/components/schemas/BlogCreate'
 *         - type: object
 *           properties:
 *             id:
 *               type: string
 */

/**
 * @openapi
 * /api/v1/blog:
 *   post:
 *     summary: Create a new blog
 *     tags:
 *       - Blog
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BlogCreate'
 *     responses:
 *       201:
 *         description: Blog created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       400:
 *         description: Invalid input
 */
blogRouter.post("/", requireAuth(), validateBody(blogSchema), createBlog);
/**
 * @openapi
 * /api/v1/blog:
 *   get:
 *     summary: Get all blogs
 *     tags:
 *       - Blog
 *     responses:
 *       200:
 *         description: List of blogs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blog'
 */
blogRouter.get("/", getAllBlogs);
/**
 * @openapi
 * /api/v1/blog/user:
 *   get:
 *     summary: Get blogs for the authenticated user
 *     tags:
 *       - Blog
 *     responses:
 *       200:
 *         description: List of user blogs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blog'
 */
blogRouter.get("/user", requireAuth(), getUserBlogs);
/**
 * @openapi
 * /api/v1/blog/{id}:
 *   get:
 *     summary: Get blog by ID
 *     tags:
 *       - Blog
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       404:
 *         description: Blog not found
 */
blogRouter.get("/:id", validateId("id"), getBlogById);

/**
 * @openapi
 * /api/v1/blog/{id}:
 *   delete:
 *     summary: Delete a blog
 *     tags:
 *       - Blog
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:   
 *       200:
 *         description: Blog deleted
 *       404:
 *         description: Blog not found
 */
blogRouter.delete("/:id", requireAuth(), validateId("id"), deleteBlog);
/**
 * @openapi
 * /api/v1/blog/toggleLike/{blogId}:
 *   post:
 *     summary: Toggle like on a blog
 *     tags:
 *       - Blog
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Like toggled
 *       404:
 *         description: Blog not found
 */
blogRouter.post(
    "/toggleLike/:blogId",
    requireAuth(),
    validateId("blogId"),
    toggleLike
);
/**
 * @openapi
 * /api/v1/blog/comment/{blogId}:
 *   post:
 *     summary: Add a comment to a blog
 *     tags:
 *       - Blog
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comment:
 *                 type: string
 *     responses:
 *       201:
 *         description: Comment added
 *       404:
 *         description: Blog not found
 */
blogRouter.post(
    "/comment/:blogId",
    requireAuth(),
    validateId("blogId"),
    validateBody(commentSchema),
    addComment
);
/**
 * @openapi
 * /api/v1/blog/comment/{blogId}:
 *   get:
 *     summary: Get comments for a blog
 *     tags:
 *       - Blog
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of comments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   comment:
 *                     type: string
 */
blogRouter.get("/comment/:blogId", validateId("blogId"), getComments);



export default blogRouter;
