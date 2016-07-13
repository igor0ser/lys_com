app.run(function($http, model){
	$http
		.get('products.json')
		.success( products => {
			var categoriesNames = [];
			products.forEach( (product, i) => { 
				product.id = i;
				if (categoriesNames.indexOf(product.category) === -1 )
					categoriesNames.push(product.category);
			});
			categoriesNames.forEach( name => model.categories.push({name: name, checked: true}));
			model.products = products;
		});
});