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
		.state('comp2', {
			url: '/comp2',
			template: '<comp2></comp2>'
		});

	$urlRouterProvider.otherwise('/home');

});