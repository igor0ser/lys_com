app.filter('category', function(){
	return function(items, categories) {
		var categoriesNames = [];
		var filtered = [];

		categories.forEach( category => categoriesNames.push(category.name) );
		items.forEach( item => {
			if (categoriesNames.indexOf(item.category) !== -1) 
				filtered.push(item);
		});
		
		return filtered;
	};
});