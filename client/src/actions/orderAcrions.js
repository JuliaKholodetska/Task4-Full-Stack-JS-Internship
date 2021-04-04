import Axios from "axios";
import { CART_EMPTY } from "../constants/cartConstants";
import { ORDER_CREATE } from "../constants/orderConstants";

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
