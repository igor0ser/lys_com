app.component('shop', {
	templateUrl: '../../components/shop/shop.html',
	controller: 'shopController'
});

app.controller('shopController', function (model){
	var $ctrl = this;
	$ctrl.products = model.products;
	$ctrl.showFilter = false;
	$ctrl.categories = model.categories;
	$ctrl.productName = '';
	$ctrl.sortField = '';
	$ctrl.sortReverse = false;

	$ctrl.sort = fieldName => {
		if ($ctrl.sortField === fieldName) {
			$ctrl.sortReverse = !$ctrl.sortReverse;
		} else {
			$ctrl.sortField = fieldName;
			$ctrl.sortReverse = false;
		}
	};

	$ctrl.sortIcon = fieldName => {
		console.log('sortIcon');
		if ($ctrl.sortField === fieldName){
			if ($ctrl.sortReverse){
				return 'sort-up';
			} else {
				return 'sort-down';
			}
		}
	};


	$ctrl.limit = 9;
	$ctrl.showMore = () => $ctrl.limit += 9;
});