console.log('JavaScript is properly linked up.');


$('#subscribr').hover(
	function() {
		console.log('should render');
	    $('#subscribr-click').toggle(200);
	}
);

$(window).scroll(
	{
		previousTop: 0
	}, 
	function () {
		var currentTop = $(window).scrollTop();
		if (currentTop < this.previousTop) {
			$('.sidebar em').text('Up');
			$('.page-links-nav').show(400);
		} else {
			$('.sidebar em').text('Down');
			$('.page-links-nav').hide(400);
		}
		this.previousTop = currentTop;
	});