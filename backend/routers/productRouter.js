import express from "express";
import productControllers from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/", productControllers.getProduct);

productRouter.get("/:id", productControllers.getProductById);

export default productRouter;
