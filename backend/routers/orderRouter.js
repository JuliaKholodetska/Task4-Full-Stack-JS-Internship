import express from "express";
import orderController from "../controllers/orderController.js";
import { isAuth } from "../utils.js";

const orderRouter = express.Router();

orderRouter.post("/", isAuth, orderController.createOrder);

export default orderRouter;
