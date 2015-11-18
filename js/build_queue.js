// Variable declarations
var starting_game_objects = {
		"Protoss": [
			{
				"type": "building",
				"name": "Nexus"
			}, {
				"type": "unit",
				"name": "Prove"
			}, {
				"type": "unit",
				"name": "Probe"
			}, {
				"type": "unit",
				"name": "Probe"
			}, {
				"type": "unit",
				"name": "Probe"
			}, {
				"type": "unit",
				"name": "Probe"
			}, {
				"type": "unit",
				"name": "Probe"
			}
		],
		"Terran": [
			{
				"type": "building",
				"name": "Command Center"
			}, {
				"type": "unit",
				"name": "SCV"
			}, {
				"type": "unit",
				"name": "SCV"
			}, {
				"type": "unit",
				"name": "SCV"
			}, {
				"type": "unit",
				"name": "SCV"
			}, {
				"type": "unit",
				"name": "SCV"
			}, {
				"type": "unit",
				"name": "SCV"
			}
		],
		"Zerg": [
			{
				"type": "building",
				"name": "Hive"
			}, {
				"type": "unit",
				"name": "Drone"
			}, {
				"type": "unit",
				"name": "Drone"
			}, {
				"type": "unit",
				"name": "Drone"
			}, {
				"type": "unit",
				"name": "Drone"
			}, {
				"type": "unit",
				"name": "Drone"
			}, {
				"type": "unit",
				"name": "Drone"
			}, {
				"type": "unit",
				"name": "Overseer"
			}, {
				"type": "unit",
				"name": "Larva"
			}, {
				"type": "unit",
				"name": "Larva"
			}, {
				"type": "unit",
				"name": "Larva"
			}
		]
	},
	builds = [
		// The first item in the array is the meta data required to run the build.
		{
			build_name: "Fast marine Pubh Bronze - Gold (TvX)",
			faction: "Terran",
			sequence: [

			// The build queue is simply references to game objects with a timing requirement.
				{
					type: "building",
					name: "Supply Depot",
					quantity: 1,
					timing_requirements: [
						{
							requirement: "worker count",
							quantity: 10
				}
			]
			},
				{
					type: "building",
					name: "Barracks",
					quantity: 1,
					timing_requirements: [
						{
							requirement: "worker count",
							quantity: 12
				}
			]
			},
				{
					type: "building",
					name: "Refinery",
					quantity: 1,
					timing_requirements: [
						{
							requirement: "worker count",
							quantity: 12
				}
			]
			},
				{
					type: "unit",
					name: "Marine",
					quantity: 1,
					timing_requirements: [
						{
							requirement: "worker count",
							quantity: 15
				}
			]
			},
				{
					type: "building",
					name: "Supply Depot",
					quantity: 1,
					timing_requirements: [
						{
							requirement: "worker count",
							quantity: 15
				}
			]
			},
				{
					type: "building",
					name: "Orbital Comand",
					quantity: 1,
					timing_requirements: [
						{
							requirement: "worker count",
							quantity: 15
				}
			]
			},
				{
					type: "building",
					name: "Barracks",
					quantity: 1,
					timing_requirements: [
						{
							requirement: "worker count",
							quantity: 16
				}
			]
			},
				{
					type: "building",
					name: "Barracks",
					quantity: 1,
					timing_requirements: [
						{
							requirement: "worker count",
							quantity: 17
				}
			]
			},
				{
					type: "building",
					name: "Reactor",
					quantity: 3,
					timing_requirements: [
						{
							requirement: "worker count",
							quantity: 17
				}
			]
			},
				{
					type: "unit",
					name: "Marine",
					quantity: 15,
					timing_requirements: [
						{
							requirement: "worker count",
							quantity: 17
		}
			]
			},
				{
					type: "building",
					name: "barracks",
					quantity: 1,
					timing_requirements: [
						{
							requirement: "worker count",
							quantity: 17
				}
			]
			},
				{
					type: "building",
					name: "Tech Lab",
					quantity: 1,
					timing_requirements: [
						{
							requirement: "worker count",
							quantity: 17
				}
			]
			},
				{
					type: "upgrade",
					name: "Stim",
					quantity: 1,
					timing_requirements: [
						{
							requirement: "worker count",
							quantity: 17
						}
					]
				}
			]
		},
		{
			build_name: "",
			faction: "Protoss",
			sequence: []
		},
		{
			build_name: "",
			faction: "Zerg",
			sequence: []
		}
	];