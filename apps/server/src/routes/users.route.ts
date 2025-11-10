import { Router } from "express";
import { getAllUsers, getCurrentUser } from "../controllers/users.controller";
import { checkForAuth } from "../middlewares/auth";

const router: Router = Router();

router.get("/users", getAllUsers);
router.get("/users/me", checkForAuth, getCurrentUser);

export default router;
