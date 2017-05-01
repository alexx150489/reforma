$(document).ready(function() {

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

});