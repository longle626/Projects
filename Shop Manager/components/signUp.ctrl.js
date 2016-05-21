(function(){
	angular.module('shop')

		.controller('signUpCtrl', function($state,$scope,$timeout,$mdSidenav,productsFactory,$mdToast){

	
			



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

			function showToast(message){
			$mdToast.show(
				$mdToast.simple()
					.content(message)
					.position('top,right')
					.hideDelay(2000)

				);

			}

			$scope.closeSidebar = function (){
				$scope.sidenavOpen = false;
				
			}

			$scope.submitSignUp = function(){
			$state.go('home');
			$scope.closeSidebar();
			showToast('Sign up completed.');


		}
		});




})();