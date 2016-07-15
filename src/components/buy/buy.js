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
	$ctrl.addToCart = () => {
		var prodObj = angular.copy($ctrl.productObj);
		prodObj.quantity = $ctrl.quantity;
		cartData.products.push(prodObj);

		//open modal window
		var modal = document.querySelector('.modal-container');
		modal.classList.remove('out');
		modal.classList.add('sketch');
		document.body.classList.add('modal-active');
	};
});