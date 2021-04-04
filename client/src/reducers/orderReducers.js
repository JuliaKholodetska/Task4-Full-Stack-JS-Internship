import { ORDER_CREATE } from "../constants/orderConstants";

export const orderCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case ORDER_CREATE.REQUEST:
			return { loading: true };
		case ORDER_CREATE.SUCCESS:
			return { loading: false, success: true, order: action.payload };
		case ORDER_CREATE.FAIL:
			return { loading: false, error: action.payload };
		case ORDER_CREATE.RESET:
			return {};
		default:
			return state;
	}
};
