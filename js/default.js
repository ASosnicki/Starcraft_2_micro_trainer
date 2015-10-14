/**
 * Created by chris on 10/11/15.
 */

var action_queue = [],
	groups = {},
	locations = {},
	terran_units = {
		marine: {
			img_src: "images/units/Terran/Marine.jpg",
			unique_id: Date.now(),
			commands: {
				build: {
					time: 20, // Time in seconds
					keypress: "a",
					description: "Building a marine...",
					action: function () {
						window.setInterval(function () {
							// Add something to show the unit is building in the Active Command Timer dialog
						}, this.commands.build.time * 1000); // Convert to milliseconds
					}
				},
				destroy: function () {

				}
			}
		}
	},
	game_running = false;

$(document).ready(function () {



	function pad(num, size) {
		var s = num + "";
		while (s.length < size) s = "0" + s;
		return s;
	}

	$("#start").click(function () {
		var time_started = Date.now(),
			time_between_actions = 10000;
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


		window.setInterval(function () {
			add_action_to_the_queue();
			action_queue[action_queue.length - 1].create();
			//		console.log(Date.now() - time_started);
		}, time_between_actions);
	});
});