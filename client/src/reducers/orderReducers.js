import {
	ORDER_CREATE,
	ORDER_DETAILS,
	ORDER_MINE_LIST,
	ORDER_PAY,
} from "../constants/orderConstants";

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

export const orderDetailsReducer = (state = { loading: true }, action) => {
	switch (action.type) {
		case ORDER_DETAILS.REQUEST:
			return { loading: true };
		case ORDER_DETAILS.SUCCESS:
			return { loading: false, order: action.payload };
		case ORDER_DETAILS.FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const orderPayReducer = (state = {}, action) => {
	switch (action.type) {
		case ORDER_PAY.REQUEST:
			return { loading: true };
		case ORDER_PAY.SUCCESS:
			return { loading: false, success: true };
		case ORDER_PAY.FAIL:
			return { loading: false, error: action.payload };
		case ORDER_PAY.RESET:
			return {};
		default:
			return state;
	}
};

export const orderMineListReducer = (state = { orders: [] }, action) => {
	switch (action.type) {
		case ORDER_MINE_LIST.REQUEST:
			return { loading: true };
		case ORDER_MINE_LIST.SUCCESS:
			return { loading: false, orders: action.payload };
		case ORDER_MINE_LIST.FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
