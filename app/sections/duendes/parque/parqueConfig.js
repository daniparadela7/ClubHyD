'use strict';
angular.module('app')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/duendes/parque', {
		controller: 'ParqueController',
		templateUrl: 'sections/duendes/parque/parqueView.html',
		meta: {
	    	'title': 'Parque de bolas | El Club de los Duendes',
	    	'description': 'Aquí encontrarás toda la información relacionada con el parque de bolas de El Club de los Duendes de Palma de Mallorca.'
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
