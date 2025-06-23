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

gymRouter.post("/", requireAuth(), validateBody(GymCreateSchema), createGym);
gymRouter.get("/", getAllGyms);
gymRouter.get("/user", requireAuth(), getUserGyms);
gymRouter.get("/:id", validateId("id"), getGymById);
gymRouter.put(
    "/:id",
    requireAuth(),
    validateId("id"),
    validateBody(GymUpdateSchema),
    updateGym
);
gymRouter.delete("/:id", validateId("id"), deleteGym);

export default gymRouter;
