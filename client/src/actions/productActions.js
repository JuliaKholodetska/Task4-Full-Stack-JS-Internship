import Axios from "axios";
const {
	PRODUCT_LIST,
	PRODUCT_DETAILS,
	PRODUCT_CATEGORY_LIST,
} = require("../constants/productConstants");

export const listProducts = ({
	name = "",
	category = "",
	order = "",
	min = 0,
	max = 0,
	rating = 0,
}) => async (dispatch) => {
	dispatch({
		type: PRODUCT_LIST.REQUEST,
	});
	try {
		const { data } = await Axios.get(
			`/api/products/?name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
		);
		dispatch({ type: PRODUCT_LIST.SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: PRODUCT_LIST.FAIL, payload: error.message });
	}
};

export const listProductCategories = () => async (dispatch) => {
	dispatch({
		type: PRODUCT_CATEGORY_LIST.REQUEST,
	});
	try {
		const { data } = await Axios.get(`/api/products/categories`);
		dispatch({ type: PRODUCT_CATEGORY_LIST.SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: PRODUCT_CATEGORY_LIST.FAIL, payload: error.message });
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
