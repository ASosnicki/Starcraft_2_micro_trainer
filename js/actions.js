var potential_keypresses = ["1", "2", "3", "4", "5", "q", "w", "e", "r", "t", "a", "s", "d", "f", "g", "z", "x", "c", "v", "b"];

function generate_keypress() {
	return potential_keypresses[Math.floor(Math.random() * potential_keypresses.length)];
}

function action(name, body, button, game_object) {
	this.name = name;
	this.body = body;
	this.button = button;
	this.game_object = game_object;
	this.unique_id = Date.now();
	this.html_text = "<div class='panel panel-default'><div class='panel-heading'>" + "<kbd>" + this.button + "</kbd> - " + this.name + "</div><div class='panel-body'>" + this.action_body + "</div></div>";
	this.unit_representation = "<img src='" + this.game_object.img_src + "' class='currently-instanced'>";
	this.create = function () {
		$(".command_queue").append(this.html_text);
		$(".currently-in-play").append(this.unit_representation);

	};
	this.destroy = function () {
		$(this).toggle("explode", {}, 250).remove();
	};
}

function add_action_to_the_queue() {
	action_queue.push(new action("Steve", "You must build a boat.", generate_keypress(), terran_units.marine));
	action_queue[action_queue.length - 1].create;
	console.log(action_queue);
}