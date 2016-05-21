angular.module('shop',["ngMaterial","ui.router","firebase"])
	.config(function ($mdThemingProvider , $stateProvider) {
		
		$mdThemingProvider.theme('default')
			.primaryPalette('red')
			.accentPalette('yellow');


		$stateProvider
			.state ('home', {
				url: '/home',
				templateUrl:'html/home.tpl.html',
				controller:'shopCtrl'
			})
			.state ('home.newproduct', {
				url: '/newProduct',
				templateUrl:'html/newProduct.tpl.html',
				controller:'newProductCtrl'
			})
			.state ('home.editproduct', {
				url: '/editProduct/:id',
				templateUrl:'html/editProduct.tpl.html',
				controller:'editProductCtrl',
				params: {
					product:null
				}
			})
			.state ('home.signup', {
				url: '/signUp',
				templateUrl:'html/signUp.tpl.html',
				controller:'signUpCtrl'
			})
			.state ('home.login', {
				url: '/login',
				templateUrl:'html/login.tpl.html',
				controller:'loginCtrl'
			});
			


	})
	



