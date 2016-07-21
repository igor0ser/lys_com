app.component('carousel', {
	templateUrl: '../../components/carousel/carousel.html',
	controller: 'carouselController'
});

app.controller('carouselController', function (model, $state, $stateParams){
	var $ctrl = this;
	$ctrl.id = $stateParams.imgId;
	$ctrl.img = model.getProduct(+$stateParams.productId).img;

	$ctrl.hide = () => {
		$state.go('detail');
	};

	$ctrl.go = ($event, next) => {
		$event.stopPropagation();
		var last = $ctrl.img.length - 1;
		(next) ? $ctrl.id += 1 : $ctrl.id -= 1;
		if ($ctrl.id < 0) $ctrl.id = last;
		if ($ctrl.id > last) $ctrl.id = 0;
	};
});