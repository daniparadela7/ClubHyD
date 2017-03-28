'use strict';
angular.module('app')
.controller('NoticiasController', ['$scope', 'noticias', function($scope, noticias){
	$scope.noticias = [];
	angular.forEach(noticias, function(value, key) {
		value.fecha_noticiaFormato = moment(value.fecha_noticia).format('DD/MM/YY');
		$scope.noticias.push(value);
	});
	
}]);
