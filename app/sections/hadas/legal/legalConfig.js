'use strict';
angular.module('app')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/hadas/legal', {
		controller: 'LegalController',
		templateUrl: 'sections/hadas/legal/legalView.html',
		meta: {
	    	'title': 'Legal | El Club de las Hadas',
	    	'description': 'Aquí encontrarás toda las información relacionada con la legalidad de la web El Club de las Hadas.'
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
