var ctrlr = angular.module('ctrlr',[
    'view_pro',
    'sliderApp'
]);

var view_pro = angular.module('view_pro', ['ngRoute']);

view_pro.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/MaPharmacie', {
                templateUrl: 'template/mapharmacie.html'
            })
            .when('/Equipe', {
                templateUrl: 'template/equipe.html'
            })
            .when('/ServicesetCompetences', {
                templateUrl: 'template/servicescompetences.html'
            })
            .when('/NousSituer', {
                templateUrl: 'template/noussituer.html'
            })
            .when('/Accueil', {
                templateUrl: 'template/accueil.html'
            })
            .otherwise({
                redirectTo: '/Accueil'
            });
}]);

var sliderApp = angular.module('sliderApp',['ngAnimate']);

sliderApp.controller('SliderController', function($scope) {
    $scope.images=[{src:'front_pharma.jpg',
                    title:'Pic 1'},
                   {src:'int_pharma.jpg',
                    title:'Pic 2'}]; 
});
 
sliderApp.directive('slider', function ($timeout) {
  return {
    restrict: 'AE',
	replace: true,
	scope:{
		images: '='
	},
    link: function (scope, elem, attrs) {
	
		scope.currentIndex=0;

		scope.next=function(){
			scope.currentIndex<scope.images.length-1?scope.currentIndex++:scope.currentIndex=0;
		};
		
		scope.prev=function(){
			scope.currentIndex>0?scope.currentIndex--:scope.currentIndex=scope.images.length-1;
		};
		
		scope.$watch('currentIndex',function(){
			scope.images.forEach(function(image){
				image.visible=false;
			});
			scope.images[scope.currentIndex].visible=true;
		});
		
		/* Start: For Automatic slideshow*/
		
		var timer;
		
		var sliderFunc=function(){
			timer=$timeout(function(){
				scope.next();
				timer=$timeout(sliderFunc,2500);
			},2500);
		};
		
		sliderFunc();
		
		scope.$on('$destroy',function(){
			$timeout.cancel(timer);
		});
		
		/* End : For Automatic slideshow*/
		
    },
	templateUrl:'template/slideshowtempl.html'
  }
});