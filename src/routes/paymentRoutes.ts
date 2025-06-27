import { Router } from "express";
import { requireAuth } from "@clerk/express";
import { createOrder, verifyPayment, webhook } from "../controllers/paymentController";

const paymentRouter = Router();

/**
 * @openapi
 * /api/v1/payment/create-order:
 *   post:
 *     summary: Create a new payment order
 *     tags:
 *       - Payment
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: Invalid input
 */
paymentRouter.post("/create-order", requireAuth(), createOrder);
/**
 * @openapi
 * /api/v1/payment/verify:
 *   post:
 *     summary: Verify a payment
 *     tags:
 *       - Payment
 *     responses:
 *       200:
 *         description: Payment verified successfully
 *       400:
 *         description: Invalid input
 */
paymentRouter.post("/verify", requireAuth(), verifyPayment);
/**
 * @openapi
 * /api/v1/payment/webhook:
 *   post:
 *     summary: Handle payment webhook
 *     tags:
 *       - Payment
 *     responses:
 *       200:
 *         description: Webhook processed
 *       400:
 *         description: Invalid input
 */
paymentRouter.post("/webhook", requireAuth(), webhook);

export default paymentRouter;
