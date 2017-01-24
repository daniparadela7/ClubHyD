'use strict';
angular.module('app')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/hadas/nosotros', {
		controller: 'NosotrosController',
		templateUrl: 'sections/hadas/nosotros/nosotrosView.html',
		meta: {
	    	'title': 'Nosotros | El Club de las Hadas',
	    	'description': 'Aquí encontrarás información del personal El Club de las Hadas de Palma de Mallorca.'
	    },
		resolve: {
			nosotros: function(apiService) {
			    return apiService.getNodes('nosotros');
			},
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	});
}]);
