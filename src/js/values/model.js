app.value('model', {
	products: [],
	getProduct: function(id){
		return this.products.filter( p => p.id === id)[0];
	}
});