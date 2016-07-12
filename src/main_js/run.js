app.run(function($http, model){
	$http
		.get('products.json')
		.success( products => model.products = products );
});