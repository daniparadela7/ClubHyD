'use strict';
angular.module('app')
.controller('NoticiaController', ['$scope', 'noticia', function($scope, noticia){
	$scope.noticia = noticia;
	$scope.fecha_noticiaFormato = moment(noticia.fecha_noticia).format('DD/MM/YYYY HH:mm');

}]);
