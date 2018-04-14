$(window).load(function () {

    // preloader
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(550).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(550).css({
        'overflow': 'visible'
    });

    //button index
    function checkDTA() {
	if (false) {
		//$("#result").append("<p>There is a DTA</p>")
		console.log("There is a DTA");
	} else {
//		$("#result").append("<p>There is no DTA</p>")
		console.log("There is no DTA");
	}
}

    
    
});