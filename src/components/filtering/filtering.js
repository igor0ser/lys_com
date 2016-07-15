app.component('filtering', {
	templateUrl: '../../components/filtering/filtering.html',
	controller: 'filteringController'
});

app.controller('filteringController', function (filteringParams){
	var $ctrl = this;
	$ctrl.filteringParams = filteringParams;


	$ctrl.sort = fieldName => {
		if (filteringParams.sortField === fieldName) {
			filteringParams.sortReverse = !filteringParams.sortReverse;
		} else {
			filteringParams.sortField = fieldName;
			filteringParams.sortReverse = false;
		}
	};

	$ctrl.sortIcon = fieldName => {
		if (filteringParams.sortField === fieldName){
			if (filteringParams.sortReverse){
				return 'sort-up';
			} else {
				return 'sort-down';
			}
		}
	};
});