import React from "react";

export default function CheckoutSteps(props) {
	return (
		<div className="row checkout-steps">
			<div className={props.stepSignIn ? "active" : ""}>Sign in</div>
			<div className={props.stepShipping ? "active" : ""}>Shipping</div>
			<div className={props.stepPaymentMethod ? "active" : ""}>Payment</div>
			<div className={props.stepPlaceOrder ? "active" : ""}>Place Order</div>
		</div>
	);
}
