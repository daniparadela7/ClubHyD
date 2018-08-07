'use strict';
angular.module('app')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/hadas/cafeteria', {
		controller: 'CafeteriaController',
		templateUrl: 'sections/hadas/cafeteria/cafeteriaView.html',
		meta: {
      'title': 'Cafeteria | El Club de las Hadas',
      'description': 'Aquí encontrarás toda las información relacionada con El Club de las Hadas de Palma de Mallorca. Horarios, cartas...'
    },
		resolve: {
			cafeteria: function(apiService) {
        return apiService.getNodes('cafeteria');
			},
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	})
	.when('/duendes/cafeteria', {
		controller: 'CafeteriaController',
		templateUrl: 'sections/hadas/cafeteria/cafeteriaView.html',
		meta: {
      'title': 'Cafeteria | El Club de los Duendes',
      'description': 'Aquí encontrarás toda las información relacionada con El Club de los Duendes de Palma de Mallorca. Horarios, cartas...'
    },
		resolve: {
			cafeteria: function(apiService) {
        return apiService.getNodes('cafeteria');
			},
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	});
}]);
