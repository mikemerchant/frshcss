(function ( $ ) {

	// navLine plugin
    $.fn.navLine = function(options) {

    	$this = $(this);

		// Change Position
		function changePos() {

			// Update Position
			var activePos = $this.find('.active a').position().left;
			var activeWid = $this.find('.active a').width();

			// Change Position & Width
			$this.find('.nav-line').stop().css(
				{
					'left': activePos,
					'width': activeWid
				}
			);
		}

		changePos();

		// Adds and Removes active class from nav-item (parent of a)
		$this.find('a').on('click', function (e) {
			e.preventDefault();

			// Remove Active State
			$('.nav-linemenu .nav-item a').stop().parent().removeClass('active');

			// Add Active State
			$(this).stop().parent().addClass('active');

			changePos();
		});
    };
 
}( jQuery ));