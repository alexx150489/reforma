$(document).ready(function() {


// mobile-menu >>>

	var openMenu = $('#burger-icon-js');	
	var menu = $('#navigation-js');
	var headerTel = $('#header-tel-js');
	var closeMenu = $('#close-icon-js');

	$(openMenu).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
		headerTel.hide();
		openMenu.hide();
		closeMenu.show();
	});

	$(closeMenu).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
		headerTel.show();
		closeMenu.hide();
		openMenu.show();
	});

// slider http://github.com/kenwheeler/slick slick.js >>>

// main-slider
	$('.main-slider-js').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	
// actions-slider
	$('.actions-slider-js').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: true,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

});