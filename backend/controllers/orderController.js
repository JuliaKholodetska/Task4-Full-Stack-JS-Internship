import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import { isAuth } from "../utils.js";

const orderController = {
	createOrder: expressAsyncHandler(async (req, res) => {
		const {
			orderItems,
			shippingAddress,
			paymentMethod,
			itemsPrice,
			shippingPrice,
			taxPrice,
			totalPrice,
		} = req.body;
		if (orderItems.length === 0) {
			res.status(400).send({ message: "Cart is empty" });
		} else {
			const order = new Order({
				orderItems: orderItems,
				shippingAddress: shippingAddress,
				paymentMethod: paymentMethod,
				itemsPrice: itemsPrice,
				shippingPrice: shippingPrice,
				taxPrice: taxPrice,
				totalPrice: totalPrice,
				user: req.user._id,
			});
			const createdOrder = await order.save();
			res
				.status(201)
				.send({ message: "New Order Created", order: createdOrder });
		}
	}),
	getById: expressAsyncHandler(async (req, res) => {
		const order = await Order.findById(req.params.id);
		if (order) {
			res.send(order);
		} else {
			res.status(404).send({ message: "Order Not Found" });
		}
	}),
};
export default orderController;
