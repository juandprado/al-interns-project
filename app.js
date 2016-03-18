(function(){
	var app = angular.module('store', ['store-products']);
	
	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	
	app.controller('ReviewController', function(){
		this.review = {stars: 5};
		
		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {stars: 5};
		};
		
	});
	

	
	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'Is kinda cute',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'dodecahedron.png',
					thumb: 'dodecahedron01.png'
				},
			],
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "I deeply hate this product!",
					author: "nelson@herrera.com"
				},
			],
		},
		{
			name: 'Emerald',
			price: 4.50,
			description: 'Is really cute',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'emerald.png',
					thumb: 'emerald01.png'
				},
			],
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "I deeply hate this product!",
					author: "nelson@herrera.com"
				},
			],
		},
		{
			name: 'Diamond',
			price: 21.95,
			description: 'Is wonderfully cute',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'diamond.png',
					thumb: 'diamond01.png'
				},
			],
			reviews: [
				{
					stars: 4,
					body: "I like this product!",
					author: "fercho@sanche.com"
				},
				{
					stars: 2,
					body: "This product is .. Mneh",
					author: "daniel@correa.com"
				},
			],
		},
		{
			name: 'Pearl',
			price: 7.70,
			description: 'Meh',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'pearl.png',
					thumb: 'pearl01.png'
				},
			],
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "I deeply hate this product!",
					author: "nelson@herrera.com"
				},
			],
		}	
	]
})();
