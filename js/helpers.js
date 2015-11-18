var helpers = {
	list_available_factions: function (builds) {
		var factions = [];
		for (var i = 0; i < builds.length; i++) {
			if (factions.indexOf(builds[i].faction) === -1) {
				factions.push(builds[i].faction);
			}
		}
		return factions;
	}
}