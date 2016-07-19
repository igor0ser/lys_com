app.component('cart', {
	templateUrl: '../../components/cart/cart.html',
	controller: cartControloller
});

function cartControloller(cartData, $modal){
	var $ctrl = this;
	$ctrl.cart = cartData;
	$ctrl.makeOrder = () => {
		$modal.show('Your order <br> was registered');
		cartData.clear();
	};
}