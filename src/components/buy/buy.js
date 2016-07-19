app.component('buy', {
	templateUrl: '../../components/buy/buy.html',
	controller: 'buyController',
	bindings: {
		productObj: '='
	}
});

app.controller('buyController', function (cartData, $modal){
	var $ctrl = this;
	$ctrl.quantity = '1';
	$ctrl.addToCart = (product, quantity) => {
		cartData.add(product, +quantity);
		$modal.show('Product was <br> added to cart');
	};
});