import { Request, Response, NextFunction } from "express";
import { getAuth } from "@clerk/express";
import logger from "../config/logger";
import payingGuestsService from "../services/pg.service";
import { Review } from "../interfaces/ReviewInterface";

const createPayingGuest = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            logger.warn("Unauthorized paying guest creation attempt");
            res.status(401).json({ success: false, message: "Unauthorized" });
            return;
        }

        const data = { ...req.body, userId };
        const payingGuest = await payingGuestsService.createPayingGuest(data);
        logger.info("Paying guest created", {
            payingGuestId: payingGuest.id,
            userId,
        });
        res.status(201).json({ success: true, payingGuest });
    } catch (error: any) {
        logger.error("Failed to create paying guest", { error: error.message });
        next(error);
    }
};

const getAllPayingGuests = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const search = req.query.search as string;
        const subCategory = req.query.subCategory as string;

        const data = await payingGuestsService.getPayingGuests(
            page,
            limit,
            search,
            subCategory
        );
        res.status(200).json({ success: true, data });
    } catch (error: any) {
        logger.error("Failed to fetch paying guests", { error: error.message });
        next(error);
    }
};

const getPayingGuestById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const payingGuest = await payingGuestsService.getPayingGuestById(id);
        if (!payingGuest) {
            res
                .status(404)
                .json({ success: false, message: "Paying guest not found" });
            return;
        }
        res.status(200).json({ success: true, payingGuest });
    } catch (error: any) {
        logger.error("Failed to fetch paying guest", { error: error.message });
        next(error);
    }
};

const updatePayingGuest = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const { userId } = getAuth(req);
        if (!userId) {
            logger.warn("Unauthorized paying guest update attempt");
            res.status(401).json({ success: false, message: "Unauthorized" });
            return;
        }

        const payingGuest = (await payingGuestsService.getPayingGuestById(id)) as {
            userId?: string;
        } | null;
        if (!payingGuest || payingGuest.userId !== userId) {
            res
                .status(403)
                .json({ success: false, message: "Forbidden or not found" });
            return;
        }

        const updated = await payingGuestsService.updatePayingGuest(id, req.body);
        res.status(200).json({ success: true, payingGuest: updated });
    } catch (error: any) {
        logger.error("Failed to update paying guest", { error: error.message });
        next(error);
    }
};

const deletePayingGuest = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const { userId } = getAuth(req);
        if (!userId) {
            logger.warn("Unauthorized paying guest delete attempt");
            res.status(401).json({ success: false, message: "Unauthorized" });
            return;
        }

        const payingGuest = (await payingGuestsService.getPayingGuestById(id)) as {
            userId?: string;
        } | null;
        if (!payingGuest || payingGuest.userId !== userId) {
            res
                .status(403)
                .json({ success: false, message: "Forbidden or not found" });
            return;
        }

        await payingGuestsService.deletePayingGuest(id);
        res
            .status(200)
            .json({ success: true, message: "Paying guest deleted successfully" });
    } catch (error: any) {
        logger.error("Failed to delete paying guest", { error: error.message });
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
            logger.warn("Unauthorized paying guest availability update attempt");
            res.status(401).json({ success: false, message: "Unauthorized" });
            return;
        }

        const payingGuest = (await payingGuestsService.getPayingGuestById(id)) as {
            userId?: string;
        } | null;
        if (!payingGuest || payingGuest.userId !== userId) {
            res
                .status(403)
                .json({ success: false, message: "Forbidden or not found" });
            return;
        }

        const updated = await payingGuestsService.updateAvailabilityStatus(
            id,
            status
        );
        res.status(200).json({ success: true, payingGuest: updated });
    } catch (error: any) {
        logger.error("Failed to update paying guest availability", {
            error: error.message,
        });
        next(error);
    }
};

const getNearbyPayingGuests = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const latitude = parseFloat(req.query.latitude as string);
        const longitude = parseFloat(req.query.longitude as string);
        const radiusKm = parseFloat(req.query.radiusKm as string) || 5;
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        if (isNaN(latitude) || isNaN(longitude)) {
            res.status(400).json({ success: false, message: "Invalid coordinates" });
            return;
        }

        const data = await payingGuestsService.getNearbyPayingGuests(
            latitude,
            longitude,
            radiusKm,
            page,
            limit
        );
        res.status(200).json({ success: true, data });
    } catch (error: any) {
        logger.error("Failed to fetch nearby paying guests", {
            error: error.message,
        });
        next(error);
    }
};

const addReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params; // pgId
        const { userId } = getAuth(req);
        if (!userId) {
            logger.warn("Unauthorized review creation attempt");
            res.status(401).json({ success: false, message: "Unauthorized" });
            return;
        }

        const { rating, comment } = req.body;
        if (!rating || rating < 1 || rating > 5) {
            res.status(400).json({ success: false, message: "Invalid rating" });
            return;
        }

        const exists = await payingGuestsService.checkPayingGuestExists(id);
        if (!exists) {
            res
                .status(404)
                .json({ success: false, message: "Paying guest not found" });
            return;
        }

        const review = await payingGuestsService.addReview(
            id,
            userId,
            rating,
            comment
        );
        logger.info("Review added", { reviewId: review.id, pgId: id, userId });
        res.status(201).json({ success: true, review });
    } catch (error: any) {
        logger.error("Failed to add review", { error: error.message });
        next(error);
    }
};

