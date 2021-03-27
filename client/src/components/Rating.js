import React from "react";

export default function Rating(props) {
	const { rating, numReviews } = props;
	const ratings = [];

	for (let i = 1; i <= 5; i++) {
		ratings.push(
			<span>
				<i
					className={
						rating >= i
							? "fa fa-star"
							: rating >= i - 0.5
							? "fa fa-star-half-o"
							: "fa fa-star-o"
					}
				></i>
			</span>
		);
	}

	return (
		<div className="rating">
			{ratings}
			<span>{numReviews >= 1 ? numReviews + " reviews" : "no reviews"}</span>
		</div>
	);
}
