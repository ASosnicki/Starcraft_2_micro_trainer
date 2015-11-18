$(document).ready(function () {
	// Set paper size
	raphael_implementation.resize_paper();
	$(window).resize(function () {
		raphael_implementation.resize_paper();
	});

	// Initialize modals
	$(".modal-trigger").leanModal();
	$("#select-faction").html(function () {
		var available_factions = helpers.list_available_factions(builds),
			output_html = "";
		for (var i = 0; i < available_factions.length; i++) {
			output_html += "<a class='waves-effect btn' id='" + available_factions[i] + "'>" + available_factions[i] + "</a>";
		}
		return output_html;
	});

	// Start game
	$("#start-game").click(function () {
		$("#game-resources").slideToggle();
		$("#game-status").slideToggle();
		timer.start_timer();
		timer.update_timer();
	});

	// Handle the resources

	// Handle the command queue

	// Handle keyboard input

	// Handle the active commands

	// Handle current game objects

});