import { Router } from "express";
import authRouter from "./authRoutes";
import userRouter from "./userRoutes";
import paymentRouter from "./paymentRoutes";
import blogRouter from "./blogRoutes";

const router = Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/payment", paymentRouter);
router.use("/blog", blogRouter);

export default router;