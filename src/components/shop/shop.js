app.component('shop', {
	templateUrl: '../../components/shop/shop.html',
	controller: 'shopController'
});

app.controller('shopController', function (model, filteringParams){
	var $ctrl = this;
	$ctrl.products = model.products;
	$ctrl.filteringParams = filteringParams;
	$ctrl.showFilter = false;

	$ctrl.limit = 9;
	$ctrl.showMore = () => $ctrl.limit += 9;
});