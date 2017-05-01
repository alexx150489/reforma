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


});