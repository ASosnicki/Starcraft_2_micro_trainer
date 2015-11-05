var starting_game_objects = {
		"Protoss": [
			{
				"type": "building",
				"name": "Nexus",
				"quantity": 1
		}, {
				"type": "unit",
				"name": "Probe",
				"quantity": 6
		}
	],
		"Terran": [
			{
				"type": "building",
				"name": "Command Center",
				"quantity": 1
		}, {
				"type": "unit",
				"name": "SCV",
				"quantity": 6
		}
	],
		"Zerg": [
			{
				"type": "building",
				"name": "Hive",
				"quantity": 1
			}, {
				"type": "unit",
				"name": "Drone",
				"quantity": 6
			}, {
				"type": "unit",
				"name": "Overseer",
				"quantity": 1
			}, {
				"type": "unit",
				"name": "Larva",
				"quantity": 3
			}
		]
	},

	build_queue = [
		{
			"build_name": "Fast Marine Push Bronze - Gold (TvX)",
			"queue": [
				{
					"requirements": [],
					"action": {
						"quantity": 4,
						"type": "unit",
						"name": "SCV"
					}
				},
				{
					"requirements": [
						{
							"condition": "SCV Count",
							"value": 10
						}
					],
					"action": {
						"quantity": 1,
						"type": "building",
						"name": "Supply Depot"
					}
				},

				// Make sure to add SCV's to the build queue.

				{
					"requirements": [
						{
							"condition": "SCV Count",
							"value": 12
						}
					],
					"action": {
						"quantity": 1,
						"type": "building",
						"name": "Barracks"
					}
				},
				{
					"requirements": [
						{
							"condition": "SCV Count",
							"value": 12
						}
					],
					"action": {
						"quantity": 1,
						"type": "building",
						"name": "Refinery"
					}
				},
				{
					"requirements": [
						{
							"condition": "SCV Count",
							"value": 15
						}
					],
					"action": {
						"quantity": 1,
						"type": "unit",
						"name": "Marine"
					}
				},
				{
					"requirements": [
						{
							"condition": "SCV Count",
							"value": 15
						}
					],
					"action": {
						"quantity": 1,
						"type": "building",
						"name": "Supply Depot"
					}
				},
				{
					"requirements": [
						{
							"condition": "SCV Count",
							"value": 15
						}
				 ],
					"action": {
						"quantity": 1,
						"type": "building",
						"name": "Orbital Command"
					}
				},
				{
					"requirements": [
						{
							"condition": "SCV Count",
							"value": 16
						}
					],
					"action": {
						"quantity": 2,
						"type": "building",
						"name": "Barracks"
					}
				},
				{
					"requirements": [
						{
							"condition": "SCV Count",
							"value": 17
						}
					],
					"action": {
						"quantity": 3,
						"type": "building",
						"name": "Reactor"
					}
				},
				{
					"requirements": [
						{
							"condition": "SCV Count",
							"value": 17
						}
					],
					"action": {
						"quantity": 1,
						"type": "unit",
						"name": "Marine"
					}
				},
				{
					"requirements": [
						{
							"condition": "SCV Count",
							"value": 17
						}
					],
					"action": {
						"quantity": 1,
						"type": "building",
						"name": "Barracks"
					}
				},
				{
					"requirements": [
						{
							"condition": "SCV Count",
							"value": 17
						}
					],
					"action": {
						"quantity": 1,
						"type": "building",
						"name": "Tech Lab"
					}
				},

				// Add support for building upgrades.

				{
					"requirements": [
						{
							"condition": "SCV Count",
							"value": 17
						}
					],
					"action": {
						"quantity": 100,
						"type": "unit",
						"name": "Marine"
					}
				}
			]
		}
	];