import { Router } from "express";
import authRouter from "./authRoutes";
import userRouter from "./userRoutes";
import paymentRouter from "./paymentRoutes";
import blogRouter from "./blogRoutes";
import gymRouter from "./gymRoutes";

const router = Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/payment", paymentRouter);
router.use("/blog", blogRouter);
router.use("/gym", gymRouter);

export default router;