$(document).ready(function () {
	// Set paper size
	raphael_implementation.resize_paper();
	$(window).resize(function () {
		raphael_implementation.resize_paper();
	});

	// Initialize modals
	$(".modal-trigger").leanModal();

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