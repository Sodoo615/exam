import express from "express";
import {
  createUser,
  getAllUsers,
  getUser,
} from "../controllers/user-controller.js";
import { login } from "../controllers/login-controller.js";
import { signup } from "../controllers/signup-controller.js";
import { verifyToken } from "../middleware/auth.js";
export const userRouter = express.Router();

userRouter.get("/users", verifyToken, getAllUsers);
userRouter.get("/user", verifyToken, getUser);
userRouter.post("/user", createUser);
userRouter.post("/signup", signup);
userRouter.post("/login", login);