const getReviews = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params; // pgId
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        const exists = await payingGuestsService.checkPayingGuestExists(id);
        if (!exists) {
            res
                .status(404)
                .json({ success: false, message: "Paying guest not found" });
            return;
        }

        const data = await payingGuestsService.getReviews(id, page, limit);
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

        const review = (await payingGuestsService.getReview(
            reviewId
        )) as Review | null;

        if (!review || review.userId !== userId) {
            res
                .status(403)
                .json({ success: false, message: "Forbidden or not found" });
            return;
        }

        const updatedReview = await payingGuestsService.updateReview(reviewId, {
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

        const review = await payingGuestsService.getReview(reviewId);

        if (!review || (review as any).userId !== userId) {
            res
                .status(403)
                .json({ success: false, message: "Forbidden or not found" });
            return;
        }

        await payingGuestsService.deleteReview(reviewId);
        res
            .status(200)
            .json({ success: true, message: "Review deleted successfully" });
    } catch (error: any) {
        logger.error("Failed to delete review", { error: error.message });
        next(error);
    }
};

const verifyPayingGuest = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const { userId } = getAuth(req);
        if (!userId) {
            logger.warn("Unauthorized paying guest verification attempt");
            res.status(401).json({ success: false, message: "Unauthorized" });
            return;
        }

        const payingGuest = (await payingGuestsService.getPayingGuestById(id)) as {
            userId?: string;
        } | null;
        if (!payingGuest || payingGuest.userId !== userId) {
            res
                .status(403)
                .json({ success: false, message: "Forbidden or not found" });
            return;
        }

        const verificationData = req.body;
        const verified = await payingGuestsService.verifyPayingGuest(
            id,
            verificationData
        );
        res.status(200).json({ success: true, payingGuest: verified });
    } catch (error: any) {
        logger.error("Failed to verify paying guest", { error: error.message });
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
        const exists = await payingGuestsService.checkPayingGuestExists(id);
        if (!exists) {
            res
                .status(404)
                .json({ success: false, message: "Paying guest not found" });
            return;
        }

        const averageRating = await payingGuestsService.getAverageRating(id);
        res.status(200).json({ success: true, averageRating });
    } catch (error: any) {
        logger.error("Failed to fetch average rating", { error: error.message });
        next(error);
    }
};

const getPayingGuestsByPriceRange = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const minPrice = parseFloat(req.query.minPrice as string);
        const maxPrice = parseFloat(req.query.maxPrice as string);
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        if (isNaN(minPrice) || isNaN(maxPrice) || minPrice > maxPrice) {
            res.status(400).json({ success: false, message: "Invalid price range" });
            return;
        }

        const data = await payingGuestsService.getPayingGuestsByPriceRange(
            minPrice,
            maxPrice,
            page,
            limit
        );
        res.status(200).json({ success: true, data });
    } catch (error: any) {
        logger.error("Failed to fetch paying guests by price range", {
            error: error.message,
        });
        next(error);
    }
};

const getPayingGuestsByAmenities = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const amenitiesRaw = req.query.amenities
            ? Array.isArray(req.query.amenities)
                ? req.query.amenities
                : typeof req.query.amenities === "string"
                    ? req.query.amenities.split(",")
                    : []
            : [];
        const amenities: string[] = amenitiesRaw.map((a) => String(a));
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        if (!amenities.length) {
            res.status(400).json({ success: false, message: "Amenities required" });
            return;
        }

        const data = await payingGuestsService.getPayingGuestsByAmenities(
            amenities,
            page,
            limit
        );
        res.status(200).json({ success: true, data });
    } catch (error: any) {
        logger.error("Failed to fetch paying guests by amenities", {
            error: error.message,
        });
        next(error);
    }
};

const toggleFeatured = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;
        const { isFeatured } = req.body;
        const { userId } = getAuth(req);
        if (!userId) {
            logger.warn("Unauthorized paying guest feature toggle attempt");
            res.status(401).json({ success: false, message: "Unauthorized" });
            return;
        }

        const payingGuest = (await payingGuestsService.getPayingGuestById(id)) as {
            userId?: string;
        } | null;
        if (!payingGuest || payingGuest.userId !== userId) {
            res
                .status(403)
                .json({ success: false, message: "Forbidden or not found" });
            return;
        }

        if (typeof isFeatured !== "boolean") {
            res
                .status(400)
                .json({ success: false, message: "isFeatured must be a boolean" });
            return;
        }

        const updated = await payingGuestsService.toggleFeatured(id, isFeatured);
        res.status(200).json({ success: true, payingGuest: updated });
    } catch (error: any) {
        logger.error("Failed to toggle featured status", { error: error.message });
        next(error);
    }
};

export {
    createPayingGuest,
    getAllPayingGuests,
    getPayingGuestById,
    updatePayingGuest,
    deletePayingGuest,
    updateAvailabilityStatus,
    getNearbyPayingGuests,
    addReview,
    getReviews,
    updateReview,
    deleteReview,
    verifyPayingGuest,
    getAverageRating,
    getPayingGuestsByPriceRange,
    getPayingGuestsByAmenities,
    toggleFeatured,
};
