import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { signout } from "./actions/userActions";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import SigninPadge from "./pages/SigninPage";

function App() {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	const dispatch = useDispatch();
	const signoutHandler = () => {
		dispatch(signout());
	};

	return (
		<BrowserRouter>
			<div className="grid-container">
				<header className="row">
					<div>
						<Link className="brand" to="/">
							Beauty Beach
						</Link>
					</div>
					<div>
						<Link className="fas fa-shopping-cart" to="/cart">
							{cartItems.length > 0 && (
								<span className="badge">{cartItems.length}</span>
							)}
						</Link>
						{userInfo ? (
							<div className="dropdown">
								<Link to="#">
									{userInfo.name} <i className="fa fa-caret-down"></i>{" "}
								</Link>
								<ul className="dropdown-content">
									<li>
										<Link to="#signout" onClick={signoutHandler}>
											Sign Out
										</Link>
									</li>
								</ul>
							</div>
						) : (
							<Link to="/signin">Sign In</Link>
						)}
					</div>
				</header>
				<main>
					<Route path="/cart/:id?" component={CartPage}></Route>
					<Route path="/product/:id" component={ProductPage}></Route>
					<Route path="/" component={HomePage} exact></Route>
					<Route path="/signin" component={SigninPadge}></Route>
					<Route path="/register" component={RegisterPage}></Route>
				</main>
				<footer className="row center">All rights reserved</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
