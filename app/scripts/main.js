$(function() {
	$(document).ready(function() {
		$('.arc').removeClass('hidden');
	});

	$(window).load(function() {
		window.setTimeout(function() {
			$('.tailor-logo').removeClass('hidden');
			$('.arc').addClass('hidden');
			var linkContainer = $('.link-container');
			linkContainer.addClass('fadeInUp');
			linkContainer.removeClass('hidden');
			linkContainer.on('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
			    function(e) {
			    	linkContainer.removeClass('fadeInUp');
			    });
		}, 2000);
	});

	window.onhashchange = function() {
		console.log(location.hash);
		if (location.hash === '#/') {

		}
		if (location.hash === '#/about') {
			// move logo up and fade away
			// move link to top show a back button
			console.log('l');
			$('.logo-container').addClass('fadeOutUp');
		}
	};
});