console.log('JavaScript is properly linked up.');


$('#subscribr').hover(
	function() {
		$('#subscribr-click').toggle(200);
	}
);

$('#chalktalk').hover(
	function() {
		$('#chalktalk-click').toggle(200);
	}
);

$('#kurikaeshi').hover(
	function() {
		$('#kurikaeshi-click').toggle(200);
	}
);

$('#placeholder-screen').hover(
	function() {
		console.log('should render');
		$('#placeholder-click').toggle(200);
	}
);

$('#placeholder-screen2').hover(
	function() {
		console.log('should render');
		$('#placeholder-click2').toggle(200);
	}
);

$('#github').hover(
	function() {
		console.log('should render');
		$('#github-label').fadeToggle(200);
	}
);

$('#email').hover(
	function() {
		console.log('should render');
		$('#email-label').fadeToggle(200);
	}
);

$('#linkedin').hover(
	function() {
		console.log('should render');
		$('#linkedin-label').fadeToggle(200);
	}
);


// $(window).scroll({previous: 0}, 
// 	function () {
// 		let current = $(window).scrollTop();
// 		if (current < this.previous) {
// 			$('.page-links-nav').css({opacity: 1, transition: '0.5s'}, 400);
// 		} else {
// 			$('.page-links-nav').css({opacity: 0, transition: '0.5s'}, 400);
// 		}
// 		this.previous = current;
// 	});