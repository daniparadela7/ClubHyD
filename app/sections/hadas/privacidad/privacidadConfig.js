'use strict';
angular.module('app')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/hadas/privacidad', {
		controller: 'PrivacidadController',
		templateUrl: 'sections/hadas/privacidad/privacidadView.html',
		meta: {
	    	'title': 'Privacidad | El Club de las Hadas',
	    	'description': 'Aquí encontrarás toda las información relacionada con la privacidad de la web El Club de las Hadas.'
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
