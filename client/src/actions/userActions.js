import Axios from "axios";
import { USER_SIGNIN, USER_SIGNOUT } from "../constants/userConstants";

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
