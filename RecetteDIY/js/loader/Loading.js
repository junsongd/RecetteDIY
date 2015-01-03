/**
 *
 */
var Loading = {
	/**
	 *
	 */
	spinner : null,

	/**
	 *
	 */
	show : function() {
		var target = document.getElementById('loading');
		if ( this.spinner == null ) {
			var opts = {
			  lines: 9, // The number of lines to draw
			  length: 6, // The length of each line
			  width: 4, // The line thickness
			  radius: 7, // The radius of the inner circle
			  corners: 1, // Corner roundness (0..1)
			  rotate: 0, // The rotation offset
			  direction: 1, // 1: clockwise, -1: counterclockwise
			  color: '#828385', // #rgb or #rrggbb or array of colors
			  speed: 1, // Rounds per second
			  trail: 60, // Afterglow percentage
			  shadow: false, // Whether to render a shadow
			  hwaccel: false, // Whether to use hardware acceleration
			  className: 'spinner', // The CSS class to assign to the spinner
			  zIndex: 2e9, // The z-index (defaults to 2000000000)
			  //top: 'auto', // Top position relative to parent in px
			  //left: 'auto' // Left position relative to parent in px
			};
			this.spinner = new Spinner(opts)
		}
		this.spinner.spin(target);
		$(target).addClass("visible");
	},
	
	/**
	 *
	 */
	hide : function() {
		this.spinner.stop();
		var target = document.getElementById('loading');
		$(target).removeClass("visible");
	}
}