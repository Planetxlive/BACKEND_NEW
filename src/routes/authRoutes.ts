import { Router } from "express";
import { register } from "../controllers/authController";
import { requireAuth } from "@clerk/express";

const authRouter = Router();

/**
 * @openapi
 * /api/v1/auth/sync-user:
 *   post:
 *     summary: Sync user from Clerk
 *     tags:
 *       - Auth
 *     responses:
 *       201:
 *         description: User synced successfully
 *       400:
 *         description: Invalid input
 */
authRouter.post("/sync-user", requireAuth(), register);

export default authRouter;