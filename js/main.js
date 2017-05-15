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

		if ( $(this).hasClass("msk") ) {
			$('.menu-tel-js.msk').show();
		} else if ( $(this).hasClass("ekb") ) {
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
	$(".modal-appointment-close").click( function(e) {
		$.fancybox.close();
	});

	$(".appointment-js").fancybox({
		'transitionIn' : 'elastic',
		'transitionOut' : 'elastic',
		'speedIn' : 600, 
		'speedOut' : 200, 
		'overlayShow' : false,
		'margin' : 0,
		'padding' : 0,
		'closeBtn' : false
	});

	// block-licenzies http://fancybox.net/ >>>
	$(".licenzies-image").fancybox();


	// model-block select >>>
	$(document).click( function(e) {
		if ( $(e.target).closest(".model-point").length ) {return;}
		$(".model-point").removeClass("active");
		e.stopPropagation();
	});

	$('.model-point').click( function(e) {
		$(".model-point").removeClass("active");
		$(this).toggleClass("active");
	});




	// block-contacts toggle >>>
	$('.contacts-town').click( function(e) {
		e.preventDefault();
		$('.contacts-town').removeClass("active");
		$(this).addClass("active");

		if ( $(this).hasClass('msk') ) {
			$('.contacts-location').hide();
			$('.contacts-info').hide();
			$('.contacts-location.msk').show();
			$('.contacts-info.taganskaya').show();
			$('.contacts-station:contains("Таганская")').addClass("active");
			$('.contacts-map').hide();
			$('.contacts-map.taganskaya').show();
		}

		if ( $(this).hasClass('ekb') ) {
			$('.contacts-location').hide();
			$('.contacts-info').hide();
			$('.contacts-location.ekb').show();
			$('.contacts-info.ekb').show();
			$('.contacts-station').removeClass("active");
			$('.contacts-location.ekb .contacts-station').addClass("active");
			$('.contacts-map').hide();
			$('.contacts-map.ekb').show();
		}

	});

	$('.contacts-station').click( function(e) {
		e.preventDefault();
		$('.contacts-station').removeClass("active");
		$(this).addClass("active");

		if ( $(this).hasClass('taganskaya') ) {
			$('.contacts-info.novoslobodskaya').hide();
			$('.contacts-info.taganskaya').show();
			$('.contacts-map').hide();
			$('.contacts-map.taganskaya').show();
		}

		if ( $(this).hasClass('novoslobodskaya') ) {
			$('.contacts-info.taganskaya').hide();
			$('.contacts-info.novoslobodskaya').show();
			$('.contacts-map').hide();
			$('.contacts-map.novoslobodskaya').show();
		}

	});


// block-iwnat accordion >>>

	$(".iwant-question-title").on("click", function(e) {
		
		e.preventDefault();
		var $this = $(this);

		if( !$(this).hasClass("active") ) {
			$(".iwant-answer").slideUp();
			$(".iwant-question-title").removeClass("active");
		}

		$(this).toggleClass("active");
		$(this).next().slideToggle();

	});


});