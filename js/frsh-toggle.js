
/*
	It's Togglin' Time!
	Load JQuery First
*/


/*
	On Dom Ready
*/
$(function() {
  
    // Toggle Nav on Click
    $('.toggle-side-panel').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });

  
});


/*
	Custom Functions
*/
function toggleNav() {
	if ($('.page-wrapper').hasClass('side-panel-open')) {
		// Do things on Nav Close
		$('.page-wrapper').removeClass('side-panel-open');
	} else {
		// Do things on Nav Open
		$('.page-wrapper').addClass('side-panel-open');
	}

	$('.page-body').toggleClass('side-panel-is-open');
}