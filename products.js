(function(){
	var app = angular.module('store-products', []);
	///Se crea una directiva nueva para html del panel
	app.directive('productPanels', function(){
		return {
			//E para elemento de html, A para atributo
			restrict: 'E',
			//Url de un template
			templateUrl: 'product-panels.html',
			controller:function(){
				this.tab = 1;
		
				this.selectTab = function(setTab) {
					this.tab = setTab;
				};
				
				this.isSelected = function(checkTab){
					return checkTab === this.tab;
				};
			},
			controllerAs: 'panel'
		};
	});
	
	///Se crea una directiva nueva para html para los titulos
	///y precios de los productos
	app.directive('productTitle', function(){
		return {
			//E para elemento de html, A para atributo
			restrict: 'E',
			//Url de un template
			templateUrl: 'product-title.html'
		};
	});
	
	///Se crea una directiva nueva para html para las reviews
	app.directive('productReviews', function(){
		return {
			//E para elemento de html, A para atributo
			restrict: 'E',
			//Url de un template
			templateUrl: 'product-reviews.html'
		};
	});
	
})();
