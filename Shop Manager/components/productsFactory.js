(function(){
"use strict"

	angular.module('shop')
	.factory('productsFactory', function($http,$firebaseArray){

	// connect to firebase
		var ref = new Firebase('https://shopmanage626.firebaseio.com/')

		return {
			ref:$firebaseArray(ref)
		}
		
	});




})();