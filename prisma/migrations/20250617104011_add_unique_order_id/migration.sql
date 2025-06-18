/*
  Warnings:

  - A unique constraint covering the columns `[razorpay_order_id]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Payment_razorpay_order_id_key" ON "Payment"("razorpay_order_id");
