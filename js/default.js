/**
 * Created by chris on 10/11/15.
 */

$(document).ready(function () {
	var action_queue = [],
		groups = {},
		locations = {},
		potential_keypresses = ["1", "2", "3", "4", "5", "q", "w", "e", "r", "t", "a", "s", "d", "f", "g", "z", "x", "c", "v", "b"],
		game_running = false;



	function generate_keypress() {
		return potential_keypresses[Math.floor(Math.random() * potential_keypresses.length)];
	}

	function action(action_name, action_body, action_button) {
		this.name = action_name;
		this.action_body = action_body;
		this.button = action_button;
		this.html_text = "<div class='panel panel-default'><div class='panel-heading'>" + this.name + "<kbd>" + this.button + "</kbd></div><div class='panel-body'>" + this.action_body + "</div></div>";
		this.create = function () {
			$(".command_queue").append(this.html_text);
		};
		this.destroy = function () {
			$(this).toggle("explode", {}, 250).remove();
		};
	}

	function add_action_to_the_queue() {
		action_queue.push(new action("Steve", "You must build a boat.", generate_keypress()));
		action_queue[action_queue.length - 1].create;
		console.log(action_queue);
	}

	function pad(num, size) {
		var s = num + "";
		while (s.length < size) s = "0" + s;
		return s;
	}

	$("#start").click(function () {
		var time_started = Date.now(),
			time_between_actions = 10000;
		game_running = true;



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