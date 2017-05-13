$(document).ready(function() {


// mobile-menu open/close >>>

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

// main menu contacts toggle >>>

	$('.menu-town-js').on("click", function(e) {
		e.preventDefault();
		$('.menu-town-js').removeClass("active");
		$(this).addClass("active");
		$('.menu-tel-js').hide();

		if ( $(this).text() === 'Москва' ) {
			$('.menu-tel-js.msk').show();
		} else if ( $(this).text() === 'Екатеринбург' ) {
			$('.menu-tel-js.ekb').show();
		}

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

// gallery
	$('.clinic-gallery-js').slick({
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: true,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});


	// modal-appointment http://fancybox.net/ >>>
	$(".appointment-js").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false,
		'margin': 0,
		'padding' : 0
	});

	// $(".lic1-js").fancybox({
	// 	'transitionIn'	:	'elastic',
	// 	'transitionOut'	:	'elastic',
	// 	'speedIn'		:	600, 
	// 	'speedOut'		:	200, 
	// 	'overlayShow'	:	false,
	// 	'margin': 0,
	// 	'padding' : 0
	// });

	// model-block menu
	// $('body').on("click", function(e) {
	// 	if ( $('.model-point-js').hasClass("active") ) {
	// 		$('.model-point-js').removeClass("active");
	// 	}
	// });

	$(document).click( function(e) {

		if( $(e.target).closest(".model-point").length ) {
			return;
		}

		$(".model-point").removeClass("active");
		event.stopPropagation();
	});

	$('.model-point').click( function(e) {
		$(".model-point").removeClass("active");
		$(this).toggleClass("active");
	});

});