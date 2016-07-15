app.component('modal', {
	templateUrl: '../../components/modal/modal.html',
	controller: 'modalController'
});

app.controller('modalController', function (model){
	var $ctrl = this;

	$ctrl.hide = () => {
		document.querySelector('.modal-container').classList.add('out');
		document.body.classList.remove('modal-active');
	};
});