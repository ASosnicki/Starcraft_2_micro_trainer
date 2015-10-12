/**
 * Created by chris on 10/11/15.
 */
var game_objects = {
	"Protoss": {
		"units": {
			"Archon": {
				"cost": {
					"supply": 4,
					"minerals": 0,
					"gas": 0
				},
				"build_time": 12,
				"requires": {
					"game_object": "High Templar",
					"count": 2
				},
				"abilities": {
					"f": "Feedback",
					"t": "Psionic Storm",
					"c": "Archon Warp"
				}
			},
			"Carrier": {
				"cost": {
					"supply": 6,
					"minerals": 350,
					"gas": 250
				},
				"build_time": 100,
				"requires": {
					"game_object": "Fleet Beacon",
					"count": 1
				},
				"abilities": {
					"i": "Build Interceptor"
				}
			},
			"Colossus": {
				"cost": {
					"supply": 6,
					"minerals": 300,
					"gas": 200
				},
				"build_time": 75,
				"requires": {
					"game_object": "Robotics Bay",
					"count": 1
				},
				"abilities": {}
			},
			"Dark Templar": {
				"cost": {
					"supply": 2,
					"minerals": 125,
					"gas": 125
				},
				"build_time": 55,
				"requires": {
					"game_object": "Dark Shrine"
				},
				"abilities": {
					"c": "Archon Warp"
				}
			},
			"High Templar": {
				"cost": {
					"supply": 2,
					"minerals": 50,
					"gas": 150
				},
				"build_time": 55,
				"requires": {
					"game_object": "Templar Archives"
				},
				"abilities": {
					"f": "Feedback",
					"t": "Psionic Storm",
					"c": "Archon Warp"
				}
			},
			"Immortal": {
				"cost": {
					"supply": 4,
					"minerals": 250,
					"gas": 100
				},
				"build_time": 55,
				"requires": {},
				"abilities": {}
			},
			"Mothership": {
				"cost": {
					"supply": 8,
					"minerals": 300,
					"gas": 300
				},
				"build_time": 100,
				"requires": {
					"game_object": "Fleet Beacon",
					"quantity": 1
				},
				"abilities": {
					"r": "Mass Recall",
					"t": "Time Warp",
				}
			},
			"Observer": {
				"cost": {
					"supply": 1,
					"minerals": 25,
					"gas": 75
				},
				"build_time": 30,
				"requires": {},
				"abilities": {}
			},
			"Phoenix": {
				"cost": {
					"supply": 2,
					"minerals": 150,
					"gas": 100
				},
				"build_time": 35,
				"requires": {},
				"abilities": {
					"g": "Graviton Beam"
				}
			},
			"Probe": {
				"cost": {
					"supply": 1,
					"minerals": 50,
					"gas": 0
				},
				"build_time": 17,
				"requires": {},
				"abilities": {
					"b": {
						"n": "Nexus",
						"e": "Pylon",
						"a": "Assimilator",
						"g": "Gateway",
						"f": "Forge",
						"c": "Photon Cannon",
						"y": "Cybernetics Core"
					},
					"v": {
						"c": "Twilight Council",
						"s": "Stargate",
						"r": "Robotics Facility",
						"t": "Templar Archives",
						"f": "Fleet Beacon",
						"b": "Robotics Bay",
						"d": "Dark Shrine"
					}
				}
			},
			"Sentry": {
				"cost": {
					"supply": 2,
					"minerals": 50,
					"gas": 100
				},
				"build_time": 37,
				"requires": {
					"game_object": "Cybernetics Core",
					"quantity": 1
				},
				"abilities": {
					"f": "Force Field",
					"g": "Guardian Shield",
					"c": "Hallucination"
				}
			},
			"Stalker": {
				"cost": {
					"supply": 2,
					"minerals": 125,
					"gas": 50
				},
				"build_time": 42,
				"requires": {
					"game_object": "Cybernetics Core",
					"quantity": 1
				},
				"abilities": {
					"b": "Blink"
				}
			},
			"Void ray": {
				"cost": {
					"supply": 4,
					"minerals": 250,
					"gas": 150
				},
				"build_time": 60,
				"requires": {},
				"abilities": {}
			},
			"Warp prism": {
				"cost": {
					"supply": 2,
					"minerals": 200,
					"gas": 0
				},
				"build_time": 50,
				"requires": {},
				"abilities": {
					"e": "Phasing Mode",
					"t": "Transport Mode",
					"l": "Load",
					"d": "Unload All"
				}
			},
			"Zealot": {
				"cost": {
					"supply": 2,
					"minerals": 100,
					"gas": 0
				},
				"build_time": 38,
				"requires": {},
				"abilities": {
					"c": "Charge"
				}
			},
			"Oracle": {
				"cost": {
					"supply": 3,
					"minerals": 150,
					"gas": 150
				},
				"build_time": 50,
				"requires": {},
				"abilities": {
					"r": "Revelation",
					"t": "Envision",
					"c": "Activate Pulsar Beam"
				}
			},
			"Tempest": {
				"cost": {
					"supply": 4,
					"minerals": 300,
					"gas": 200
				},
				"build_time": 60,
				"requires": {
					"game_object": "Fleet Beacon",
					"quantity": 1
				},
				"abilities": {}
			},
			"Mothership Core": {
				"cost": {
					"supply": 2,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 30,
				"requires": {
					"game_object": "Cybernetics Core",
					"quantity": 1
				},
				"abilities": {
					"r": "Mass Recall",
					"t": "Time Warp",
					"f": "Photon Overcharge",
					"u": "Upgrade to Mothership"
				}
			}
		},
		"buildings": {
			"Assimilator": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Cybernetics core": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Dark shrine": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Fleet beacon": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Forge": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Gateway": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Nexus": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Photon cannon": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Pylon": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Robotics facility": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Robotics bay": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Stargate": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Templar archives": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Twilight council": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Warp gate": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			}
		}
	},
	"Terran": {
		"units": {
			"Banshee": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Battlecruiser": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Ghost": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Hellion": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Marauder": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Marine": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Medivac Dropship": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Mule": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Raven": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Reaper": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Scv": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Siege Tank, Crucio": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Thor": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Viking": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Auto-Turret": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Point Defense Drone": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Hellbat": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Widow Mine": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			}
		},
		"buildings": {
			"Armory": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Barracks": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Bunker": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Command Center": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Orbital Command": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Planetary Fortress": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Engineering Bay": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Factory": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Fusion Core": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Ghost Academy": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Missile Turret": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Refinery": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Sensor Tower": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Starport": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Supply Depot": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Reactor": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Tech Lab": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			}
		}
	},
	"Zerg": {
		"units": {
			"Corruptor": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Brood Lord": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Drone": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Hydralisk": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Infestor": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Larva": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Mutalisk": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Overlord": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Overseer": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Queen": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Roach": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Ultralisk": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Zergling": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Baneling": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Broodling": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Changeling": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Infested Terran": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Swarm Host": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"Viper": {
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			}
		},
		"buildings": {
			"Baneling Nest": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Creep Tumor": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Evolution Chamber": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Extractor": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Hatchery": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Lair": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Hive": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"abilities": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				},
				"upgrades": {
					"cost": {
						"supply": 1,
						"minerals": 100,
						"gas": 100
					},
					"build_time": 100,
					"requires": {},
					"upgrades": [],
					"abilities": {}
				}
			},
			"Hydralisk Den": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Infestation Pit": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Nydus Network": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Nydus Worm": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Roach Warren": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Spawning Pool": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Spine Crawler": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Spire": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Greater Spire": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Spore Crawler": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Ultralisk Cavern": {
				"costs": {
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			}
		}
	}
};