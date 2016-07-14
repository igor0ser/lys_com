app.filter('category', function(){
	return function(items, categories) {
		var categoriesNames = [];
		var nothingChecked = true;

		categories.forEach( category => {
			categoriesNames.push(category.name);
			if (category.checked) nothingChecked = false;
		});
		if (nothingChecked) return items;

		var filtered = [];
		items.forEach( item => {
			var i = categoriesNames.indexOf(item.category);
			if ( categories[i].checked ) filtered.push(item);
		});
		return filtered;
	};
});