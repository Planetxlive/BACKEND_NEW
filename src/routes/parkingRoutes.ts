import express from "express";
import {
    createParking,
    getAllParkings,
    getParkingById,
    updateParking,
    deleteParking,
} from "../controllers/parkingController";
import { validateBody } from "../middlewares/validate";
import {
    parkingCreateSchema,
    parkingUpdateSchema,
} from "../validators/parking.validator";

const router = express.Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     ParkingCreate:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - latitude
 *         - longitude
 *         - price
 *         - yearOfParking
 *         - parkingType
 *         - vacancies
 *         - size
 *         - photos
 *         - videos
 *         - amenities
 *         - accessibility
 *         - capacity
 *         - security
 *         - operatingHours
 *         - booking
 *       properties:
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         latitude:
 *           type: number
 *         longitude:
 *           type: number
 *         price:
 *           type: number
 *         yearOfParking:
 *           type: integer
 *         parkingType:
 *           type: string
 *         vacancies:
 *           type: integer
 *         size:
 *           type: string
 *         photos:
 *           type: array
 *           items:
 *             type: string
 *         videos:
 *           type: array
 *           items:
 *             type: string
 *         amenities:
 *           type: array
 *           items:
 *             type: string
 *         accessibility:
 *           type: string
 *         capacity:
 *           type: integer
 *         security:
 *           type: array
 *           items:
 *             type: string
 *         operatingHours:
 *           type: object
 *         booking:
 *           type: object
 *     Parking:
 *       allOf:
 *         - $ref: '#/components/schemas/ParkingCreate'
 *         - type: object
 *           properties:
 *             id:
 *               type: string
 *
 */

/**
 * @openapi
 * /api/v1/parking:
 *   post:
 *     summary: Create a new parking entry
 *     tags:
 *       - Parking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ParkingCreate'
 *     responses:
 *       201:
 *         description: Parking created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Parking'
 *       400:
 *         description: Invalid input
 */
router.post("/", validateBody(parkingCreateSchema), createParking);

/**
 * @openapi
 * /api/v1/parking:
 *   get:
 *     summary: Get all parking entries
 *     tags:
 *       - Parking
 *     responses:
 *       200:
 *         description: List of parkings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Parking'
 */
router.get("/", getAllParkings);

/**
 * @openapi
 * /api/v1/parking/{id}:
 *   get:
 *     summary: Get parking by ID
 *     tags:
 *       - Parking
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Parking found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Parking'
 *       404:
 *         description: Parking not found
 */
router.get("/:id", getParkingById);

/**
 * @openapi
 * /api/v1/parking/{id}:
 *   put:
 *     summary: Update parking by ID
 *     tags:
 *       - Parking
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ParkingCreate'
 *     responses:
 *       200:
 *         description: Parking updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Parking'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Parking not found
 */
router.put("/:id", validateBody(parkingUpdateSchema), updateParking);

/**
 * @openapi
 * /api/v1/parking/{id}:
 *   delete:
 *     summary: Delete parking by ID
 *     tags:
 *       - Parking
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Parking deleted successfully
 *       404:
 *         description: Parking not found
 */
router.delete("/:id", deleteParking);

export default router;
