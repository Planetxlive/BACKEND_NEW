/*
  Warnings:

  - You are about to drop the column `availableSports` on the `Gym` table. All the data in the column will be lost.
  - You are about to drop the column `cardioEquipments` on the `Gym` table. All the data in the column will be lost.
  - You are about to drop the column `counsellingServices` on the `Gym` table. All the data in the column will be lost.
  - You are about to drop the column `gymName` on the `Gym` table. All the data in the column will be lost.
  - You are about to drop the column `locationLatitude` on the `Gym` table. All the data in the column will be lost.
  - You are about to drop the column `locationLongitude` on the `Gym` table. All the data in the column will be lost.
  - You are about to drop the column `lockerFacility` on the `Gym` table. All the data in the column will be lost.
  - You are about to drop the column `rateCard` on the `Gym` table. All the data in the column will be lost.
  - You are about to drop the column `socialMediaLinks` on the `Gym` table. All the data in the column will be lost.
  - You are about to drop the column `strengthEquipments` on the `Gym` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Gym` table. All the data in the column will be lost.
  - You are about to drop the column `yearOfGym` on the `Gym` table. All the data in the column will be lost.
  - Added the required column `counselling_services` to the `Gym` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gym_name` to the `Gym` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_latitude` to the `Gym` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_longitude` to the `Gym` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locker_facility` to the `Gym` table without a default value. This is not possible if the table is not empty.
  - Added the required column `social_media_links` to the `Gym` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Gym` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Gym` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year_of_gym` to the `Gym` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gym" DROP COLUMN "availableSports",
DROP COLUMN "cardioEquipments",
DROP COLUMN "counsellingServices",
DROP COLUMN "gymName",
DROP COLUMN "locationLatitude",
DROP COLUMN "locationLongitude",
DROP COLUMN "lockerFacility",
DROP COLUMN "rateCard",
DROP COLUMN "socialMediaLinks",
DROP COLUMN "strengthEquipments",
DROP COLUMN "userId",
DROP COLUMN "yearOfGym",
ADD COLUMN     "available_sports" TEXT[],
ADD COLUMN     "cardio_equipments" TEXT[],
ADD COLUMN     "counselling_services" JSONB NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "gym_name" TEXT NOT NULL,
ADD COLUMN     "location_latitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "location_longitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "locker_facility" BOOLEAN NOT NULL,
ADD COLUMN     "rate_card" TEXT,
ADD COLUMN     "social_media_links" JSONB NOT NULL,
ADD COLUMN     "strength_equipments" TEXT[],
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD COLUMN     "year_of_gym" INTEGER NOT NULL,
ALTER COLUMN "photos" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "videos" SET DEFAULT ARRAY[]::TEXT[];

-- CreateIndex
CREATE INDEX "Gym_user_id_idx" ON "Gym"("user_id");

-- AddForeignKey
ALTER TABLE "Gym" ADD CONSTRAINT "Gym_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
