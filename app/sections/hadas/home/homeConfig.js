'use strict';
angular.module('app')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/hadas', {
		controller: 'HomeController',
		templateUrl: 'sections/hadas/home/homeView.html',
		meta: {
      'title': 'El Club de las Hadas. Cumpleaños, talleres, bautizos y comuniones',
      'description': 'El Club de las Hadas de Palma de Mallorca realiza fiestas de cumpleaños, talleres para padres y niños, bautizos, comuniones y charlas.'
    },
		resolve: {
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	});
}]);
