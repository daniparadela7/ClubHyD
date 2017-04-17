'use strict';
angular.module('app')
.run(['$rootScope', '$location', '$routeParams', '$route', '$timeout', '$analytics', '$appConfig', 'apiService', 'wdkFunctions', 'screenSize', 'ngMeta', function($rootScope, $location, $routeParams, $route, $timeout, $analytics, $appConfig, apiService, wdkFunctions, screenSize, ngMeta) {
	$rootScope.wdkFunctions = wdkFunctions;
	$rootScope.$appConfig = $appConfig;

	ngMeta.init();

	$(window).on('resize', function(){
		var windowHeight = $(window).outerHeight();
		$('.headerBG').outerHeight(windowHeight);
	});

	$rootScope.toggleVisible = function() {
		$rootScope.visibleMenu = !$rootScope.visibleMenu;
		$('.c-hamburger').toggleClass('is-active');
		if($rootScope.visibleMenu) {
			$('body, html').addClass('menu-mobile-in');
			if((screenSize.is('xs')) || (screenSize.is('sm'))){
				var windowHeight = $(window).outerHeight();
				$('.headerBG').outerHeight(windowHeight);
			}
		} else {
			$('body, html').removeClass('menu-mobile-in');
		}
	};

	$rootScope.hadasODuendes = function(){
		var ruta = $location.path();
		if(ruta.includes('duendes')){
			$('#wrapper').addClass('wrapper-duende');
			$('#footer-wrapper').addClass('footer-duende');
			$('#logoHada').addClass('logoDerecha');
			$('#logoDuende').removeClass('logoDerecha');
			$('#wrapper').css('background', 'transparent');
			$('.headerBG').addClass('headerBG-duendes');
			$rootScope.ruta = 'duendes';
		}
		else{
			$('#wrapper').removeClass('wrapper-duende');
			$('#footer-wrapper').removeClass('footer-duende');
			$('#logoDuende').addClass('logoDerecha');
			$('#logoHada').removeClass('logoDerecha');
			$('.headerBG').removeClass('headerBG-duendes');
			$rootScope.ruta = 'hadas';
		}
	}

	$rootScope.$on('$routeChangeStart', function(){
		NProgress.start();
		$rootScope.hadasODuendes();
	});
	$rootScope.$on('$routeChangeSuccess', function(){
		$rootScope.visibleMenu = false;
    $('body, html').removeClass('menu-mobile-in');
		NProgress.done();
		wdkFunctions.init();
		$rootScope.hadasODuendes();
		$analytics.pageTrack($location.path());
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		$('.navbar-toggle').removeClass('is-active');
		$rootScope.htmlReady();
	});

	$rootScope.$on('$routeChangeError', function(){
		NProgress.done();
		console.error('$routeChangeError');
	});

}]);
