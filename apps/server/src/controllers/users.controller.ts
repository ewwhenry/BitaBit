import { User } from "@repo/types/DBEntities";
import { getUsers } from "../database";
import { SuccessResponse } from "../utils/formatters";
import { RequestHandler } from "express";

export const getAllUsers: RequestHandler = async (req, res) => {
  try {
    const users = await getUsers();

    return res.json(
      new SuccessResponse<User[]>(
        users,
        "Users retrieved successfully"
      ).toJSON()
    );
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getCurrentUser: RequestHandler = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    return res.json(
      new SuccessResponse<any>(
        user,
        "Current user retrieved successfully"
      ).toJSON()
    );
  } catch (error) {
    console.error("Error retrieving current user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
