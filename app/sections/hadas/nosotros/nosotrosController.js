'use strict';
angular.module('app')
.controller('NosotrosController', ['$scope', 'nosotros', function($scope, nosotros){
	$scope.nosotros = nosotros;
}]);
