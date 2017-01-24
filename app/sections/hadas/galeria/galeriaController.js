'use strict';
angular.module('app')
.controller('GaleriaController', ['$scope', 'album', function($scope, album){
	$scope.albumes = album;

}]);
