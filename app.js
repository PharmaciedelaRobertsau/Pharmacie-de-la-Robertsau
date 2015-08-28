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
