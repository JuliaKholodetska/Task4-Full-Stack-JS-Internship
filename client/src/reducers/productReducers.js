const {
	PRODUCT_LIST,
	PRODUCT_DETAILS,
} = require("../constants/productConstants");

export const productListReducer = (
	state = { loading: true, products: [] },
	action
) => {
	switch (action.type) {
		case PRODUCT_LIST.REQUEST:
			return { loading: true };
		case PRODUCT_LIST.SUCCESS:
			return { loading: false, products: action.payload };
		case PRODUCT_LIST.FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const productDetailsReducer = (
	state = { product: {}, loading: true },
	action
) => {
	switch (action.type) {
		case PRODUCT_DETAILS.REQUEST:
			return { loading: true };
		case PRODUCT_DETAILS.SUCCESS:
			return { loading: false, product: action.payload };
		case PRODUCT_DETAILS.FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
