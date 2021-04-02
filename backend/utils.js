import jwt from "jsonwebtoken";

export const generateToken = (user) => {
	return jwt.sign(
		{
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		},
		process.env.JWT_SECRET || "sm",
		{
			expiresIn: "30d",
		}
	);
};
