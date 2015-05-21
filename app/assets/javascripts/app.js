angular
    .module('rangular', [
        'ngRoute',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'question-index.html',
                controller: 'QuestionIndexCtrl'
            });
            
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });