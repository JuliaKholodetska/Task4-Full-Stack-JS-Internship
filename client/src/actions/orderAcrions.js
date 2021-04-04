import Axios from "axios";
import { CART_EMPTY } from "../constants/cartConstants";
import {
	ORDER_CREATE,
	ORDER_DETAILS,
	ORDER_MINE_LIST,
	ORDER_PAY,
} from "../constants/orderConstants";

export const createOrder = (order) => async (dispatch, getState) => {
	dispatch({ type: ORDER_CREATE.REQUEST, payload: order });
	try {
		const {
			userSignin: { userInfo },
		} = getState();
		const { data } = await Axios.post("/api/orders", order, {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		});
		dispatch({ type: ORDER_CREATE.SUCCESS, payload: data.order });
		dispatch({ type: CART_EMPTY });
		localStorage.removeItem("cartItems");
	} catch (error) {
		dispatch({
			type: ORDER_CREATE.FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const detailsOrder = (orderId) => async (dispatch, getState) => {
	dispatch({ type: ORDER_DETAILS.REQUEST, payload: orderId });
	const {
		userSignin: { userInfo },
	} = getState();
	try {
		const { data } = await Axios.get(`/api/orders/${orderId}`, {
			headers: { Authorization: `Bearer ${userInfo.token}` },
		});
		dispatch({ type: ORDER_DETAILS.SUCCESS, payload: data });
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({ type: ORDER_DETAILS.FAIL, payload: message });
	}
};

export const payOrder = (order, paymentResult) => async (
	dispatch,
	getState
) => {
	dispatch({ type: ORDER_PAY.REQUEST, payload: { order, paymentResult } });
	const {
		userSignin: { userInfo },
	} = getState();
	try {
		const { data } = Axios.put(`/api/orders/${order._id}/pay`, paymentResult, {
			headers: { Authorization: `Bearer ${userInfo.token}` },
		});
		dispatch({ type: ORDER_PAY.SUCCESS, payload: data });
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({ type: ORDER_PAY.FAIL, payload: message });
	}
};

export const listOrderMine = () => async (dispatch, getState) => {
	dispatch({ type: ORDER_MINE_LIST.REQUEST });
	const {
		userSignin: { userInfo },
	} = getState();
	try {
		const { data } = await Axios.get("/api/orders/mine", {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		});
		dispatch({ type: ORDER_MINE_LIST.SUCCESS, payload: data });
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({ type: ORDER_MINE_LIST.FAIL, payload: message });
	}
};
