import { Request, Response, NextFunction } from "express";
import { getAuth } from "@clerk/express";
import logger from "../config/logger";
import eventSpaceService from "../services/eventSpace.service";
import { Review } from "../interfaces/ReviewInterface";

const createEventSpace = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            logger.warn("Unauthorized event space creation attempt");
            res.status(401).json({ success: false, message: "Unauthorized" });
            return;
        }

        const data = { ...req.body, userId };
        const eventSpace = await eventSpaceService.createEventSpace(data);
        logger.info("Event space created", { eventSpaceId: eventSpace.id, userId });
        res.status(201).json({ success: true, eventSpace });
    } catch (error: any) {
        logger.error("Failed to create event space", { error: error.message });
        next(error);
    }
};

const getAllEventSpaces = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const search = req.query.search as string;
        const subCategory = req.query.subCategory as string;

        const data = await eventSpaceService.getEventSpaces(
            page,
            limit,
            search,
            subCategory
        );
        res.status(200).json({ success: true, data });
    } catch (error: any) {
        logger.error("Failed to fetch event spaces", { error: error.message });
        next(error);
    }
};

const getEventSpaceById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const eventSpace = await eventSpaceService.getEventSpaceById(id);
        if (!eventSpace) {
            logger.warn("Event space not found", { eventSpaceId: id });
            res
                .status(404)
                .json({ success: false, message: "Event space not found" });
            return;
        }
        res.status(200).json({ success: true, eventSpace });
    } catch (error: any) {
        logger.error("Failed to fetch event space", { error: error.message });
        next(error);
    }
};

const getUserEventSpaces = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            logger.warn("Unauthorized attempt to fetch user event spaces");
            res.status(401).json({ success: false, message: "Unauthorized" });
            return;
        }

        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        const data = await eventSpaceService.getUserEventSpaces(
            userId,
            page,
            limit
        );
        res.status(200).json({ success: true, data });
    } catch (error: any) {
        logger.error("Failed to fetch user event spaces", { error: error.message });
        next(error);
    }
};

const updateEventSpace = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const { userId } = getAuth(req);
        if (!userId) {
            logger.warn("Unauthorized event space update attempt");
            res.status(401).json({ success: false, message: "Unauthorized" });
            return;
        }

        const existing = (await eventSpaceService.getEventSpaceById(id)) as {
            userId?: string;
        } | null;
        if (!existing || existing.userId !== userId) {
            logger.warn("Forbidden event space update attempt", {
                eventSpaceId: id,
                userId,
            });
            res
                .status(403)
                .json({ success: false, message: "Forbidden or not found" });
            return;
        }

        const updated = await eventSpaceService.updateEventSpace(id, req.body);
        logger.info("Event space updated", { eventSpaceId: id, userId });
        res.status(200).json({ success: true, eventSpace: updated });
    } catch (error: any) {
        logger.error("Failed to update event space", { error: error.message });
        next(error);
    }
};

const deleteEventSpace = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const { userId } = getAuth(req);
        if (!userId) {
            logger.warn("Unauthorized event space delete attempt");
            res.status(401).json({ success: false, message: "Unauthorized" });
            return;
        }

        const existing = (await eventSpaceService.getEventSpaceById(id)) as {
            userId?: string;
        } | null;
        if (!existing || existing.userId !== userId) {
            logger.warn("Forbidden event space delete attempt", {
                eventSpaceId: id,
                userId,
            });
            res
                .status(403)
                .json({ success: false, message: "Forbidden or not found" });
            return;
        }

        await eventSpaceService.deleteEventSpace(id);
        logger.info("Event space deleted", { eventSpaceId: id, userId });
        res
            .status(200)
            .json({ success: true, message: "Event space deleted successfully" });
    } catch (error: any) {
        logger.error("Failed to delete event space", { error: error.message });
        next(error);
    }
};

