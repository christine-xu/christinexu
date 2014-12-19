$( document ).ready(function() {
	var detectViewPort = function() {
		var viewPortWidth = $(window).width();
		if (viewPortWidth > 768) {
			$('.square').hover(
			function () {
				$(this).animate({
					width: '300px',
					height: '200px'
				}, 200);
			},
			function () {
				$(this).animate({
					width: '200px',
					height: '150px'
				}, 200);
			});
		}
		else {
			$('.square').width('300px');
	        $('.square').height('200px');
		}
	}
	detectViewPort();
	$(window).resize(function() {
		detectViewPort();
	});
});