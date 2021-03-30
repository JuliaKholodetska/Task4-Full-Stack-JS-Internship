import Axios from "axios";
import {
	USER_SIGNIN,
	USER_SIGNOUT,
	USER_REGISTER,
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
	dispatch({ type: USER_SIGNOUT });
};
