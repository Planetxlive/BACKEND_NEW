import prisma from "../db/db.config";
import { ParkingCreate, ParkingUpdate } from "../interfaces/parkingInterface";
import { buildParkingQueryOptions } from "../utils/parkingQueryBuilder";

class ParkingService {
    // Create parking
    async createParking(data: ParkingCreate) {
        try {
            const parking = await prisma.parking.create({
                data,
            });
            return parking;
        } catch (error) {
            throw error;
        }
    }

    // Get all parkings with filters + pagination
    async getParkings(
        page: number = 1,
        limit: number = 10,
        search?: string,
        parkingType?: string
    ) {
        try {
            const queryOptions = buildParkingQueryOptions(page, limit, {
                search,
                parkingType,
            });

            queryOptions.where.isDeleted = false;

            const [parkings, totalCount] = await Promise.all([
                prisma.parking.findMany(queryOptions),
                prisma.parking.count({ where: queryOptions.where }),
            ]);

            return {
                parkings,
                pagination: {
                    total: totalCount,
                    page,
                    limit,
                    totalPages: Math.ceil(totalCount / limit),
                },
            };
        } catch (error) {
            throw error;
        }
    }

    // Get parking by ID
    async getParkingById(id: string) {
        try {
            const parking = await prisma.parking.findFirst({
                where: { id, isDeleted: false },
            });
            return parking;
        } catch (error) {
            throw error;
        }
    }

    // Get parkings by user
    async getUserParkings(userId: string, page: number = 1, limit: number = 10) {
        try {
            const queryOptions = buildParkingQueryOptions(page, limit, {
                userId,
            });

            queryOptions.where.isDeleted = false;

            const [parkings, totalCount] = await Promise.all([
                prisma.parking.findMany(queryOptions),
                prisma.parking.count({ where: queryOptions.where }),
            ]);

            return {
                parkings,
                pagination: {
                    total: totalCount,
                    page,
                    limit,
                    totalPages: Math.ceil(totalCount / limit),
                },
            };
        } catch (error) {
            throw error;
        }
    }

    // Update parking (only owner can update — ensure in controller)
    async updateParking(id: string, data: ParkingUpdate) {
        try {
            const parking = await prisma.parking.update({
                where: { id },
                data,
            });
            return parking;
        } catch (error) {
            throw error;
        }
    }

    // Soft delete parking (only owner can delete — ensure in controller)
    async deleteParking(id: string) {
        try {
            const parking = await prisma.parking.update({
                where: { id },
                data: { isDeleted: true },
            });
            return parking;
        } catch (error) {
            throw error;
        }
    }

    // Check if parking exists
    async checkParkingExists(id: string): Promise<boolean> {
        try {
            const parking = await prisma.parking.findUnique({
                where: { id },
                select: { id: true, isDeleted: true },
            });
            return !!parking && !parking.isDeleted;
        } catch (error) {
            throw error;
        }
    }
}

export default new ParkingService();
