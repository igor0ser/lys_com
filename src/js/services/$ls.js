app.service('$ls', function($window){
	this.get = key => {
		const json = $window.localStorage.getItem(key);
		return (json) ? angular.fromJson(json) : json;
	};

	this.set = (key, data) => $window.localStorage.setItem( key, angular.toJson(data) );

	this.remove = key => $window.localStorage.removeItem(key);
});