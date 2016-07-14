app.component('cart', {
	templateUrl: '../../components/cart/cart.html',
	controller: comp2Controloller
});

function comp2Controloller(model){
	console.log(123);
	console.log(model);
}