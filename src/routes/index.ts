import { Router } from "express";
import authRouter from "./authRoutes";
import userRouter from "./userRoutes";
import paymentRouter from "./paymentRoutes";

const router = Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/payment", paymentRouter);

export default router;