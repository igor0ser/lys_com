app.component('cart', {
	templateUrl: '../../components/cart/cart.html',
	controller: cartControloller
});

function cartControloller(cartData){
	var $ctrl = this;
	$ctrl.cart = cartData;
}