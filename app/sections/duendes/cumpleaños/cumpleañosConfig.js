'use strict';
angular.module('app')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/duendes/cumpleaños', {
		controller: 'CumpleañosController',
		templateUrl: 'sections/duendes/cumpleaños/cumpleañosView.html',
		meta: {
      'title': 'Cumpleaños | El Club de los Duendes',
      'description': 'Aquí encontrarás toda las información relacionada con los cumpleaños que realizamos en El Club de los Duendes de Palma de Mallorca.'
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
