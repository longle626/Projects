(function(){
	angular.module('shop')

		.controller('newProductCtrl', function($state,$scope,$timeout,$mdSidenav,productsFactory){

			$timeout(function(){
				$mdSidenav('left').open();
			});

			
			$scope.$watch('sidenavOpen' , function(sidenav){


				if(sidenav===false){
					$mdSidenav('left')
					.close()
					.then(function(){
						$state.go('home');

					})

				}

			});

			$scope.closeSidebar = function (){
				$scope.sidenavOpen = false;
				
			}

		});




})();