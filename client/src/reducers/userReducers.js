import {
	USER_DETAILS,
	USER_REGISTER,
	USER_SIGNIN,
	USER_SIGNOUT,
	USER_UPDATE_PROFILE,
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

export const userDetailsReducer = (state = { loading: true }, action) => {
	switch (action.type) {
		case USER_DETAILS.REQUEST:
			return { loading: true };
		case USER_DETAILS.SUCCESS:
			return { loading: false, user: action.payload };
		case USER_DETAILS.FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const userUpdateProfileReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_UPDATE_PROFILE.REQUEST:
			return { loading: true };
		case USER_UPDATE_PROFILE.SUCCESS:
			return { loading: false, success: true };
		case USER_UPDATE_PROFILE.FAIL:
			return { loading: false, error: action.payload };
		case USER_UPDATE_PROFILE.RESET:
			return {};
		default:
			return state;
	}
};
