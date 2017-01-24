'use strict';
angular.module('app')
.controller('AlbumController', ['$scope', 'album', 'imagenes_album', function($scope, album, imagenes_album){
	$scope.album = album;
	$scope.imagenes_album = imagenes_album;
}]);
