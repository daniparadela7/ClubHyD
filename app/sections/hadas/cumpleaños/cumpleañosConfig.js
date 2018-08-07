'use strict';
angular.module('app')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/hadas/cumpleaños', {
		controller: 'CumpleañosController',
		templateUrl: 'sections/hadas/cumpleaños/cumpleañosView.html',
		meta: {
      'title': 'Cumpleaños | El Club de las Hadas',
      'description': 'Aquí encontrarás toda las información relacionada con los cumpleaños que realizamos en El Club de las Hadas de Palma de Mallorca.'
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
