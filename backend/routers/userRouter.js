import express from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const userRouter = express.Router();

userRouter.get(
	"/",
	expressAsyncHandler(async (req, res) => {
		const users = await User.find({});
		res.send(users);
	})
);

export default userRouter;
