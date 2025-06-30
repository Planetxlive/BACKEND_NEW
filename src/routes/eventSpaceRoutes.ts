import express from "express";
import {
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
} from "../controllers/eventSpaceController";
import { validateBody } from "../middlewares/validate";
import {
    eventSpaceCreateSchema,
    eventSpaceUpdateSchema,
    updateAvailabilitySchema,
} from "../validators/eventSpace.validator";
import { reviewCreateSchema, reviewUpdateSchema } from "../validators/review.validator";

const eventSpaceRouter = express.Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     EventSpaceCreate:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - price
 *         - category
 *         - subCategory
 *         - capacity
 *         - location
 *         - photos
 *         - amenities
 *       properties:
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         price:
 *           type: number
 *         category:
 *           type: string
 *         subCategory:
 *           type: string
 *         capacity:
 *           type: number
 *         location:
 *           type: object
 *         photos:
 *           type: array
 *           items:
 *             type: string
 *         amenities:
 *           type: array
 *           items:
 *             type: string
 *     EventSpace:
 *       allOf:
 *         - $ref: '#/components/schemas/EventSpaceCreate'
 *         - type: object
 *           properties:
 *             id:
 *               type: string
 */

/**
 * @openapi
 * /api/v1/event-space:
 *   post:
 *     summary: Create a new event space
 *     tags:
 *       - EventSpace
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EventSpaceCreate'
 *     responses:
 *       201:
 *         description: Created successfully
 */
eventSpaceRouter.post("/", validateBody(eventSpaceCreateSchema), createEventSpace);

/**
 * @openapi
 * /api/v1/event-space:
 *   get:
 *     summary: Get all event spaces
 *     tags:
 *       - EventSpace
 *     responses:
 *       200:
 *         description: List of event spaces
 */
eventSpaceRouter.get("/", getAllEventSpaces);

/**
 * @openapi
 * /api/v1/event-space/user:
 *   get:
 *     summary: Get event spaces created by the logged-in user
 *     tags:
 *       - EventSpace
 *     responses:
 *       200:
 *         description: List of user event spaces
 */
eventSpaceRouter.get("/user", getUserEventSpaces);

/**
 * @openapi
 * /api/v1/event-space/{id}:
 *   get:
 *     summary: Get event space by ID
 *     tags:
 *       - EventSpace
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Event space found
 *       404:
 *         description: Not found
 */
eventSpaceRouter.get("/:id", getEventSpaceById);

/**
 * @openapi
 * /api/v1/event-space/{id}:
 *   put:
 *     summary: Update an event space
 *     tags:
 *       - EventSpace
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EventSpaceCreate'
 *     responses:
 *       200:
 *         description: Updated successfully
 */
eventSpaceRouter.put("/:id", validateBody(eventSpaceUpdateSchema), updateEventSpace);

/**
 * @openapi
 * /api/v1/event-space/{id}:
 *   delete:
 *     summary: Delete an event space
 *     tags:
 *       - EventSpace
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted successfully
 */
eventSpaceRouter.delete("/:id", deleteEventSpace);

/**
 * @openapi
 * /api/v1/event-space/{id}/status:
 *   patch:
 *     summary: Update availability status
 *     tags:
 *       - EventSpace
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Availability status updated
 */
eventSpaceRouter.patch(
    "/:id/status",
    validateBody(updateAvailabilitySchema),
    updateAvailabilityStatus
);

/**
 * @openapi
 * /api/v1/event-space/{id}/reviews:
 *   post:
 *     summary: Add a review to an event space
 *     tags:
 *       - EventSpaceReview
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Event space ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReviewCreate'
 *     responses:
 *       201:
 *         description: Review added successfully
 */
eventSpaceRouter.post(
    "/:id/reviews",
    validateBody(reviewCreateSchema),
    addReview
);

/**
 * @openapi
 * /api/v1/event-space/{id}/reviews:
 *   get:
 *     summary: Get all reviews for an event space
 *     tags:
 *       - EventSpaceReview
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Event space ID
 *         schema:
 *           type: string
 *       - name: page
 *         in: query
 *         schema:
 *           type: integer
 *       - name: limit
 *         in: query
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of reviews
 */
eventSpaceRouter.get("/:id/reviews", getReviews);

/**
 * @openapi
 * /api/v1/event-space/reviews/{reviewId}:
 *   put:
 *     summary: Update a review for an event space
 *     tags:
 *       - EventSpaceReview
 *     parameters:
 *       - name: reviewId
 *         in: path
 *         required: true
 *         description: Review ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReviewUpdate'
 *     responses:
 *       200:
 *         description: Review updated
 */
eventSpaceRouter.put(
    "/reviews/:reviewId",
    validateBody(reviewUpdateSchema),
    updateReview
);

/**
 * @openapi
 * /api/v1/event-space/reviews/{reviewId}:
 *   delete:
 *     summary: Delete a review for an event space
 *     tags:
 *       - EventSpaceReview
 *     parameters:
 *       - name: reviewId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review deleted successfully
 */
eventSpaceRouter.delete("/reviews/:reviewId", deleteReview);

/**
 * @openapi
 * /api/v1/event-space/{id}/rating:
 *   get:
 *     summary: Get average rating for an event space
 *     tags:
 *       - EventSpaceReview
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Event space ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Average rating returned
 */
eventSpaceRouter.get("/:id/rating", getAverageRating);

export default eventSpaceRouter;
