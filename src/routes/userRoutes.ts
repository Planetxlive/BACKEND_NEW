import { Router } from "express";
import { requireAuth } from "@clerk/express";
import {
    deleteProfile,
    getUser,
    updateProfile,
} from "../controllers/userController";

const userRouter = Router();

/**
 * @openapi
 * /api/v1/user:
 *   get:
 *     summary: Get the authenticated user's profile
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: User profile
 *       401:
 *         description: Unauthorized
 */
userRouter.get("/", requireAuth(), getUser);
/**
 * @openapi
 * /api/v1/user:
 *   put:
 *     summary: Update the authenticated user's profile
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: User profile updated
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
userRouter.put("/", requireAuth(), updateProfile);
/**
 * @openapi
 * /api/v1/user:
 *   delete:
 *     summary: Delete the authenticated user's profile
 *     tags:
 *       - User
 *     responses:
 *       204:
 *         description: User profile deleted
 *       401:
 *         description: Unauthorized
 */
userRouter.delete("/", requireAuth(), deleteProfile);

export default userRouter;
