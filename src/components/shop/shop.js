app.component('shop', {
	templateUrl: '../../components/shop/shop.html',
	controller: 'shopController'
});

app.controller('shopController', function (model){
	var $ctrl = this;
	$ctrl.products = model.products;
	$ctrl.categories = model.categories;

	$ctrl.showFilter = true;

	$ctrl.limit = 9;
	$ctrl.showMore = () => $ctrl.limit += 9;
});