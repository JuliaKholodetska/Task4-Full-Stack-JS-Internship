import Axios from "axios";
import {
	USER_SIGNIN,
	USER_SIGNOUT,
	USER_REGISTER,
	USER_DETAILS,
	USER_UPDATE_PROFILE,
} from "../constants/userConstants";

export const register = (name, email, password) => async (dispatch) => {
	dispatch({ type: USER_REGISTER.REQUEST, payload: { email, password } });
	try {
		const { data } = await Axios.post("/api/users/register", {
			name,
			email,
			password,
		});
		dispatch({ type: USER_REGISTER.SUCCESS, payload: data });
		dispatch({ type: USER_SIGNIN.SUCCESS, payload: data });
		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_REGISTER.FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
export const signin = (email, password) => async (dispatch) => {
	dispatch({ type: USER_SIGNIN.REQUEST, payload: { email, password } });
	try {
		const { data } = await Axios.post("/api/users/signin", { email, password });
		dispatch({ type: USER_SIGNIN.SUCCESS, payload: data });
		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_SIGNIN.FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const signout = () => (dispatch) => {
	localStorage.removeItem("userInfo");
	localStorage.removeItem("cartItems");
	localStorage.removeItem("shippingAddress");
	dispatch({ type: USER_SIGNOUT });
};

export const detailsUser = (userId) => async (dispatch, getState) => {
	dispatch({ type: USER_DETAILS.REQUEST, payload: userId });
	const {
		userSignin: { userInfo },
	} = getState();
	try {
		const { data } = await Axios.get(`/api/users/${userId}`, {
			headers: { Authorization: `Bearer ${userInfo.token}` },
		});
		dispatch({ type: USER_DETAILS.SUCCESS, payload: data });
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({ type: USER_DETAILS.FAIL, payload: message });
	}
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
	dispatch({ type: USER_UPDATE_PROFILE.REQUEST, payload: user });
	const {
		userSignin: { userInfo },
	} = getState();
	try {
		const { data } = await Axios.put(`/api/users/profile`, user, {
			headers: { Authorization: `Bearer ${userInfo.token}` },
		});
		dispatch({ type: USER_UPDATE_PROFILE.SUCCESS, payload: data });
		dispatch({ type: USER_SIGNIN.SUCCESS, payload: data });
		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({ type: USER_UPDATE_PROFILE.FAIL, payload: message });
	}
};
