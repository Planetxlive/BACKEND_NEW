import { validateWebhookSignature } from "razorpay/dist/utils/razorpay-utils";
import { config } from "../config/config";
import razorpay from "../config/razorpay";
import prisma from "../db/db.config";
import logger from "../config/logger";

class PaymentService {
    async createOrder(userId: string, amount: number) {
        const order = await razorpay.orders.create({
            amount: amount * 100,
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        });

        await prisma.payment.create({
            data: {
                userId,
                amount: Number(order.amount),
                currency: order.currency,
                razorpayOrderId: order.id,
                status: "created",
            },
        });

        return order;
    }

    async verifyPayment(
        razorpayOrderId: string,
        razorpayPaymentId: string,
        razorpaySignature: string
    ) {
        const body = `${razorpayOrderId}|${razorpayPaymentId}`;
        const secret = config.razorpay_key_secret;
        const isValid = validateWebhookSignature(body, razorpaySignature, secret!);

        await prisma.payment.update({
            where: { razorpayOrderId },
            data: {
                razorpayPaymentId,
                razorpaySignature,
                status: isValid ? "paid" : "failed",
            },
        });

        if (!isValid) throw new Error("Invalid signature");
        return true;
    }

    async handleWebhook(data: any): Promise<void> {
        const { event, payload } = data;
        const payment = payload?.payment?.entity;

        if (!payment?.order_id) {
            logger.warn("Webhook received with missing order_id");
            return;
        }

        const razorpayOrderId = payment.order_id;
        const method = payment.method || null;

        const statusMap: Record<string, "paid" | "failed"> = {
            "payment.captured": "paid",
            "payment.failed": "failed",
        };

        const newStatus = statusMap[event];

        if (!newStatus) {
            logger.warn(`Unhandled Razorpay event type: ${event}`);
            return;
        }

        try {
            await prisma.payment.update({
                where: { razorpayOrderId },
                data: { status: newStatus, method },
            });
        } catch (err) {
            logger.error("Error updating payment webhook:", err);
        }
    }
}

export default new PaymentService();
