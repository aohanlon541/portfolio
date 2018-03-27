
	$(function() {
	    // initialize skrollr if the window width is large enough
	    if ($(window).width() > 700) {
	        skrollr.init();
	    }
	
	$(".example").on("hover", () => {
		
	})


	    // disable skrollr if the window is resized below 768px wide
	    $(window).on('resize', () => {
	        if ($(window).width() <= 700) {
	            skrollr.init().destroy(); // skrollr.init() returns the singleton created above
	        }
	    });
	});


