app.run(function($http, model){
	$http
		.get('./main_js/products.json')
		.success( products => model.products = products );
});