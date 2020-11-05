var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	typeSpeed: 100,
	showCursor: false,
	loop: false,
	loopCount: Infinity,
	startDelay: 800,
});
var typed = new Typed('#typed2', {
	stringsElement: '#typed-strings2',
	typeSpeed: 100,
	showCursor: false,
	loop: false,
	loopCount: Infinity,
	startDelay: 0,
});
$(document).ready(function () {
	setTimeout(function () { 
		$("#bracketRight").css('opacity', '1') 
		$("#bracketLeft").css('opacity', '1') 
	}, 200);
});
