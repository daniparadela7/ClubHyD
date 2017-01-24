'use strict';
angular.module('app')
.controller('TalleresController', ['$scope', '$timeout', function($scope, $timeout){

	$scope.img_manualidades = ["../../../assets/images/hadas/talleres/manualidades1.jpg",
								"../../../assets/images/hadas/talleres/manualidades2.jpg"];

	$scope.img_costura = ["../../../assets/images/hadas/talleres/costura1.jpg",
								"../../../assets/images/hadas/talleres/costura2.jpg"];

	$scope.img_reposteria = ["../../../assets/images/hadas/talleres/reposteria1.jpg",
								"../../../assets/images/hadas/talleres/reposteria2.jpg"];

	$scope.img_belleza = ["../../../assets/images/hadas/talleres/belleza1.jpg",
								"../../../assets/images/hadas/talleres/belleza2.jpg"];

	$scope.img_musica = ["../../../assets/images/hadas/talleres/musical1.jpg",
								"../../../assets/images/hadas/talleres/musical2.jpg"];																													

	$timeout(function(){

		$('.sliderTaller').owlCarousel({
			stagePadding: 0,
			smartSpeed: 450,
			nav: true,
			navText: [
						      "<i class='fa fa-chevron-circle-left'></i>",
						      "<i class='fa fa-chevron-circle-right'></i>"
						    ],
			dots: false,
			loop: true,
			autoplay: false,
			autoplayTimeout: 2500,
			autoplayHoverPause: true,
			responsiveClass: true,
			items: 1
		});
		
	}, 500);
}]);
