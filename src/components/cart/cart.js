app.component('cart', {
	templateUrl: '../../components/cart/cart.html',
	controller: cartControloller
});

function cartControloller(cartData){
	var $ctrl = this;
	$ctrl.products = cartData.products;
	console.log($ctrl.products);
}