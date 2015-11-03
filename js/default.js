/**
 * Created by chris on 10/11/15.
 */

var faction = "Terran",
	initial_units = {},
	initial_resources = {
		"minerals": 100,
		"gas": 100
	},
	action_queue = [],
	active_command_queue = [],
	current_game_objects = [],
	groups = {},
	locations = {},
	terran_units = {
		"Marine": {
			"name": "Marine",
			"img_src": "images/units/Terran/Marine.jpg",
			"cost": {
				"supply": 1,
				"minerals": 100,
				"gas": 100
			},
			"build_time": 10,
			"requires": {},
			"abilities": {}
		}
	},
	game_running = false,
	keyboard_shortcut_stats = { //For input accuracy
		"total_keystrokes": 0,
		"successes": 0
	},
	resources = {
		"supply": 0,
		"minerals": 0,
		"gas": 0
	},
	current_keyboard_shortcut;

$(document).ready(function () {

	// A function to pad numbers with leading zeros (used in the timer)
	function pad(num, size) {
		var s = num + "";
		while (s.length < size) s = "0" + s;
		return s;
	}

	// A function that controls the running of the trainer.
	$("#start").click(function () {
		var time_started = Date.now(),
			time_between_actions = 1000;
		//		console.log(action_queue);
		game_running = true;


		// The nuts and bolts behind the game timer.
		$("#game_timer").html("<a>00:00:00</a>");
		window.setInterval(function () {
				if (!game_running) {
					return;
				}
				var time_difference = Date.now() - time_started,
					hours = pad(Math.floor(time_difference / 3600000), 2),
					minutes = pad(Math.floor((time_difference % 3600000) / 60000), 2),
					seconds = pad(Math.floor((time_difference % (60000)) / 1000), 2),
					game_clock = (hours + ":" + minutes + ":" + seconds);

				$("#game_timer").html("<a>" + game_clock + "</a>");
			},
			1000);


		// Populate starting units and resources
		resources.minerals = initial_resources.minerals;
		resources.gas = initial_resources.gas;
		for (var i = 0; i < starting_game_objects[faction].length; i++) {
			// Match game_object with its corresponding game object.
			var game_object = {};
			game_object = game_objects[faction][starting_game_objects[faction][i].type][starting_game_objects[faction][i].name];
			current_game_objects.push(new active_game_object(game_object));
		}

		// Add actions from the training command list to the queue.
		window.setInterval(function () {
			add_action_to_the_queue();
			action_queue[action_queue.length - 1].create();
			//		console.log(Date.now() - time_started);
		}, time_between_actions);

		// Capture keypresses.
		window.setInterval(function () {
			if (action_queue !== null) {
				current_keyboard_shortcut = action_queue[0].button.charCodeAt(0);
			}
		});

		// Update progress bars in the active command queue.
		window.setInterval(function () {
			for (var i = 0; i < active_command_queue.length; i++) {
				var build_time_elapsed = (Date.now() - active_command_queue[i].create_time) / 1000;
				var build_percent_complete = Math.floor(build_time_elapsed / active_command_queue[i].build_time * 100);
				if (build_time_elapsed >= active_command_queue[i].build_time) {
					active_command_queue[i].finished_building();
					active_command_queue.splice(i, 1);
				}
				//				console.log(build_percent_complete);
				$("#progress_" + active_command_queue[i].unique_id).css("width", build_percent_complete + "%").html(build_percent_complete + "%")
			}
		});

		// Update resource count
		window.setInterval(function () {
			// Update minerals
			$("#minerals").html(resources.minerals);

			// Update gas
			$("#gas").html(resources.gas);

			// Update supply
			$("#supply").html(resources.supply);
		});
	});
});

$(document).keypress(function (e) {
	handle_keypress(e.which);
});