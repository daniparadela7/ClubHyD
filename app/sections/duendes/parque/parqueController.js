'use strict';
angular.module('app')
.controller('ParqueController', ['$scope', '$timeout', function($scope, $timeout){

	$scope.img_parque = ['../../../assets/images/duendes/bolas/bolas1.jpg',
						'../../../assets/images/duendes/bolas/bolas2.jpg',
						'../../../assets/images/duendes/bolas/futbol.jpg',
						'../../../assets/images/duendes/bolas/pantallapequena.jpg'];

	$timeout(function(){

		$('.sliderParque').owlCarousel({
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
