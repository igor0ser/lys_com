app.service('$modal', function($window){
	this.show = (text) => {
		var modal = document.querySelector('.modal-container');
		var h2 = modal.querySelector('h2');
		h2.innerHTML = text;
		modal.classList.remove('out');
		modal.classList.add('sketch');
		document.body.classList.add('modal-active');
	};
});