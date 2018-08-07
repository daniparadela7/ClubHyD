'use strict';
angular.module('app')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/hadas/noticias', {
		controller: 'NoticiasController',
		templateUrl: 'sections/hadas/noticias/noticiasView.html',
		meta: {
      'title': 'Noticias | El Club de las Hadas',
      'description': 'Aquí encontrarás todas las noticias relacionadas con El Club de las Hadas de Palma de Mallorca.'
    },
		resolve: {
			noticias: function(apiService) {
        return apiService.getNodes('noticias');
			},
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	})
	.when('/hadas/noticias/:pretty', {
		controller: 'NoticiaController',
		templateUrl: 'sections/hadas/noticias/noticia/noticiaView.html',
		meta: {
      'title': 'Noticias | El Club de las Hadas',
      'description': 'Aquí encontrarás todas las noticias relacionadas con El Club de las Hadas de Palma de Mallorca.'
    },
		resolve: {
			noticia: function(apiService, $route) {
        return apiService.getNode('noticialink', $route.current.params.pretty);
			},
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	})
	.when('/duendes/noticias', {
		controller: 'NoticiasController',
		templateUrl: 'sections/hadas/noticias/noticiasView.html',
		meta: {
      'title': 'Noticias | El Club de los Duendes',
      'description': 'Aquí encontrarás todas las noticias relacionadas con El Club de los Duendes de Palma de Mallorca.'
    },
		resolve: {
			noticias: function(apiService) {
        return apiService.getNodes('noticias');
			},
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	})
	.when('/duendes/noticias/:pretty', {
		controller: 'NoticiaController',
		templateUrl: 'sections/hadas/noticias/noticia/noticiaView.html',
		meta: {
      'title': 'Noticias | El Club de los Duendes',
      'description': 'Aquí encontrarás todas las noticias relacionadas con El Club de los Duendes de Palma de Mallorca.'
    },
		resolve: {
			noticia: function(apiService, $route) {
        return apiService.getNode('noticialink', $route.current.params.pretty);
			},
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	});
}]);
