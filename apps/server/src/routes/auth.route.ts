import { Router } from "express";
import passport from "../passport";
import { generateToken } from "../utils/crypto";
import { FRONTEND_URL, JWT_SECRET } from "../config";
import { SuccessResponse } from "../utils/formatters";
import { User } from "@repo/types/DBEntities";

const router: Router = Router();

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (_req, res) => {
    let access_token = generateToken(_req.user!, JWT_SECRET, "30d");
    res.redirect(FRONTEND_URL + "/auth/success?access_token=" + access_token);

    return;
  }
);

export default router;
