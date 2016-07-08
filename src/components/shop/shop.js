app.component('shop', {
	templateUrl: '../../components/shop/shop.html',
	controller: shopController
});

function shopController(model){
	this.products = model.products;
}