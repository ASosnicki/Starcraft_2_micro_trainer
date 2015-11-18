var helpers = {
	list_available_factions: function (builds) {
		var factions = [];
		for (var i = 0; i < builds.length; i++) {
			if (factions.indexOf(builds[i].faction) === -1) {
				factions.push(builds[i].faction);
			}
		}
		return factions;
	},
	list_available_builds_by_selected_faction: function (faction) {
		var filtered_builds = [];
		for (var i = 0; i < builds.length; i++) {
			if (builds[i].faction === faction) {
				filtered_builds.push(builds[i]);
			}
		}
		return filtered_builds;
	}
}