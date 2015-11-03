/**
 * Created by chris on 10/11/15.
 */
var game_objects = {
	"Protoss": {
		"unit": {
			"Archon": {
				"img_src": "images/units/Protoss/",
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
				"img_src": "images/units/Protoss/",
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
				"img_src": "images/units/Protoss/",
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
				"img_src": "images/units/Protoss/",
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
				"img_src": "images/units/Protoss/",
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
				"img_src": "images/units/Protoss/",
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
				"img_src": "images/units/Protoss/",
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
				"img_src": "images/units/Protoss/",
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
				"img_src": "images/units/Protoss/",
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
				"img_src": "images/units/Protoss/",
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
				"img_src": "images/units/Protoss/",
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
				"img_src": "images/units/Protoss/",
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
				"img_src": "images/units/Protoss/",
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
				"img_src": "images/units/Protoss/",
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
				"img_src": "images/units/Protoss/",
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
				"img_src": "images/units/Protoss/",
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
				"img_src": "images/units/Protoss/",
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
				"img_src": "images/units/Protoss/",
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