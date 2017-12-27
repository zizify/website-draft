console.log('JavaScript is properly linked up.');


$('#subscribr').hover(
	function() {
		console.log('should render');
		$('#subscribr-click').toggle(200);
	}
);

$(window).scroll({previous: 0}, 
	function () {
		let current = $(window).scrollTop();
		if (current < this.previous) {
			$('.page-links-nav').css({opacity: 1, transition: '0.5s'}, 400);
		} else {
			$('.page-links-nav').css({opacity: 0, transition: '0.5s'}, 400);
		}
		this.previous = current;
	});