const updateAvailabilityStatus = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const { userId } = getAuth(req);
        if (!userId) {
            logger.warn("Unauthorized availability status update attempt");
            res.status(401).json({ success: false, message: "Unauthorized" });
            return;
        }

        const existing = (await eventSpaceService.getEventSpaceById(id)) as {
            userId?: string;
        } | null;
        if (!existing || existing.userId !== userId) {
            logger.warn("Forbidden availability status update attempt", {
                eventSpaceId: id,
                userId,
            });
            res
                .status(403)
                .json({ success: false, message: "Forbidden or not found" });
            return;
        }

        const updated = await eventSpaceService.updateAvailabilityStatus(
            id,
            status
        );
        logger.info("Availability status updated", {
            eventSpaceId: id,
            status,
            userId,
        });
        res.status(200).json({ success: true, eventSpace: updated });
    } catch (error: any) {
        logger.error("Failed to update availability status", {
            error: error.message,
        });
        next(error);
    }
};

const addReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params; // eventSpaceId
        const { userId } = getAuth(req);
        if (!userId) {
            logger.warn("Unauthorized review creation attempt");
            res.status(401).json({ success: false, message: "Unauthorized" });
            return;
        }

        const { rating, comment } = req.body;
        if (!rating || rating < 1 || rating > 5) {
            res
                .status(400)
                .json({ success: false, message: "Invalid rating" });
            return;
        }

        const exists = await eventSpaceService.getEventSpaceById(id);
        if (!exists) {
            res
                .status(404)
                .json({ success: false, message: "Event space not found" });
            return;
        }

        const review = await eventSpaceService.addReview(
            id,
            userId,
            rating,
            comment
        );
        logger.info("Review added", {
            reviewId: review.id,
            eventSpaceId: id,
            userId,
        });

        res.status(201).json({ success: true, review });
    } catch (error: any) {
        logger.error("Failed to add review", { error: error.message });
        next(error);
    }
};

const getReviews = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params; // eventSpaceId
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        const exists = await eventSpaceService.getEventSpaceById(id);
        if (!exists) {
            res
                .status(404)
                .json({ success: false, message: "Event space not found" });
            return;
        }

        const data = await eventSpaceService.getReviews(id, page, limit);
        res.status(200).json({ success: true, data });
    } catch (error: any) {
        logger.error("Failed to fetch reviews", { error: error.message });
        next(error);
    }
};

const updateReview = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { reviewId } = req.params;
        const { rating, comment } = req.body;
        const { userId } = getAuth(req);

        if (!userId) {
            logger.warn("Unauthorized review update attempt");
            res.status(401).json({ success: false, message: "Unauthorized" });
            return;
        }

        const review = (await eventSpaceService.getReview(
            reviewId
        )) as Review | null;

        if (!review || review.userId !== userId) {
            res
                .status(403)
                .json({ success: false, message: "Forbidden or not found" });
            return;
        }

        const updatedReview = await eventSpaceService.updateReview(reviewId, {
            rating,
            comment,
        });

        logger.info("Review updated", {
            reviewId: updatedReview.id,
            pgId: review.pgId,
            userId,
        });

        res.status(200).json({ success: true, review: updatedReview });
    } catch (error: any) {
        logger.error("Failed to update review", { error: error.message });
        next(error);
    }
};

const deleteReview = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { reviewId } = req.params;
        const { userId } = getAuth(req);

        if (!userId) {
            logger.warn("Unauthorized review delete attempt");
            res.status(401).json({ success: false, message: "Unauthorized" });
            return;
        }

        const review = await eventSpaceService.getReview(reviewId);
        if (!review || (review as any).userId !== userId) {
            res
                .status(403)
                .json({ success: false, message: "Forbidden or not found" });
            return;
        }

        await eventSpaceService.deleteReview(reviewId);
        res
            .status(200)
            .json({ success: true, message: "Review deleted successfully" });
    } catch (error: any) {
        logger.error("Failed to delete review", { error: error.message });
        next(error);
    }
};

const getAverageRating = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;

        const exists = await eventSpaceService.getEventSpaceById(id);
        if (!exists) {
            res
                .status(404)
                .json({ success: false, message: "Event space not found" });
            return;
        }

        const averageRating = await eventSpaceService.getAverageRating(id);
        res.status(200).json({ success: true, averageRating });
    } catch (error: any) {
        logger.error("Failed to fetch average rating", { error: error.message });
        next(error);
    }
};

export {
    createEventSpace,
    getAllEventSpaces,
    getEventSpaceById,
    getUserEventSpaces,
    updateEventSpace,
    deleteEventSpace,
    updateAvailabilityStatus,
    addReview,
    getReviews,
    updateReview,
    deleteReview,
    getAverageRating,
};
