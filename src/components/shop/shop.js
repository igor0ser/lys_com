app.component('shop', {
	templateUrl: '../../components/shop/shop.html',
	controller: 'shopController'
});

app.controller('shopController', function (model){
	var $ctrl = this;
	$ctrl.products = model.products;
});