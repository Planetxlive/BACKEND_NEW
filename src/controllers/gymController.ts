import { NextFunction, Request, Response } from "express";
import logger from "../config/logger";
import { getAuth } from "@clerk/express";
import gymService from "../services/gym.service";

// Create gym
const createGym = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            logger.warn("Unauthorized gym creation attempt");
            res.status(401).json({ success: false, message: "Unauthorized request" });
            return;
        }

        const gym = await gymService.createGym({
            userId,
            ...req.body,
        });

        logger.info("Gym created successfully", { gymId: gym.id, userId });
        res.status(201).json({ success: true, gym });
    } catch (error: any) {
        logger.error("Error while creating gym", {
            error: error.message || error,
        });
        return next(error);
    }
};

// Get all gyms
const getAllGyms = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const category = req.query.category as string | undefined;
        const search = req.query.search as string | undefined;
        const gender = req.query.gender as string | undefined;

        logger.info("Fetching gyms with filters", {
            page,
            limit,
            category,
            search,
            gender,
        });

        const data = await gymService.getGyms(
            page,
            limit,
            search,
            category,
            gender
        );

        logger.info("Gyms fetched successfully", {
            totalGyms: data?.gyms?.length,
            pagination: data?.pagination,
        });

        res.status(200).json({ success: true, data });
    } catch (error: any) {
        logger.error("Failed to process gyms", {
            error: error.message || error,
        });
        return next(error);
    }
};

// Get gyms of logged-in user
const getUserGyms = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            logger.warn("Unauthorized gym fetching by user");
            res.status(401).json({ success: false, message: "Unauthorized request" });
            return;
        }

        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const search = req.query.search as string | undefined;
        const category = req.query.category as string | undefined;
        const gender = req.query.gender as string | undefined;

        logger.info("Fetching user gyms with filters", {
            page,
            limit,
            search,
            category,
            gender,
            userId,
        });

        const data = await gymService.getUserGyms(
            userId,
            page,
            limit,
            search,
            category,
            gender
        );

        logger.info("User gyms fetched successfully", {
            totalGyms: data?.gyms?.length,
            pagination: data?.pagination,
        });

        res.status(200).json({ success: true, data });
    } catch (error: any) {
        logger.error("Failed to process user gyms", {
            error: error.message || error,
        });
        return next(error);
    }
};

// Get gym by ID
const getGymById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        logger.info("Fetching gym by ID", { gymId: id });

        const gym = await gymService.getGymById(id);
        if (!gym) {
            logger.warn("Gym not found", { gymId: id });
            res.status(404).json({ success: false, message: "Gym not found" });
            return;
        }

        logger.info("Gym fetched successfully", { gymId: id });
        res.status(200).json({ success: true, gym });
    } catch (error: any) {
        logger.error("Failed to fetch gym by ID", {
            error: error.message || error,
        });
        return next(error);
    }
};

// update gym
const updateGym = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const { userId } = getAuth(req);

        if (!userId) {
            logger.warn("Unauthorized gym update attempt");
            res.status(401).json({ success: false, message: "Unauthorized request" });
            return;
        }

        const gymMeta = await gymService.getGymMetaById(id);

        if (!gymMeta || gymMeta.isDeleted) {
            logger.warn("Update attempt on non-existent or deleted gym", {
                gymId: id,
            });
            res.status(404).json({ success: false, message: "Gym not found" });
            return;
        }

        if (gymMeta.userId !== userId) {
            logger.warn("User tried to update gym they don't own", {
                gymId: id,
                userId,
            });
            res
                .status(403)
                .json({ success: false, message: "Forbidden: Not your gym" });
            return;
        }

        const updatedGym = await gymService.updateGym(id, userId, data);

        logger.info("Gym updated successfully", { gymId: id, userId });
        res.status(200).json({ success: true, gym: updatedGym });
    } catch (error: any) {
        logger.error("Failed to update gym", {
            error: error.message || error,
            gymId: req.params.id,
        });
        return next(error);
    }
};

const deleteGym = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { userId } = getAuth(req);

        if (!userId) {
            logger.warn("Unauthorized gym delete attempt");
            res.status(401).json({ success: false, message: "Unauthorized request" });
            return;
        }

        const gymMeta = await gymService.getGymMetaById(id);

        if (!gymMeta || gymMeta.isDeleted) {
            logger.warn("Delete attempt on non-existent or deleted gym", {
                gymId: id,
            });
            res.status(404).json({ success: false, message: "Gym not found" });
            return;
        }

        if (gymMeta.userId !== userId) {
            logger.warn("User tried to delete gym they don't own", {
                gymId: id,
                userId,
            });
            res
                .status(403)
                .json({ success: false, message: "Forbidden: Not your gym" });
            return;
        }

        await gymService.deleteGym(id, userId);

        logger.info("Gym deleted successfully", { gymId: id, userId });
        res
            .status(200)
            .json({ success: true, message: "Gym deleted successfully!" });
    } catch (error: any) {
        logger.error("Failed to delete gym", {
            error: error.message || error,
            gymId: req.params.id,
        });
        return next(error);
    }
};

export { createGym, getAllGyms, getUserGyms, getGymById, updateGym, deleteGym };
