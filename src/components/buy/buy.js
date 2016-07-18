app.component('buy', {
	templateUrl: '../../components/buy/buy.html',
	controller: 'buyController',
	bindings: {
		productObj: '='
	}
});

app.controller('buyController', function (cartData){
	var $ctrl = this;
	$ctrl.quantity = "1";
	$ctrl.addToCart = cartData.add;
});