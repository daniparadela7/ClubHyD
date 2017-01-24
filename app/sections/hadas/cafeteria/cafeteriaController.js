'use strict';
angular.module('app')
.controller('CafeteriaController', ['$scope', '$timeout', 'cafeteria', function($scope, $timeout, cafeteria){

	$scope.img_cafeteria = cafeteria;
	console.log($scope.img_cafeteria)

	$timeout(function(){

		$('.sliderCafeteria').owlCarousel({
			stagePadding: 0,
			smartSpeed: 450,
			nav: true,
			dots: false,
			loop: true,
			autoplay: true,
			autoplayTimeout: 2500,
			autoplayHoverPause: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1
				},
				320: {
					items: 1
				},
				580: {
					items: 2
				},
				768: {
					items: 3
				},
				1199: {
					items: 4
				}
			}
		});
		
	}, 500);
}]);
