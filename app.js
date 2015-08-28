var view_pro = angular.module('view_pro', ['ngRoute']);

view_pro.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/Pharmaciedelarobertsau/MaPharmacie', {
                templateUrl: 'template/mapharmacie.html'
            })
            .when('/Pharmaciedelarobertsau/Equipe', {
                templateUrl: 'template/equipe.html'
            })
            .when('/Pharmaciedelarobertsau/ServicesetCompetences', {
                templateUrl: 'template/servicescompetences.html'
            })
            .when('/Pharmaciedelarobertsau/NousSituer', {
                templateUrl: 'template/noussituer.html'
            })
            .when('/Pharmaciedelarobertsau/Accueil', {
                templateUrl: 'template/accueil.html'
            })
            .otherwise({
                redirectTo: '/Pharmaciedelarobertsau/Accueil'
            });
}]);
