app.component('detail', {
	templateUrl: '../../components/detail/detail.html',
	controller: 'detailController'
});

app.controller('detailController', function ($stateParams, model){
	var $ctrl = this;
	var id = +$stateParams.productId;
	console.log(id);
	console.log(model);

	$ctrl.productObj = model.products.filter( p => p.id === id)[0];
	console.log($ctrl.productObj);

});