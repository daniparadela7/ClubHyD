'use strict';
angular.module('app')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/duendes/legal', {
		controller: 'LegalController',
		templateUrl: 'sections/hadas/legal/legalView.html',
		meta: {
	    	'title': 'Legal | El Club de los Duendes',
	    	'description': 'Aquí encontrarás toda las información relacionada con la legalidad de la web El Club de las Hadas y Duendes.'
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
