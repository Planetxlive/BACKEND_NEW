import { Router } from "express";
import { requireAuth } from "@clerk/express";
import { createOrder, verifyPayment, webhook } from "../controllers/paymentController";

const paymentRouter = Router();

paymentRouter.post("/create-order", requireAuth(), createOrder);
paymentRouter.post("/verify", requireAuth(), verifyPayment);
paymentRouter.post("/webhook", requireAuth(), webhook);

export default paymentRouter;
