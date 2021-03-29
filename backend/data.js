import bcrypt from "bcryptjs";
const data = {
	users: [
		{
			name: "Yuliia Kholodetska",
			email: "j.kholodetska@gmail.com",
			password: bcrypt.hashSync("1234", 8),
			isAdmin: true,
		},
		{
			name: "Oleg Machyzak",
			email: "o.machyzak@gmail.com",
			password: bcrypt.hashSync("1234", 8),
			isAdmin: false,
		},
	],
	products: [
		{
			name: "Inglot All covered concealer",
			category: "Face",
			image: "/images/p-1.jpg",
			price: 22,
			countInStock: 10,
			brand: "Inglot",
			rating: 5,
			numReviews: 0,
			dedcription:
				"Was developed especially for the delicate under eye skin. Waterproof and silky formula perfectly covers imperfections and shades under eyes. It provides very natural and long-lasting effect.",
		},
		{
			name: "Inglot Sparkler highlighter",
			category: "Face",
			image: "/images/p-2.jpg",
			price: 25,
			countInStock: 20,
			brand: "Inglot",
			rating: 5,
			numReviews: 11,
			dedcription:
				"A delicate, baked Soft Sparkler for face, eyes and body adds a sophisticated finish to your makeup. A subtle combination of colors with the diversity of shimmering particles brings out the inner glow of your skin.",
		},
		{
			name: "Inglot Mattifying loose powder",
			category: "Face",
			image: "/images/p-3.jpg",
			price: 17,
			countInStock: 30,
			brand: "Inglot",
			rating: 5,
			numReviews: 6,
			dedcription:
				"Loose powder ideal to combat shiny skin. Unique spherical polymers and hybrid silicone powder provide the soft focus effect and make this the ultimate mattifier. Perfect for setting foundation without buildup, and mattifying any surface.Perfect for Sport, on Stage, and in the Studio.",
		},
		{
			name: "Inglot Mattifying under makeup",
			category: "Face",
			image: "/images/p-4.jpg",
			price: 26,
			countInStock: 2,
			brand: "Inglot",
			rating: 5,
			numReviews: 20,
			dedcription:
				"Hypoallergenic Mattifying Under Makeup Base with its smooth, gel consistency softens and thoroughly mattifies the skin preparing it for long-lasting, flawless makeup. Moreover, the product’s special formula gives the effect of evening out minor wrinkles, giving the soft and velvety feel to your skin. It absorbs the excess of sebum without drying out the skin.",
		},
		{
			name: "Inglot Cream foundation",
			category: "Face",
			image: "/images/p-5.jpg",
			price: 23,
			countInStock: 0,
			brand: "Inglot",
			rating: 2.5,
			numReviews: 10,
			dedcription:
				"Long lasting and transfer resistant foundation that blends perfectly without clogging pores. Protects the skin and smoothes textural difference. Provides fairly strong coverage.",
		},
		{
			name: "Inglot Starlight stick highlighter",
			category: "Face",
			image: "/images/p-6.jpg",
			price: 28,
			countInStock: 7,
			brand: "Inglot",
			rating: 5,
			numReviews: 16,
			dedcription:
				"Add more glow and radiance to your skin with Starlight Stick Highlighter and enjoy it for hours!",
		},
		{
			name: "Inglot Secret volume mascara",
			category: "Face",
			image: "/images/p-7.jpg",
			price: 29,
			countInStock: 9,
			brand: "Inglot",
			rating: 5,
			numReviews: 7,
			dedcription:
				"This is the key to unleashing the secret to thicker, longer, and more defined lashes. With a densely packed silicone brush intense, yet very natural volume can be achieved. Secret Volume Mascara is suitable for most lash types and will not smudge or flake.",
		},
		{
			name: "Inglot Makeup brush 15bjf",
			category: "Face",
			image: "/images/p-8.jpg",
			price: 14,
			countInStock: 11,
			brand: "Inglot",
			rating: 4,
			numReviews: 9,
			dedcription:
				"Best for: bronzing powder, blush, pressed powder, loose powder. A classic brush for blush and sculpting powder application. Synthetic version available",
		},
		{
			name: "Inglot Body Sparkles 111",
			category: "Eyes",
			image: "/images/p-9.jpg",
			price: 17,
			countInStock: 21,
			brand: "Inglot",
			rating: 5,
			numReviews: 24,
			dedcription:
				"Brilliant glitter flakes that reflect light and add color and another dimension. Come in variety of shapes and colors to be used on nails, lips, and all over the body.",
		},
		{
			name: "Inglot Multi-Action Toner",
			category: "Face",
			image: "/images/p-10.jpg",
			price: 19,
			countInStock: 3,
			brand: "Inglot",
			rating: 5,
			numReviews: 34,
			dedcription:
				"Nicely refreshing toner available for every skin type. The three variations are each offered in a different color and formula, perfectly suited for respective skin type. Each toner also has refreshing and smoothening properties complimented by special ingredients.",
		},
	],
};

export default data;
