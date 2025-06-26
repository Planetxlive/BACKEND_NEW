import { Request, Response, NextFunction } from "express";
import { getAuth } from "@clerk/express";
import logger from "../config/logger";
import parkingService from "../services/parking.service";

const createParking = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            logger.warn("Unauthorized parking creation attempt");
            res.status(401).json({ success: false, message: "Unauthorized" });
            return;
        }

        const data = { ...req.body, userId };
        const parking = await parkingService.createParking(data);
        logger.info("Parking created", { parkingId: parking.id, userId });
        res.status(201).json({ success: true, parking });
    } catch (error: any) {
        logger.error("Failed to create parking", { error: error.message });
        next(error);
    }
};

const getAllParkings = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const search = req.query.search as string;
        const parkingType = req.query.parkingType as string;

        const data = await parkingService.getParkings(
            page,
            limit,
            search,
            parkingType
        );
        res.status(200).json({ success: true, data });
    } catch (error: any) {
        logger.error("Failed to fetch parkings", { error: error.message });
        next(error);
    }
};

const getParkingById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const parking = await parkingService.getParkingById(id);
        if (!parking) {
            res.status(404).json({ success: false, message: "Parking not found" });
            return;
        }
        res.status(200).json({ success: true, parking });
    } catch (error: any) {
        logger.error("Failed to fetch parking", { error: error.message });
        next(error);
    }
};

const updateParking = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const { userId } = getAuth(req);
        if (!userId) {
            logger.warn("Unauthorized parking update attempt");
            res.status(401).json({ success: false, message: "Unauthorized" });
            return;
        }

        const parking = (await parkingService.getParkingById(id)) as {
            userId?: string;
        } | null;
        if (!parking || parking.userId !== userId) {
            res
                .status(403)
                .json({ success: false, message: "Forbidden or not found" });
            return;
        }

        const updated = await parkingService.updateParking(id, req.body);
        res.status(200).json({ success: true, parking: updated });
    } catch (error: any) {
        logger.error("Failed to update parking", { error: error.message });
        next(error);
    }
};

const deleteParking = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const { userId } = getAuth(req);
        if (!userId) {
            logger.warn("Unauthorized parking delete attempt");
            res.status(401).json({ success: false, message: "Unauthorized" });
            return;
        }

        const parking = (await parkingService.getParkingById(id)) as {
            userId?: string;
        } | null;
        if (!parking || parking.userId !== userId) {
            res
                .status(403)
                .json({ success: false, message: "Forbidden or not found" });
            return;
        }

        await parkingService.deleteParking(id);
        res
            .status(200)
            .json({ success: true, message: "Parking deleted successfully" });
    } catch (error: any) {
        logger.error("Failed to delete parking", { error: error.message });
        next(error);
    }
};

export {
    createParking,
    getAllParkings,
    getParkingById,
    updateParking,
    deleteParking,
};
