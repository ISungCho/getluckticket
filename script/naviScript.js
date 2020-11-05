$('ul.dropdown li').hover(function () {
	$(this).addClass('hover');
}, function () {
	$(this).removeClass('hover');
});
var $menu = $('#menu'), $menulink = $('#spinner-form'), $menuTrigger = $('.has-submenu > a');
$menulink.click(function (e) {
	$menulink.toggleClass('active');
	$menu.toggleClass('active');

});

$menuTrigger.click(function (e) {
	e.preventDefault();
	var t = $(this);
	t.toggleClass('active').next('ul').toggleClass('active');
});
$('ul li:has(ul)');
$(function () {
	var e = $(document).scrollTop();
	var t = $('.nav_wrapper').outerHeight();
	$(window).scroll(function () {
		var n = $(document).scrollTop();
		if ($(document).scrollTop() >= 50) {
			$('.nav_wrapper').css('position', 'fixed');
			$('.nav_wrapper').css('box-shadow', '0 3px 6px 0 rgba(143, 143, 143, 0.2)');
		} else {
			$('.nav_wrapper').css('position', 'fixed');
			$('.nav_wrapper').css('box-shadow', 'none');
		}
		if (n > t) {
			$('.nav_wrapper').addClass('scroll');
		} else {
			$('.nav_wrapper').removeClass('scroll');
		}
		// if (n > t) {
		// 	$('.nav_wrapper').css('top', -($('.nav_wrapper').height() + 10));
		// } else {
		// 	$('.nav_wrapper').css('top', 0);
		// }
		if (n > e) {
			$('.nav_wrapper').removeClass('no-scroll');
		} else {
			$('.nav_wrapper').addClass('no-scroll');
		}
		e = $(document).scrollTop();
	});
});