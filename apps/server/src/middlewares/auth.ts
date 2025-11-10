import { RequestHandler } from "express";
import { verifyToken } from "../utils/crypto";
import { JWT_SECRET } from "../config";
import { User } from "@repo/types/DBEntities";
import { getUserByEmail } from "../database";

export const checkForAuth: RequestHandler = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer") &&
    req.headers.authorization.split(" ")[1]
  ) {
    let payload: User = verifyToken(
      req.headers.authorization.split(" ")[1]!,
      JWT_SECRET
    ) as User;

    if (payload && payload.id) {
      req.user = (await getUserByEmail(payload.email)) as User;
      next();
    }
  }

  next();
};
