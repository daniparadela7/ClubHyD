'use strict';
angular.module('app')
.controller('HeaderController', ['$rootScope', '$window', '$scope', '$timeout', function($rootScope, $window, $scope, $timeout){

	$scope.hadas = function(){
		var url = "http://" + $window.location.host + "/hadas";
		$window.location.href = url;
	}

	$scope.duendes = function(){
		var url = "http://" + $window.location.host + "/duendes";
		$window.location.href = url;
	}

	$timeout(function(){
		$scope.ruta = $rootScope.ruta;
		$(document).on('click', '.navbar-collapse.in', function(e) {
			//Plegamos el menu tras pinchar sobre alguna seccion
			if($(e.target).is('a')) {
				var el = this;
				$timeout(function(){
					$(el).collapse('hide');
				}, 500);
			}
		});
	}, 0);
}]);
