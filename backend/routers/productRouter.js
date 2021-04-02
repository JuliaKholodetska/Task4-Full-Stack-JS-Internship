import express from "express";
import productController from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/", productController.getProduct);

productRouter.get("/categories", productController.getCategories);

productRouter.get("/:id", productController.getProductById);

export default productRouter;
