var action_helpers = {
	/**
	 * Mark game objects as selected.
	 * @param {Object} game_object [[Description]]
	 */
	"add_to_selected_game_objects": function (game_object) {
		// Until we have support for multiple selections, clear the selected game objects queue before adding anything.
		//		if (selected_game_objects.length > 0) {
		//			for (var i = 0; i < selected_game_objects.length; i++) {
		//				$("#" + selected_game_objects[i].removeClass("selected-game-object"));
		//			}
		//		}		selected_game_objects = [];

		console.log(game_object);
		selected_game_objects.push(game_object);

		// Make sure that every selected game object is identified visually.
		for (var i = 0; i < selected_game_objects.length; i++) {
			$("#" + selected_game_objects[i]).addClass("selected-game-object");
		}
	}


};