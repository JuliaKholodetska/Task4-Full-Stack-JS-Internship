import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

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
						<Link to="/signin">Sign In</Link>
					</div>
				</header>
				<main>
					<Route path="/cart/:id?" component={CartPage}></Route>
					<Route path="/product/:id" component={ProductPage}></Route>
					<Route path="/" component={HomePage} exact></Route>
				</main>
				<footer className="row center">All rights reserved</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
