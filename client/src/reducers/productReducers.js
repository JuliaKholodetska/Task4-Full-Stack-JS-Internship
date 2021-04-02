const {
	PRODUCT_LIST,
	PRODUCT_DETAILS,
	PRODUCT_CATEGORY_LIST,
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

export const productCategoryListReducer = (
	state = { loading: true, products: [] },
	action
) => {
	switch (action.type) {
		case PRODUCT_CATEGORY_LIST.REQUEST:
			return { loading: true };
		case PRODUCT_CATEGORY_LIST.SUCCESS:
			return { loading: false, categories: action.payload };
		case PRODUCT_CATEGORY_LIST.FAIL:
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
