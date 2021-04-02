import Product from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler";

const productControllers = {
	getProduct: expressAsyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.send(products);
	}),
	getProductById: expressAsyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);
		if (product) {
			res.send(product);
		} else {
			res.status(404).send({ message: "Product Not Found" });
		}
	}),
};
export default productControllers;
