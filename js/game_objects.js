var game_objects = {
	"Protoss": {
		"unit": {
			"Archon": {
				"name": "",
				"description": "",
				"size": "",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
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
				"name": "",
				"description": "",
				"size": "",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
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
				"name": "",
				"description": "",
				"size": "",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 75,
				"requires": {
					"game_object": "Robotics Bay",
					"count": 1
				},
				"abilities": {}
			},
			"Dark Templar": {
				"name": "",
				"description": "",
				"size": "",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
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
				"name": "",
				"description": "",
				"size": "",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
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
				"name": "",
				"description": "",
				"size": "",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 55,
				"requires": {},
				"abilities": {}
			},
			"Mothership": {
				"name": "",
				"description": "",
				"size": "",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {
					"game_object": "Fleet Beacon",
					"quantity": 1
				},
				"abilities": {
					"r": "Mass Recall",
					"t": "Time Warp"
				}
			},
			"Observer": {
				"name": "",
				"description": "",
				"size": "",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 30,
				"requires": {},
				"abilities": {}
			},
			"Phoenix": {
				"name": "",
				"description": "",
				"size": "",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 35,
				"requires": {},
				"abilities": {
					"g": "Graviton Beam"
				}
			},
			"Probe": {
				"name": "",
				"description": "",
				"size": "",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
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
				"name": "",
				"description": "",
				"size": "",
				"cost": {
					"supply": 1,
					"minerals": 100,
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
				"name": "",
				"description": "",
				"size": "",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
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
				"name": "",
				"description": "",
				"size": "",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 60,
				"requires": {},
				"abilities": {}
			},
			"Warp prism": {
				"name": "",
				"description": "",
				"size": "",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
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
				"name": "",
				"description": "",
				"size": "",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 38,
				"requires": {},
				"abilities": {
					"c": "Charge"
				}
			},
			"Oracle": {
				"name": "",
				"description": "",
				"size": "",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
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
				"name": "",
				"description": "",
				"size": "",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 60,
				"requires": {
					"game_object": "Fleet Beacon",
					"quantity": 1
				},
				"abilities": {}
			},
			"Mothership Core": {
				"name": "",
				"description": "",
				"size": "",
				"cost": {
					"supply": 1,
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
		"building": {
			"Assimilator": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Protoss/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Cybernetics core": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Protoss/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Dark shrine": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Protoss/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Fleet beacon": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Protoss/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Forge": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Protoss/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Gateway": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Protoss/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Nexus": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Protoss/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Photon cannon": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Protoss/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Pylon": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Protoss/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Robotics facility": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Protoss/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Robotics bay": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Protoss/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Stargate": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Protoss/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Templar archives": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Protoss/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Twilight council": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Protoss/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Warp gate": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Protoss/",
				"cost": {
					"supply": 1,
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
		"unit": {
			"Banshee": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Terran/Banshee.jpg",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Terran/Battlecruiser.jpg",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Terran/Ghost.jpg",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Terran/Hellion.jpg",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Terran/Marauder.jpg",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Terran/Marine.jpg",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Terran/MedivacDropshop.jpg",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Terran/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Terran/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Terran/Reaper.jpg",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {}
			},
			"SCV": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Terran/SCV.jpg",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Terran/SiegeTank.jpg",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Terran/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Terran/VikingAssault.jpg",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Terran/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Terran/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Terran/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Terran/",
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
		"building": {
			"Armory": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Terran/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Barracks": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Terran/Barracks.jpg",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Bunker": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Terran/Bunker.jpg",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Command Center": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Terran/CommandCenter.jpg",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Orbital Command": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Terran/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Planetary Fortress": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Terran/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Engineering Bay": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Terran/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Factory": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Terran/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Fusion Core": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Terran/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Ghost Academy": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Terran/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Missile Turret": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Terran/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Refinery": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Terran/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Sensor Tower": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Terran/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Starport": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Terran/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Supply Depot": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Terran/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Reactor": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Terran/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Tech Lab": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Terran/",
				"cost": {
					"supply": 1,
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
	"Zerg": {
		"unit": {
			"Corruptor": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Zerg/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Zerg/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Zerg/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Zerg/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Zerg/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Zerg/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Zerg/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Zerg/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Zerg/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Zerg/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Zerg/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Zerg/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Zerg/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Zerg/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Zerg/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Zerg/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Zerg/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Zerg/",
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
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/units/Zerg/",
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
		"building": {
			"Baneling Nest": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Zerg/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Creep Tumor": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Zerg/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Evolution Chamber": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Zerg/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Extractor": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Zerg/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Hatchery": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Zerg/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Lair": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Zerg/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Hive": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Zerg/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Hydralisk Den": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Zerg/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Infestation Pit": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Zerg/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Nydus Network": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Zerg/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Nydus Worm": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Zerg/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Roach Warren": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Zerg/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Spawning Pool": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Zerg/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Spine Crawler": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Zerg/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Spire": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Zerg/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Greater Spire": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Zerg/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Spore Crawler": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Zerg/",
				"cost": {
					"supply": 1,
					"minerals": 100,
					"gas": 100
				},
				"build_time": 100,
				"requires": {},
				"abilities": {},
				"upgrades": {}
			},
			"Ultralisk Cavern": {
				"name": "",
				"description": "",
				"size": "",
				"img_src": "images/buildings/Zerg/",
				"cost": {
					"supply": 1,
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