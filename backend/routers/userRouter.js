import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import { generateToken } from "../utils.js";

const userRouter = express.Router();

userRouter.get(
	"/",
	expressAsyncHandler(async (req, res) => {
		const users = await User.find({});
		res.send(users);
	})
);

userRouter.post(
	"/signin",
	expressAsyncHandler(async (req, res) => {
		const { email, password } = req.body;
		const user = await User.findOne({ email: email });
		if (user) {
			if (bcrypt.compareSync(password, user.password)) {
				res.send({
					_id: user._id,
					name: user.name,
					email: user.email,
					isAdmin: user.isAdmin,
					token: generateToken(user),
				});
				return;
			}
		}
		res.status(401).send({ message: "Invalid email or password" });
	})
);

userRouter.post(
	"/register",
	expressAsyncHandler(async (req, res) => {
		const { name, email, password } = req.body;
		const user = new User({
			name: name,
			email: email,
			password: bcrypt.hashSync(password, 8),
		});
		const userPosible = await User.findOne({ email: email });
		if (!userPosible) {
			const createdUser = await user.save();
			res.send({
				_id: createdUser._id,
				name: createdUser.name,
				email: createdUser.email,
				isAdmin: createdUser.isAdmin,
				token: generateToken(createdUser),
			});
		} else {
			res.status(401).send({ message: "User Already exist" });
		}
	})
);

export default userRouter;
