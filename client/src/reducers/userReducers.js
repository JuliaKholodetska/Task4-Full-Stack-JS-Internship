import {
	USER_REGISTER,
	USER_SIGNIN,
	USER_SIGNOUT,
} from "../constants/userConstants";

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REGISTER.REQUEST:
			return { loading: true };
		case USER_REGISTER.SUCCESS:
			return { loading: false, userInfo: action.payload };
		case USER_REGISTER.FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const userSigninReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_SIGNIN.REQUEST:
			return { loading: true };
		case USER_SIGNIN.SUCCESS:
			return { loading: false, userInfo: action.payload };
		case USER_SIGNIN.FAIL:
			return { loading: false, error: action.payload };
		case USER_SIGNOUT:
			return {};
		default:
			return state;
	}
};
