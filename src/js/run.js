app.run(function($http, model){
	$http
		.get('products.json')
		.success( products => {
			products.forEach( (product, i) => product.id = i );
			model.products = products;
		});
});