import { Router } from "express";
import {
  getAllUsers,
  getUser,
  addNewUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";

export const userRoutes = Router();

userRoutes.get("/", getAllUsers);

userRoutes.get("/:id", getUser);

userRoutes.post("/", addNewUser);

userRoutes.put("/:id", updateUser);

userRoutes.delete("/:id", deleteUser);
