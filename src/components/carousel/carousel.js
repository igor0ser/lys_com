app.component('carousel', {
	templateUrl: '../../components/carousel/carousel.html',
	controller: 'carouselController'
});

app.controller('carouselController', function (model, $state, $stateParams){
	var $ctrl = this;
	$ctrl.hide = () => {
		console.log('ooo');

		$state.go('detail');
	};
	console.dir($ctrl);
	console.dir($stateParams);
});