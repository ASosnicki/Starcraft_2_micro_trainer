/**
 * A crap function for generating random keyboard shortcuts to enter for development purposes.
 * @returns {String} a random character for testing keyboard input.
 */
function generate_keypress() {
	var potential_keypresses = ["1", "2", "3", "4", "5", "q", "w", "e", "r", "t", "a", "s", "d", "f", "g", "z", "x", "c", "v", "b"];
	return potential_keypresses[Math.floor(Math.random() * potential_keypresses.length)];
}


/**
 * User Action Object Definition
 * @param {Object} game_object the game object that will be represented by the action
 */
function action(name, body, button, game_object) {
	// This whole section will need to change to pull from the game_object.
	this.name = name;
	this.body = body;
	this.button = button;
	//
	this.game_object = game_object;
	this.unique_id = "action_" + Date.now();
	this.html_text = "<div class='panel panel-default' id='" + this.unique_id + "'><div class='panel-heading'>" + "<kbd>" + this.button + "</kbd> - " + this.name + "</div><div class='panel-body'>" + this.body + "</div></div>";
	this.create = function () {
		$(".command_queue").append(this.html_text);
		//		$(".currently-in-play").append(this.unit_representation);

	};
	this.accept_keyboard_shortcut = function () {
		$("#" + this.unique_id).toggle("explode", {}, 150).remove();
		active_command_queue.push(new active_command(game_object));
		//		$("#" + this.unique_id).html("This will change.");
		//		console.log(".command_id_" + this.unique_id);
	};
}


/**
 * Definition for active commands (actions that have been run, that have moved into the command queue, and that are waiting on their timers).
 * @param {Object} game_object the game object that will be represented by the active command.
 */
function active_command(game_object) {
	this.name = game_object.name;
	this.body = game_object.body;
	this.create_time = Date.now();
	this.build_time = game_object.build_time;
	this.unique_id = "command_" + Date.now();
	this.html_text = "<div class='panel panel-default' id='" + this.unique_id + "'><div class='panel-heading'>Building " + this.name + "...</div><div class='panel-body'><div class='progress'><div class='progress-bar progress-bar-striped active' role='progressbar' aria-valuenow='40' aria-valuemin='0' aria-valuemax='100' style='width:0%' id='progress_" + this.unique_id + "'>0%</div></div></div></div>";

	// Create the active command object.
	$(".active_command_container").append(this.html_text);

	this.finished_building = function () {
		// Remove the active command from the queue
		$("#" + this.unique_id).toggle().remove();

		// Create a new game object.
		current_game_objects.push(new active_game_object(game_object));
	};
}


/**
 * Definition for game objects (buildings and units) that are currently instantiated.
 * @param {Object} game_object [[Description]]
 */
function active_game_object(game_object) {
	this.name = game_object.name;
	this.unique_id = "game_object_" + Date.now();
	this.img_src = game_object.img_src;
	this.lifespan = game_object.lifespan;
	this.html_text = "<img src='" + this.img_src + "' class='game-object' id='" + this.unique_id + "'>";

	// Instantiate the game object.
	$(".current_game_objects").append(this.html_text);

	// What happens when you click on the object.
	$("#" + this.unique_id).click(function () {
		console.log(this);
		//		action_helpers.add_to_selected_game_objects();
	});
}


/**
 * A function to add actions to the action queue (the queue that prompts users for input)
 * 
 * This needs to be substantially reworked so that it actually draws from the action queue rather than hard coded values (what it currently has).
 * 
 */
function add_action_to_the_queue() {
	action_queue.push(new action("Steve", "You must build a boat.", generate_keypress(), terran_units.Marine));
	action_queue[action_queue.length - 1].create;
	//	console.log(action_queue);
}


/**
 * A function to handle keypresses.
 * @param {string} key_code is the value of the user's keypress. This is translated into a numeric keyboard event.
 */
function handle_keypress(key_code) {
	if (key_code == current_keyboard_shortcut) {
		console.log("You typed the right button.");
		action_queue[0].accept_keyboard_shortcut();
		action_queue.shift();
	}
}


/**
 * A function to handle selecting game objects.
 * @param {[[Type]]} game_objects [[Description]]
 */
function select_game_objects(game_objects) {

}