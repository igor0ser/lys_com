app.service('cartData', function($ls){
	this.products = [];
	this.summary = 0;
	const KEY = "Cart_Data_App_Mag_2017";
	const save = () => $ls.set(KEY, this.products);
	const recalculate = () => {
		var res = 0;
		for (var i = 0; i < this.products.length; i++) {
			res += this.products[i].price * this.products[i].quantity;
		}
		this.summary = res;
	};
	const finish = () => {
		save();
		recalculate();
	};

	this.load = () => {
		const loadedProducts = $ls.get(KEY);
		if (loadedProducts) this.products = loadedProducts;
		recalculate();
	};

	this.add = (addedProduct, quantity) => {
		var chosenProduct = this.products.filter( p => p.id === addedProduct.id )[0];
		if (chosenProduct) {
			chosenProduct.quantity += quantity;
		} else {
			addedProduct.quantity = quantity;
			this.products.push(addedProduct);
		}
		console.log(this.products);
		finish();
	};

	this.remove = (id) => {
		console.log('removing...');
		for (var i = this.products.length - 1; i >= 0; i--) {
			if (this.products[i].id === id) this.products.splice(i, 1);
		}
		finish();
	};

	this.changeQuantity = (id, more) => {
		var chosenProduct = this.products.filter( p => p.id === id )[0];
		if (more) {
			chosenProduct.quantity += 1;
		} else if (chosenProduct.quantity) {
			chosenProduct.quantity -= 1;
		}
		finish();
	};

	this.clear = () => {
		$ls.remove(KEY);
		this.products = [];
		finish();
	};
});
