var raphael_implementation = {
	paper: Raphael("current-game-objects"),
	resize_paper: function () {
		$("#current-game-objects").width(window.innerWidth);
		$("#current-game-objects").height(window.innerHeight - $("nav").height() - $("footer").height());
	}
};