import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import userRouter from "./routers/userRouter.js";

const app = express();
mongoose.connect(
	process.env.MONGODB_URL || "mongodb://localhost/beauty_beach",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	}
);

app.get("/api/products", (req, res) => {
	res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
	const id = +req.params.id;
	const product = data.products.find((x) => x.id === id);
	if (product) {
		res.send(product);
	} else {
		res.status(404).send({ message: "Product Not Found" });
	}
});

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
	res.send("Server is ready");
});

app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server at http://localhost:${port}`);
});
