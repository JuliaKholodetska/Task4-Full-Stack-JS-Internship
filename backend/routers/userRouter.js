import express from "express";
import userControllers from "../controllers/userController.js";
const userRouter = express.Router();

userRouter.get("/", userControllers.getUser);

userRouter.post("/signin", userControllers.signinUser);

userRouter.post("/register", userControllers.registerUser);

export default userRouter;
