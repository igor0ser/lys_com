app.component('detail', {
	templateUrl: '../../components/detail/detail.html',
	controller: 'detailController'
});

app.controller('detailController', function ($stateParams, model){
	var $ctrl = this;
	var id = +$stateParams.productId;
	$ctrl.productObj = model.getProduct(id);
	$ctrl.imgIndex = 0;
});