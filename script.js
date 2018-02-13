$('#hamburger').click(
	function() {
		$('#menu').toggle(200);
	}
);

$('.link-item').click(
	function() {
		let width = $(window).width();
		
		if (width < 700) {
			console.log('yes');
			$('#menu').toggle(200);
		}
	}
);

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
		$('#placeholder-click').toggle(200);
	}
);

$('#placeholder-screen2').hover(
	function() {
		$('#placeholder-click2').toggle(200);
	}
);

$('#github').hover(
	function() {
		$('#github-label').fadeToggle(200);
	}
);

$('#email').hover(
	function() {
		$('#email-label').fadeToggle(200);
	}
);

$('#linkedin').hover(
	function() {
		$('#linkedin-label').fadeToggle(200);
	}
);