$(document).ready(function () {
	// Set paper size
	raphael_implementation.resize_paper();
	$(window).resize(function () {
		raphael_implementation.resize_paper();
	});

	// Initialize modals
	var available_builds = [];
	$(".modal-trigger").leanModal();
	$("#select-faction").html(function () {
		var available_factions = helpers.list_available_factions(builds),
			output_html = "";
		for (var i = 0; i < available_factions.length; i++) {
			output_html += "<a class='waves-effect btn faction-selection' id='" + available_factions[i] + "'>" + available_factions[i] + "</a>";
		}
		return output_html;
	});
	$("body").on("click", "a.faction-selection", function () {
		command_queue.selected_faction = $(this)[0].id;
		$("#select-faction").toggle("slide", 500);
		$("#select-build").html(function () {
			available_builds = helpers.list_available_builds_by_selected_faction(command_queue.selected_faction),
				output_html = "";
			// Filter the list of builds by the selected faction.
			for (var i = 0; i < available_builds.length; i++) {
				output_html += "<a class='waves-effect btn build-selection' id='build_" + i + "'>" + available_builds[i].build_name + "</a>";
			}
			return output_html;
		});
		$("#select-build").toggle("slide", 500);
	})
	$("body").on("click", "a.build-selection", function () {
		var selected_build_index = $(this)[0].id.split("_")[1];
		command_queue.queue = available_builds[selected_build_index].sequence;
		console.log(command_queue.queue);
		// Add some color highlighting to denote which build was selected.
		// Add a back button to change factions.
		// Reset the selected faction if the modal is closed.
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