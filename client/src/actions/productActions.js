import Axios from "axios";
const {
	PRODUCT_LIST,
	PRODUCT_DETAILS,
} = require("../constants/productConstants");

export const listProducts = () => async (dispatch) => {
	dispatch({
		type: PRODUCT_LIST.REQUEST,
	});
	try {
		const { data } = await Axios.get("/api/products");
		dispatch({ type: PRODUCT_LIST.SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: PRODUCT_LIST.FAIL, payload: error.message });
	}
};

export const detailsProduct = (productId) => async (dispatch) => {
	dispatch({ type: PRODUCT_DETAILS.REQUEST, payload: productId });
	try {
		const { data } = await Axios.get(`/api/products/${productId}`);
		dispatch({ type: PRODUCT_DETAILS.SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: PRODUCT_DETAILS.FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
