import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const productRouter = express.Router();

productRouter.get(
	"/",
	expressAsyncHandler(async (req, res) => {
		const name = req.query.name || "";
		const category = req.query.category || "";
		const order = req.query.order || "";
		const min =
			req.query.min && Number(req.query.min) !== 0 ? Number(req.query.min) : 0;
		const max =
			req.query.max && Number(req.query.max) !== 0 ? Number(req.query.max) : 0;
		const rating =
			req.query.rating && Number(req.query.rating) !== 0
				? Number(req.query.rating)
				: 0;
		const nameFilter = name ? { name: { $regex: name, $options: "i" } } : {};
		const categoryFilter = category ? { category } : {};
		const priceFilter = min && max ? { price: { $gte: min, $lte: max } } : {};
		const ratingFilter = rating ? { rating: { $gte: rating } } : {};
		const sortOrder =
			order === "lowest"
				? { price: 1 }
				: order === "highest"
				? { price: -1 }
				: order === "toprated"
				? { rating: -1 }
				: { _id: -1 };
		const products = await Product.find({
			...nameFilter,
			...categoryFilter,
			...priceFilter,
			...ratingFilter,
		}).sort(sortOrder);
		res.send(products);
	})
);

productRouter.get(
	"/categories",
	expressAsyncHandler(async (req, res) => {
		const categories = await Product.find().distinct("category");
		res.send(categories);
	})
);

productRouter.get(
	"/:id",
	expressAsyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);
		if (product) {
			res.send(product);
		} else {
			res.status(404).send({ message: "Product Not Found" });
		}
	})
);

export default productRouter;
