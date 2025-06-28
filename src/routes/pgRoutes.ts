import express from "express";
import {
    createPayingGuest,
    getAllPayingGuests,
    getPayingGuestById,
    updatePayingGuest,
    deletePayingGuest,
    updateAvailabilityStatus,
    verifyPayingGuest,
    toggleFeatured,
    getNearbyPayingGuests,
    getPayingGuestsByPriceRange,
    getPayingGuestsByAmenities,
    addReview,
    getReviews,
    updateReview,
    deleteReview,
    getAverageRating,
} from "../controllers/pgController";

import { validateBody } from "../middlewares/validate";
import { pgCreateSchema, pgUpdateSchema } from "../validators/pg.validator";
import {
    reviewCreateSchema,
    reviewUpdateSchema,
} from "../validators/review.validator";

const pgRouter = express.Router();

/**
 * @openapi
 * /api/v1/pg:
 *   post:
 *     summary: Create a new Paying Guest
 *     tags:
 *       - Paying Guest
 */
pgRouter.post("/", validateBody(pgCreateSchema), createPayingGuest);

/**
 * @openapi
 * /api/v1/pg:
 *   get:
 *     summary: Get all Paying Guests
 *     tags:
 *       - Paying Guest
 */
pgRouter.get("/", getAllPayingGuests);

/**
 * @openapi
 * /api/v1/pg/{id}:
 *   get:
 *     summary: Get Paying Guest by ID
 *     tags:
 *       - Paying Guest
 */
pgRouter.get("/:id", getPayingGuestById);

/**
 * @openapi
 * /api/v1/pg/{id}:
 *   put:
 *     summary: Update Paying Guest by ID
 *     tags:
 *       - Paying Guest
 */
pgRouter.put("/:id", validateBody(pgUpdateSchema), updatePayingGuest);

/**
 * @openapi
 * /api/v1/pg/{id}:
 *   delete:
 *     summary: Delete Paying Guest by ID
 *     tags:
 *       - Paying Guest
 */
pgRouter.delete("/:id", deletePayingGuest);

/**
 * @openapi
 * /api/v1/pg/{id}/availability:
 *   patch:
 *     summary: Update availability status
 *     tags:
 *       - Paying Guest
 */
pgRouter.patch("/:id/availability", updateAvailabilityStatus);

/**
 * @openapi
 * /api/v1/pg/{id}/verify:
 *   patch:
 *     summary: Verify a Paying Guest
 *     tags:
 *       - Paying Guest
 */
pgRouter.patch("/:id/verify", verifyPayingGuest);

/**
 * @openapi
 * /api/v1/pg/{id}/featured:
 *   patch:
 *     summary: Toggle featured status
 *     tags:
 *       - Paying Guest
 */
pgRouter.patch("/:id/featured", toggleFeatured);

/**
 * @openapi
 * /api/v1/pg/nearby/search:
 *   get:
 *     summary: Get nearby Paying Guests
 *     tags:
 *       - Paying Guest
 */
pgRouter.get("/nearby/search", getNearbyPayingGuests);

/**
 * @openapi
 * /api/v1/pg/price-range/filter:
 *   get:
 *     summary: Filter Paying Guests by price range
 *     tags:
 *       - Paying Guest
 */
pgRouter.get("/price-range/filter", getPayingGuestsByPriceRange);

/**
 * @openapi
 * /api/v1/pg/amenities/filter:
 *   get:
 *     summary: Filter Paying Guests by amenities
 *     tags:
 *       - Paying Guest
 */
pgRouter.get("/amenities/filter", getPayingGuestsByAmenities);

/**
 * @openapi
 * /api/v1/pg/{id}/reviews:
 *   post:
 *     summary: Add a review to a PG
 *     tags:
 *       - Review
 */
pgRouter.post("/:id/reviews", validateBody(reviewCreateSchema), addReview);

/**
 * @openapi
 * /api/v1/pg/{id}/reviews:
 *   get:
 *     summary: Get all reviews for a PG
 *     tags:
 *       - Review
 */
pgRouter.get("/:id/reviews", getReviews);

/**
 * @openapi
 * /api/v1/pg/reviews/{reviewId}:
 *   put:
 *     summary: Update a review
 *     tags:
 *       - Review
 */
pgRouter.put(
    "/reviews/:reviewId",
    validateBody(reviewUpdateSchema),
    updateReview
);

/**
 * @openapi
 * /api/v1/pg/reviews/{reviewId}:
 *   delete:
 *     summary: Delete a review
 *     tags:
 *       - Review
 */
pgRouter.delete("/reviews/:reviewId", deleteReview);

/**
 * @openapi
 * /api/v1/pg/{id}/rating:
 *   get:
 *     summary: Get average rating for PG
 *     tags:
 *       - Review
 */
pgRouter.get("/:id/rating", getAverageRating);

export default pgRouter;
