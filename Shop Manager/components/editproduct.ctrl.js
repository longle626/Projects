(function(){
	angular.module('shop')

		.controller('editProductCtrl', function($state,$scope,$timeout,$mdSidenav,productsFactory,$mdToast){

			

			$scope.products = productsFactory.ref;

			$scope.product =$scope.products.$getRecord($state.params.id); 


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
					.hideDelay(3000)

				);

			}

			$scope.closeSidebar = function (){
				$scope.sidenavOpen = false;
				
			}

			$scope.saveEdits = function(){
				$scope.products.$save($scope.product).then(function(){
				$scope.closeSidebar();
				showToast('Product updated!');
			})
			}

		});




})();