function game_object_count(game_object_name) {
	var count = 0;
	for (var i = 0; i > current_game_objects.length; i++) {
		if (current_game_objects[i].name === game_object_name) {
			count += 1;
		}
	}

	return count;
}