import { Router } from "express";
import { SuccessResponse } from "../utils/formatters";
import usersRouter from "./users.route";
import authRouter from "./auth.route";

const router: Router = Router();

router.get("/", (req, res) => {
  return res.json(
    new SuccessResponse<boolean>(true, "API is running").toJSON()
  );
});

router.use("/", usersRouter);
router.use("/", authRouter);

export default router;
