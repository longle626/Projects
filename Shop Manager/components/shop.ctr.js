(function(){
'use strict';

	angular
	.module('shop')
	.controller('shopCtrl',function($scope,$timeout,$state,$http , $mdDialog, productsFactory, $mdSidenav , $mdToast){
		
		//  get product.json without firebase
		// productsFactory.getProducts().success (function(resp){

		// 		$scope.products = resp;

		// })

		// read data from firebase server

		$scope.convert = function(){

			return parseInt($scope.products.price)
		}

		$scope.products=productsFactory.ref;
		
		//filter component 

		$scope.sortOrder = "";

		$scope.filterMessage = "filter products"
		
		$scope.filter = function (){

			$scope.showFilter=!$scope.showFilter;


			if($scope.showFilter===true){
			$scope.filterMessage="Close Filter "
			
			}else {
			$scope.filterMessage="Filter Products "
			};

		}

		$scope.clearFilter = function(){
			$scope.searchProduct = "";
			$scope.sortOrder="";
		}

		// side nav functionality

		$scope.openSidebar = function(){
			
			$state.go('home.newproduct');
				
		}

		$scope.closeSidebar =function(){
			$mdSidenav('left').close();
			$scope.product={};
			
		}

		$scope.editProduct = function(product){
			$state.go('home.editproduct', {
				id: product.$id,
				// passing product object through router
				product:product
			});

		}

		// $scope.saveEdit = function(){
		// 	$scope.editing = false;
		// 	$scope.product={};
		// 	 $scope.closeSidebar();
		// 	showToast('Product updated!');

		// }

		function showToast(message){
			$mdToast.show(
				$mdToast.simple()
					.content(message)
					.position('top,right')
					.hideDelay(3000)
				);

		}

		$scope.deleteProduct = function(event, product){
			// find the index of product wanted to delete
			var index =$scope.products.indexOf(product);
			//  confirm dialog and splice the product out of array 
			var confirm = $mdDialog.confirm()
				.title("Are you sure want to delete" + " " + product.title +" ?")
				.ok('Yes')
				.cancel("No")
				.targetEvent(event);
			$mdDialog.show(confirm).then(function(){
				// delete product without using firebase
				// var index =$scope.products.indexOf(product);
				// $scope.products.splice(index,1);


				// delete with firebase
				$scope.products.$remove(product);
				showToast('Product Deleted!')
			}, function(){

			});


		}

		// post new product to firebase
		$scope.saveProduct = function(product){
			if(product){
			// post without firebase
			// $scope.products.push(product);
			
			$scope.products.$add(product);
			$scope.product={};
			$scope.closeSidebar();
			showToast('Product posted!');
			
			}
		}

		// var data = [{
  //   "index": 0,
  //   "title": "Angular Book",
  //   "price": "2,014",
  //   "picture": "https://s3.amazonaws.com/titlepages.leanpub.com/angular2-book/hero?1461219702",
  //   "contact": {
  //       "name":"John Doe",
  //       "phone":"(222)-333-4444",
  //       "email": "johndoe@gmail.com"
  //   },
  //   "about": "Ipsum exceptla evour  nisi labore. Voluptate laborum nostrud sunt qui. Reprehenderit consectetur ad deserunt ad aliquip ex aliquip labore.\r\n"
  // },
  // {
  //   "index": 1,
  //   "title": "HP Laptop Core i5",
  //   "price": "1,722",
  //   "picture": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQVD_5ASI6LkNVNxasS3gbXJVkeR0gWnvusGyyfp3hO7Qk-O29N",
  //   "contact": {
  //       "name":"John Doe",
  //       "phone":"(222)-333-4444",
  //       "email": "johndoe@gmail.com"
  //   },
  //   "about": "Eiusmodamit dolorm eur duis nostrud. Veniam commodo labore aute elit duis Lorem consequat exercitation magna anim cillum laboris aliqua eu.\r\n"
  // },
  // {
  //   "index": 2,
  //   "title": "MacBook Pro Core i7",
  //   "price": "1,899",
  //   "picture": "http://zdnet4.cbsistatic.com/hub/i/r/2015/04/20/b753bbb8-ecbd-4276-8ed3-f5060752a6f0/resize/770xauto/f607458aacfa18ef3467cc8336a8167a/macbook-pro-new.jpg",
  //    "contact": {
  //       "name":"John Doe",
  //       "phone":"(222)-333-4444",
  //       "email": "johndoe@gmail.com"
  //   },
  //   "about": "Aute enim Lorr est nisi consectetur commodo aute Lorem eu ad. Dolor culpa proident consectetur veniam labore officia velit pariatur labore laboris in.\r\n"
  // },
  // {
  //   "index": 3,
  //   "title": " Macbook Pro Charger",
  //   "price": "2,681",
  //   "picture": "http://www.ccpowerpc.com.au/zencart/images/APPLE165V365A60W.jpg",
  //   "contact": {
  //       "name":"John Doe",
  //       "phone":"(222)-333-4444",
  //       "email": "johndoe@gmail.com"
  //   },
  //   "about": "Est ea nostrud enident ut eiusmod reprehenderit"
  //   },
  // {
  //   "index": 4,
  //   "title": "Samsung Galaxy S7",
  //   "price": "3,040",
  //   "picture": "http://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s7-usa1.jpg",
  //   "contact": {
  //       "name":"John Doe",
  //       "phone":"(222)-333-4444",
  //       "email": "johndoe@gmail.com"
  //   },
  //   "about": "Ullamco magna in doloiam onsequat exco irure do anim anim excepteur esse sunt velit.\r\n"
  // },
  // {
  //   "index": 5,
  //   "title": "Iphone 6s Plus",
  //   "price": "3,623",
  //   "picture": "http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6p/gray/iphone6p-gray-select-2014_GEO_US?wid=1200&hei=630&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=khHkv2",
  //   "contact": {
  //       "name":"John Doe",
  //       "phone":"(222)-333-4444",
  //       "email": "johndoe@gmail.com"
  //   },
  //   "about": "Cupidatat nulla officia inceu in adipisicing est ut aliquip sunt dolore labore.\r\n"
  // }]

		// send  data to firebase server for testing

	  	// var firebase = productsFactory.ref;

	  	// angular.forEach(data , function(item){
	  	// 	firebase.$add(item);
	  	// })


	});


})();