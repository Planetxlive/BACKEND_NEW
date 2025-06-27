-- CreateTable
CREATE TABLE "PayingGuests" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "sub_category" TEXT[],
    "room_details" JSONB,
    "meal_details" JSONB,
    "availability_status" TEXT,
    "available_from" TIMESTAMP(3),
    "age_of_property" INTEGER,
    "description" VARCHAR(1000),
    "amenities" JSONB,
    "rules" JSONB,
    "other_features" JSONB,
    "society_building_features" JSONB,
    "nearby_places" JSONB,
    "pricing" JSONB,
    "safety_features" JSONB,
    "community_features" JSONB,
    "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "videos" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "verification" JSONB,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PayingGuests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "gym_id" TEXT,
    "parking_id" TEXT,
    "pg_id" TEXT,
    "rating" INTEGER,
    "comment" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PayingGuests_user_id_idx" ON "PayingGuests"("user_id");

-- CreateIndex
CREATE INDEX "Review_user_id_idx" ON "Review"("user_id");

-- CreateIndex
CREATE INDEX "Review_gym_id_idx" ON "Review"("gym_id");

-- CreateIndex
CREATE INDEX "Review_parking_id_idx" ON "Review"("parking_id");

-- CreateIndex
CREATE INDEX "Review_pg_id_idx" ON "Review"("pg_id");

-- AddForeignKey
ALTER TABLE "PayingGuests" ADD CONSTRAINT "PayingGuests_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "Gym"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_parking_id_fkey" FOREIGN KEY ("parking_id") REFERENCES "Parking"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_pg_id_fkey" FOREIGN KEY ("pg_id") REFERENCES "PayingGuests"("id") ON DELETE SET NULL ON UPDATE CASCADE;
