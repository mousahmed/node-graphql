const products = [
	{
		id: "redshoe",
		description: "Red Shoe",
		price: 42.12,
		reviews: [],
	},
	{
		id: "bluejeans",
		description: "Blue jeans",
		price: 55.55,
		reviews: [],
	},
];

function getAllProducts() {
	return products;
}

function getProductsByPrice(min, max) {
	return products.filter((product) => {
		return product.price >= min && product.price <= max;
	});
}

function getProductsById(id) {
	return products.find((product) => {
		return product.id === id;
	});
}

function addNewProduct(id, description, price) {
	const newProduct = {
		id,
		price,
		description,
		reviews: [],
	};

	products.push(newProduct);
	return newProduct;
}

function addProductReview(id, rating, comment) {
	const matchedProduct = getProductsById(id);

	if (matchedProduct) {
		const newProductReview = {
			rating,
			comment,
		};
		matchedProduct.reviews.push(newProductReview);
		return newProductReview;
	}
}
module.exports = {
	getAllProducts,
	getProductsByPrice,
	getProductsById,
	addNewProduct,
	addProductReview,
};
