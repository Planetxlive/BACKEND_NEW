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

router.post("/", validateBody(parkingCreateSchema), createParking);
router.get("/", getAllParkings);
router.get("/:id", getParkingById);
router.put("/:id", validateBody(parkingUpdateSchema), updateParking);
router.delete("/:id", deleteParking);

export default router;
