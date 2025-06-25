-- CreateTable
CREATE TABLE "Parking" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name_of_parking" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "price" JSONB NOT NULL,
    "year_of_parking" INTEGER NOT NULL,
    "parking_type" TEXT NOT NULL,
    "vacancies" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "photos" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "videos" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "amenities" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "accessibility" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "security" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "operating_hours" JSONB NOT NULL,
    "booking" JSONB NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Parking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Parking_user_id_idx" ON "Parking"("user_id");

-- AddForeignKey
ALTER TABLE "Parking" ADD CONSTRAINT "Parking_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
