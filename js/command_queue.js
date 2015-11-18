var command_queue = {
	selected_faction: "",
	queue: [],

	run_the_queue: function () {

	},
	set_current_command: function () {
		var current_command = command_queue.queue[0],
			current_game_object = game_objects[command_queue.selected_faction][current_command.type][current_command.name];

		// Display the command to be executed.
		$("#command-queue").find($("p")).html("Build " + current_command.quantity + "x " + current_command.name);

		// Build a list of dependencies for the desired game object or command and get the keyboard input from the list.


	},
	handle_keypress: function (e) {

	}
};