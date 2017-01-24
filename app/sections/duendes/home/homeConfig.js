'use strict';
angular.module('app')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/duendes', {
		controller: 'HomeController',
		templateUrl: 'sections/duendes/home/homeView.html',
		meta: {
	    	'title': 'El Club de los Duendes. Cumpleaños, talleres, bautizos y comuniones',
	    	'description': 'El Club de los Duendes de Palma de Mallorca realiza fiestas de cumpleaños, talleres para padres y niños, bautizos, comuniones y charlas.'
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
