'use strict';
angular.module('app')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/hadas/galeria', {
		controller: 'GaleriaController',
		templateUrl: 'sections/hadas/galeria/galeriaView.html',
		meta: {
      'title': 'Galería | El Club de las Hadas',
      'description': 'Aquí encontrarás imágenes de cumpleaños y del local El Club de las Hadas de Palma de Mallorca.'
    },
		resolve: {
			album: function(apiService) {
        return apiService.getNodes('album');
			},
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	})
	.when('/hadas/galeria/:pretty', {
		controller: 'AlbumController',
		templateUrl: 'sections/hadas/galeria/album/albumView.html',
		meta: {
      'title': 'Galería | El Club de las Hadas',
      'description': 'Aquí encontrarás imágenes de cumpleaños y del local El Club de las Hadas de Palma de Mallorca.'
    },
		resolve: {
			album: function(apiService, $route){
				return apiService.getNode('albumlink', $route.current.params.pretty);
			},
			imagenes_album: function(apiService, $route){
				return apiService.getNodesById('imagenlink', $route.current.params.pretty);
			},
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	})
	.when('/duendes/galeria', {
		controller: 'GaleriaController',
		templateUrl: 'sections/hadas/galeria/galeriaView.html',
		meta: {
      'title': 'Galería | El Club de los Duendes',
      'description': 'Aquí encontrarás imágenes de cumpleaños y del local El Club de los Duendes de Palma de Mallorca.'
    },
		resolve: {
			album: function(apiService) {
        return apiService.getNodes('album');
			},
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	})
	.when('/duendes/galeria/:pretty', {
		controller: 'AlbumController',
		templateUrl: 'sections/hadas/galeria/album/albumView.html',
		meta: {
      'title': 'Galería | El Club de los Duendes',
      'description': 'Aquí encontrarás imágenes de cumpleaños y del local El Club de los Duendes de Palma de Mallorca.'
    },
		resolve: {
			album: function(apiService, $route){
        return apiService.getNode('albumlink', $route.current.params.pretty);
			},
			imagenes_album: function(apiService, $route){
				return apiService.getNodesById('imagenlink', $route.current.params.pretty);
			},
			delayForTransitions: function($timeout) {
                return $timeout(function(){
                    return true;
                }, 500);
            }
		}
	});
}]);
