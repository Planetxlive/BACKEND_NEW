import { requireAuth } from "@clerk/express";
import { Router } from "express";
import {
    createGym,
    deleteGym,
    getAllGyms,
    getGymById,
    getUserGyms,
    updateGym,
} from "../controllers/gymController";
import { validateBody, validateId } from "../middlewares/validate";
import { GymCreateSchema, GymUpdateSchema } from "../validators/gym.validator";

const gymRouter = Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     GymCreate:
 *       type: object
 *       required:
 *         - gymName
 *         - locationLatitude
 *         - locationLongitude
 *         - yearOfGym
 *         - description
 *         - lockerFacility
 *         - timing
 *         - categories
 *         - services
 *         - benefits
 *         - pricing
 *         - amenities
 *         - availableSports
 *         - strengthEquipments
 *         - cardioEquipments
 *         - rules
 *         - gender
 *         - counsellingServices
 *         - socialMediaLinks
 *       properties:
 *         gymName:
 *           type: string
 *         locationLatitude:
 *           type: number
 *         locationLongitude:
 *           type: number
 *         yearOfGym:
 *           type: integer
 *         description:
 *           type: string
 *         photos:
 *           type: array
 *           items:
 *             type: string
 *         videos:
 *           type: array
 *           items:
 *             type: string
 *         lockerFacility:
 *           type: boolean
 *         timing:
 *           type: object
 *         categories:
 *           type: array
 *           items:
 *             type: string
 *         rateCard:
 *           type: string
 *         website:
 *           type: string
 *         services:
 *           type: array
 *           items:
 *             type: string
 *         benefits:
 *           type: array
 *           items:
 *             type: string
 *         pricing:
 *           type: object
 *         amenities:
 *           type: array
 *           items:
 *             type: string
 *         availableSports:
 *           type: array
 *           items:
 *             type: string
 *         strengthEquipments:
 *           type: array
 *           items:
 *             type: string
 *         cardioEquipments:
 *           type: array
 *           items:
 *             type: string
 *         rules:
 *           type: array
 *           items:
 *             type: string
 *         gender:
 *           type: string
 *           enum: [Male, Female, Unisex]
 *         counsellingServices:
 *           type: object
 *         socialMediaLinks:
 *           type: object
 *     Gym:
 *       allOf:
 *         - $ref: '#/components/schemas/GymCreate'
 *         - type: object
 *           properties:
 *             id:
 *               type: string
 */
/**
 * @openapi
 * /api/v1/gym:
 *   post:
 *     summary: Create a new gym
 *     tags:
 *       - Gym
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GymCreate'
 *     responses:
 *       201:
 *         description: Gym created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gym'
 *       400:
 *         description: Invalid input
 */
gymRouter.post("/", requireAuth(), validateBody(GymCreateSchema), createGym);
/**
 * @openapi
 * /api/v1/gym:
 *   get:
 *     summary: Get all gyms
 *     tags:
 *       - Gym
 *     responses:
 *       200:
 *         description: List of gyms
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Gym'
 */
gymRouter.get("/", getAllGyms);
/**
 * @openapi
 * /api/v1/gym/user:
 *   get:
 *     summary: Get gyms for the authenticated user
 *     tags:
 *       - Gym
 *     responses:
 *       200:
 *         description: List of user gyms
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Gym'
 */
gymRouter.get("/user", requireAuth(), getUserGyms);
/**
 * @openapi
 * /api/v1/gym/{id}:
 *   get:
 *     summary: Get gym by ID
 *     tags:
 *       - Gym
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Gym found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gym'
 *       404:
 *         description: Gym not found
 */
gymRouter.get("/:id", validateId("id"), getGymById);
/**
 * @openapi
 * /api/v1/gym/{id}:
 *   put:
 *     summary: Update gym by ID
 *     tags:
 *       - Gym
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
 *             $ref: '#/components/schemas/GymCreate'
 *     responses:
 *       200:
 *         description: Gym updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Gym'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Gym not found
 */
gymRouter.put(
    "/:id",
    requireAuth(),
    validateId("id"),
    validateBody(GymUpdateSchema),
    updateGym
);
/**
 * @openapi
 * /api/v1/gym/{id}:
 *   delete:
 *     summary: Delete gym by ID
 *     tags:
 *       - Gym
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Gym deleted successfully
 *       404:
 *         description: Gym not found
 */
gymRouter.delete("/:id", validateId("id"), deleteGym);

export default gymRouter;
