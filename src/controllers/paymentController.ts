import { NextFunction, Request, Response } from "express";
import logger from "../config/logger";
import paymentService from "../services/payment.service";
import { getAuth } from "@clerk/express";

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { amount } = req.body;
        if (!amount || typeof amount !== "number" || amount <= 0) {
            res.status(400).json({
                success: false,
                message: "Invalid amount. Please provide a valid number > 0.",
            });
            return;
        }
        const auth = getAuth(req);
        const userId = auth.userId;
        if (!userId) {
            res
                .status(401)
                .json({ success: false, message: "Unauthorized request" });
            return;
        }

        const order = await paymentService.createOrder(userId, amount);
        res.status(200).json({ success: true, order });
    } catch (error) {
        logger.error("Error in create payment:", error);
        return next(error);
    }
};

const verifyPayment = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

        if (!razorpayOrderId || !razorpayPaymentId || !razorpaySignature) {
            res.status(400).json({
                success: false,
                message: "Missing required Razorpay payment fields",
            });
            return;
        }

        await paymentService.verifyPayment(
            razorpayOrderId,
            razorpayPaymentId,
            razorpaySignature
        );

        res.json({ success: true, message: "Payment verified" });
    } catch (error) {
        logger.error("Error in verifyPayment:", error);
        return next(error);
    }
};

const webhook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await paymentService.handleWebhook(req.body);
        res.status(200).json({ success: true, received: true });
    } catch (error) {
        logger.error("Error in payment webhook:", error);
        return next(error);
    }
};

export { createOrder, verifyPayment, webhook };
