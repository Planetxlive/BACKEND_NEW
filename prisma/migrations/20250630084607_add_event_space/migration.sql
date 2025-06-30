-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "event_space_id" TEXT;

-- CreateTable
CREATE TABLE "EventSpace" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "sub_category" TEXT,
    "type" TEXT,
    "property_details" JSONB,
    "pricing" JSONB,
    "amenities" JSONB,
    "facilities" JSONB,
    "available_spaces" JSONB,
    "booking_details" JSONB,
    "additional_services" JSONB,
    "rules" JSONB,
    "nearby_places" JSONB,
    "availability_status" TEXT,
    "age_of_property" INTEGER,
    "description" VARCHAR(1000),
    "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "videos" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventSpace_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "EventSpace_user_id_idx" ON "EventSpace"("user_id");

-- CreateIndex
CREATE INDEX "Review_event_space_id_idx" ON "Review"("event_space_id");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_event_space_id_fkey" FOREIGN KEY ("event_space_id") REFERENCES "EventSpace"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventSpace" ADD CONSTRAINT "EventSpace_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
