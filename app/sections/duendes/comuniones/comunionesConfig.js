'use strict';
angular.module('app')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/duendes/comuniones', {
		controller: 'ComunionesController',
		templateUrl: 'sections/hadas/comuniones/comunionesView.html',
		meta: {
	    	'title': 'Comuniones | El Club de los Duendes',
	    	'description': 'Aquí encontrarás toda las información relacionada con las comuniones que realizamos en El Club de los Duendes de Palma de Mallorca.'
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
