'use strict';
angular.module('app')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/hadas/talleres', {
		controller: 'TalleresController',
		templateUrl: 'sections/hadas/talleres/talleresView.html',
		meta: {
	    	'title': 'Talleres | El Club de las Hadas',
	    	'description': 'Aquí encontrarás toda la información relacionada con los talleres de El Club de las Hadas de Palma de Mallorca.'
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
