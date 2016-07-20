app.config( function ($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home', {
			url: '/home',
			template: '<home></home>'
		})
		.state('shop', {
			url: '/shop',
			template: '<shop></shop>'
		})
		.state('detail', {
			url: '/detail/:productId',
			template: '<detail></detail>'
		})
			.state('detail.carousel', {
				url: '/carousel',
				template: '<carousel></carousel>'
			})
		.state('cart', {
			url: '/cart',
			template: '<cart></cart>'
		});

	$urlRouterProvider.otherwise('/home');

});