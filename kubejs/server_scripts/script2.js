onEvent('recipes', event => {
  
  //Pendorite
  event.custom(
      {
      "type": "botania:mana_infusion",
      "input": {
        "item": "electrodynamics:raworelead"
      },
      "output": {
        "item": "byg:raw_pendorite"
      },
      "mana": 400
  }
  )
  
  //Wandering Trader Egg
  event.custom(
    {
    "type": "extendedcrafting:shaped_table",
    "pattern": [
      "AAABBBAAA",
      "AABBBBBAA",
      "ABBBBBBBA",
      "BBBBBBBBB",
      "BBBBCBBBB",
      "BBBBBBBBB",
      "BBBBBBBBB",
      "ABBBBBBBA",
      "AABBBBBAA"
    ],
    "key": {
      "A": {
        "item": "minecraft:egg"
      },
      "B": {
        "item": "minecraft:emerald_block"
      },
      "C": {
        "item": "timeextraminer:times_block"
      }
    },
    "result": {
      "item": "minecraft:wandering_trader_spawn_egg"
    }
  })
  
  //Patch Lead
  event.custom(
  {
      "type": "create:milling",
      "ingredients": [
        {
          "item": "electrodynamics:ingotlead"
        }
      ],
      "results": [
        {
          "item": "electrodynamics:raworelead",
          "count": 1
        }
      ],
      "processingTime": 50
  }
)
  
  //Honey Comb
  event.custom(
  {
      "type": "create:milling",
      "ingredients": [
        {
          "item": "chemlib:sucrose"
        },
        {
          "item": "chemlib:sucrose"
        },
        {
          "item": "chemlib:sucrose"
        },
        {
          "item": "chemlib:triglyceride"
        }
      ],
      "results": [
      {
        "item": "minecraft:honeycomb",
        "count": 1
      }
      ],
      "processingTime": 50
    }
  )

  //Graphite
  event.custom(
		{
			"type": "create:milling",
			"ingredients": [
			  {
				"item": "chemlib:graphite"
			  },
              {
				"item": "chemlib:graphite"
			  }
			],
			"results": [
			  {
				"item": "minecraft:coal",
				"count": 1
			  }
			],
			"processingTime": 50
		  }
	)

    //Black Iron Frame avec Compact Crafting
    event.remove({ id: 'extendedcrafting:frame' })
    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 3,
        "layers": [
        {
            "type": "compactcrafting:mixed",
            "pattern": [
                ["a", "a", "a"],
                ["a", "b", "a"],
                ["a", "a", "a"]
            ]
        },
        {
            "type": "compactcrafting:mixed",
            "pattern": [
                ["a", "b", "a"],
                ["b", "-", "b"],
                ["a", "b", "a"]
            ]
        },
        {
            "type": "compactcrafting:mixed",
            "pattern": [
                ["a", "a", "a"],
                ["a", "b", "a"],
                ["a", "a", "a"]
            ]
        }],
        "catalyst": {
            "id": "extendedcrafting:ultimate_singularity",
            "Count": 1
        },
        "components": {
            "a": {
                "type": "compactcrafting:block",
                "block": "extendedcrafting:black_iron_block"
            },
            "b": {
                "type": "compactcrafting:block",
                "block": "create:framed_glass"
            }
        },
        "outputs": [
            {
                "id": "extendedcrafting:frame",
                "Count": 1
            }
        ]
    })

    //Chemical Ingot
    event.custom(
      {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCDEFGHI",
          "JKLMNOPQR",
          "STUVWXYZa",
          "bcdefghij",
          "klmnopqrs",
          "tu*vwxyz0",
          "123456789",
          "+-       ",
          "         "
        ],
        "key": {
          "A": {
            "item": "electrodynamics:ingotlithium"
          },
          "B": {
            "item": "chemlib:beryllium_ingot"
          },
          "C": {
            "item": "chemlib:sodium_ingot"
          },
          "D": {
            "item": "chemlib:magnesium_ingot"
          },
          "E": {
            "item": "electrodynamics:ingotaluminum"
          },
          "F": {
            "item": "chemlib:potassium_ingot"
          },
          "G": {
            "item": "chemlib:calcium_ingot"
          },
          "H": {
            "item": "chemlib:scandium_ingot"
          },
          "I": {
            "item": "electrodynamics:ingottitanium"
          },
          "J": {
            "item": "electrodynamics:ingotvanadium"
          },
          "K": {
            "item": "electrodynamics:ingotchromium"
          },
          "L": {
            "item": "chemlib:manganese_ingot"
          },
          "M": {
            "item": "minecraft:iron_ingot"
          },
          "N": {
            "item": "tconstruct:cobalt_ingot"
          },
          "O": {
            "item": "chemlib:nickel_ingot"
          },
          "P": {
            "item": "minecraft:copper_ingot"
          },
          "Q": {
            "item": "create:zinc_ingot"
          },
          "R": {
            "item": "chemlib:gallium_ingot"
          },
          "S": {
            "item": "chemlib:rubidium_ingot"
          },
          "T": {
            "item": "chemlib:strontium_ingot"
          },
          "U": {
            "item": "chemlib:yttrium_ingot"
          },
          "V": {
            "item": "chemlib:zirconium_ingot"
          },
          "W": {
            "item": "chemlib:niobium_ingot"
          },
          "X": {
            "item": "electrodynamics:ingotmolybdenum"
          },
          "Y": {
            "item": "chemlib:ruthenium_ingot"
          },
          "Z": {
            "item": "chemlib:rhodium_ingot"
          },
          "a": {
            "item": "chemlib:palladium_ingot"
          },
          "b": {
            "item": "electrodynamics:ingotsilver"
          },
          "c": {
            "item": "chemlib:cadmium_ingot"
          },
          "d": {
            "item": "chemlib:indium_ingot"
          },
          "e": {
            "item": "electrodynamics:ingottin"
          },
          "f": {
            "item": "chemlib:cesium_ingot"
          },
          "g": {
            "item": "chemlib:barium_ingot"
          },
          "h": {
            "item": "chemlib:lanthanum_ingot"
          },
          "i": {
            "item": "chemlib:cerium_ingot"
          },
          "j": {
            "item": "chemlib:praseodymium_ingot"
          },
          "k": {
            "item": "chemlib:neodymium_ingot"
          },
          "l": {
            "item": "chemlib:samarium_ingot"
          },
          "m": {
            "item": "chemlib:europium_ingot"
          },
          "n": {
            "item": "chemlib:gadolinium_ingot"
          },
          "o": {
            "item": "chemlib:terbium_ingot"
          },
          "p": {
            "item": "chemlib:dysprosium_ingot"
          },
          "q": {
            "item": "chemlib:holmium_ingot"
          },
          "r": {
            "item": "chemlib:erbium_ingot"
          },
          "s": {
            "item": "chemlib:thulium_ingot"
          },
          "t": {
            "item": "chemlib:ytterbium_ingot"
          },
          "u": {
            "item": "chemlib:lutetium_ingot"
          },
          "*": {
            "item": "chemlib:hafnium_ingot"
          },
          "v": {
            "item": "chemlib:tantalum_ingot"
          },
          "w": {
            "item": "chemlib:tungsten_ingot"
          },
          "x": {
            "item": "chemlib:rhenium_ingot"
          },
          "y": {
            "item": "chemlib:osmium_ingot"
          },
          "z": {
            "item": "chemlib:iridium_ingot"
          },
          "0": {
            "item": "chemlib:platinum_ingot"
          },
          "1": {
            "item": "minecraft:gold_ingot"
          },
          "2": {
            "item": "chemlib:thallium_ingot"
          },
          "3": {
            "item": "electrodynamics:ingotlead"
          },
          "4": {
            "item": "chemlib:bismuth_ingot"
          },
          "5": {
            "item": "chemlib:polonium_ingot"
          },
          "6": {
            "item": "chemlib:francium_ingot"
          },
          "7": {
            "item": "chemlib:radium_ingot"
          },
          "8": {
            "item": "chemlib:actinium_ingot"
          },
          "9": {
            "item": "chemlib:thorium_ingot"
          },
          "+": {
            "item": "chemlib:protactinium_ingot"
          },
          "-": {
            "item": "chemlib:uranium_ingot"
          }
        },
        "result": {
          "item": "timeextraminer:alchemical_ingot"
        }
      }
    )

    //Drawer Infini
    event.shaped('storagedrawers:creative_storage_upgrade', [
		'SSS',
		'BEB',
		'SSS'
	], {
	  S: 'minecraft:stick',
    B: 'minecraft:bedrock',
	  E: 'storagedrawers:emerald_storage_upgrade'
	})

    //Rendre le quantum block incraftable
    event.remove({output: 'extendedcrafting:the_ultimate_block'})
    event.remove({input: 'extendedcrafting:the_ultimate_block'})

    //Black Iron
    event.remove({ id: 'extendedcrafting:black_iron_ingot' })
    event.custom(
        {
            "type": "mythicbotany:infusion",
            "group": "infuser",
            "output": {
              "item": "extendedcrafting:black_iron_ingot",
              "count": 1
            },
            "mana": 4000000,
            "ingredients": [
              {
                "item": "extendedcrafting:enhanced_ender_ingot"
              },
              {
                "item": "quark:diamond_heart"
              },
              {
                "item": "timeextraminer:bedrock_ingot"
              }
            ],
            "fromColor": 261352,
            "toColor": 1908769
          }
    )

    //Coeur de diamant
    event.custom(
        {
            "type": "extendedcrafting:shaped_ender_crafter",
            "pattern": [
              " D ",
              "DSD",
              " D "
            ],
            "key": {
              "S": {
                "item": "extendedcrafting:ender_star"
              },
              "D": {
                "item": "minecraft:diamond_block"
              }
            },
            "result": {
              "item": "quark:diamond_heart",
              "count": 4
            }
          }
    )

    //Utimate Ingot
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
              "ABCDEFG",
              "HIJKLMN",
              "OPQRSTU",
              "VWXYZab",
              "cdefghi",
              "jklmnop",
              "qrstuvw"
            ],
            "key": {
              "A": {
                "item": "minecraft:iron_ingot"
              },
              "B": {
                "item": "minecraft:copper_ingot"
              },
              "C": {
                "item": "minecraft:gold_ingot"
              },
              "D": {
                "item": "minecraft:netherite_ingot"
              },
              "E": {
                "item": "extendedcrafting:black_iron_ingot"
              },
              "F": {
                "item": "extendedcrafting:redstone_ingot"
              },
              "G": {
                "item": "extendedcrafting:ender_ingot"
              },
              "H": {
                "item": "create:brass_ingot"
              },
              "I": {
                "item": "timeextraminer:bedrock_ingot"
              },
              "J": {
                "item": "electrodynamics:ingottin"
              },
              "K": {
                "item": "electrodynamics:ingotsilver"
              },
              "L": {
                "item": "electrodynamics:ingotsteel"
              },
              "M": {
                "item": "electrodynamics:ingotlead"
              },
              "N": {
                "item": "electrodynamics:ingotsuperconductive"
              },
              "O": {
                "item": "electrodynamics:ingotlithium"
              },
              "P": {
                "item": "electrodynamics:ingotaluminum"
              },
              "Q": {
                "item": "electrodynamics:ingotchromium"
              },
              "R": {
                "item": "electrodynamics:ingotstainlesssteel"
              },
              "S": {
                "item": "electrodynamics:ingotvanadiumsteel"
              },
              "T": {
                "item": "electrodynamics:ingothslasteel"
              },
              "U": {
                "item": "electrodynamics:ingottitanium"
              },
              "V": {
                "item": "chemlib:magnesium_ingot"
              },
              "W": {
                "item": "beyond_earth:desh_ingot"
              },
              "X": {
                "item": "beyond_earth:ostrum_ingot"
              },
              "Y": {
                "item": "extendedcrafting:ultimate_singularity"
              },
              "Z": {
                "item": "mythicbotany:alfsteel_ingot"
              },
              "a": {
                "item": "tconstruct:cobalt_ingot"
              },
              "b": {
                "item": "tconstruct:slimesteel_ingot"
              },
              "c": {
                "item": "tconstruct:pig_iron_ingot"
              },
              "d": {
                "item": "tconstruct:queens_slime_ingot"
              },
              "e": {
                "item": "tconstruct:manyullyn_ingot"
              },
              "f": {
                "item": "tconstruct:hepatizon_ingot"
              },
              "g": {
                "item": "botania:manasteel_ingot"
              },
              "h": {
                "item": "botania:terrasteel_ingot"
              },
              "i": {
                "item": "botania:elementium_ingot"
              },
              "j": {
                "item": "timeextraminer:newtons_ingot"
              },
              "k": {
                "item": "byg:pendorite_ingot"
              },
              "l": {
                "item": "timeextraminer:alchemical_ingot"
              },
              "m": {
                "item": "electrodynamics:ingotvanadium"
              },
              "n": {
                "item": "electrodynamics:ingottitaniumcarbide"
              },
              "o": {
                "item": "tconstruct:rose_gold_ingot"
              },
              "p": {
                "item": "beyond_earth:calorite_ingot"
              },
              "q": {
                "item": "extendedcrafting:enhanced_ender_ingot"
              },
              "r": {
                "item": "electrodynamics:ingotbronze"
              },
              "s": {
                "item": "electrodynamics:ingotmolybdenum"
              },
              "t": {
                "item": "tconstruct:amethyst_bronze_ingot"
              },
              "u": {
                "item": "botania:gaia_ingot"
              },
              "v": {
                "item": "chemlib:tungsten_ingot"
              },
              "w": {
                "item": "extendedcrafting:crystaltine_ingot"
              }
            },
            "result": {
              "item": "extendedcrafting:the_ultimate_ingot"
            }
          }
    )

    //Elite Crafting Table
    event.remove({ id: 'extendedcrafting:elite_table' })
    event.custom(
      {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCBA",
          "DDCDD",
          "EEFEE",
          "ABABA",
          "DDADD"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:black_iron_slate"
          },
          "B": {
            "item": "extendedcrafting:luminessence"
          },
          "C": {
            "item": "extendedcrafting:elite_catalyst"
          },
          "D": {
            "item": "minecraft:diamond"
          },
          "E": {
            "item": "extendedcrafting:advanced_table"
          },
          "F": {
            "item": "minecraft:diamond_block"
          }
        },
        "result": {
          "item": "extendedcrafting:elite_table"
        }
      }
    )

    //Ultimate Crafting Table
    event.remove({ id: 'extendedcrafting:ultimate_table' })
    event.custom(
      {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABACABA",
          "DDCECDD",
          "FGFCFGF",
          "HIHJHIH",
          "FAFAFAF",
          "ABEEEBA",
          "DDEEEDD"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:black_iron_slate"
          },
          "B": {
            "item": "extendedcrafting:luminessence"
          },
          "C": {
            "item": "extendedcrafting:ultimate_component"
          },
          "D": {
            "item": "minecraft:emerald"
          },
          "E": {
            "item": "extendedcrafting:black_iron_ingot"
          },
          "F": {
            "item": "extendedcrafting:elite_component"
          },
          "G": {
            "item": "extendedcrafting:elite_catalyst"
          },
          "H": {
            "item": "extendedcrafting:advanced_table"
          },
          "I": {
            "item": "minecraft:diamond_block"
          },
          "J": {
            "item": "minecraft:emerald_block"
          }
        },
        "result": {
          "item": "extendedcrafting:ultimate_table"
        }
      }
    )

    //Compact Crafting
    event.remove({ id: 'compactcrafting:field_projector' })
    event.remove({ id: 'compactcrafting:projector_dish' })
    event.remove({ id: 'compactcrafting:base' })
    event.remove({ id: 'compactcrafting:rescan_proxy' })
    event.remove({ id: 'compactcrafting:match_proxy' })
    event.custom(
      {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        " A ",
        "BCB",
        "DDD"
      ],
      "key": {
        "A": {
          "item": "minecraft:redstone_torch"
        },
        "B": {
          "item": "minecraft:diamond"
        },
        "C": {
          "item": "minecraft:stone_slab"
        },
        "D": {
          "item": "minecraft:heavy_weighted_pressure_plate"
        }
      },
      "result": {
        "item": "compactcrafting:base",
        "count": 4
      }
    }
  )
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AB ",
        "ACB",
        "AB "
      ],
      "key": {
        "A": {
          "tag": "forge:glass_panes"
        },
        "B": {
          "item": "minecraft:iron_ingot"
        },
        "C": {
          "item": "minecraft:ender_eye"
        }
      },
      "result": {
        "item": "compactcrafting:projector_dish",
        "count": 4
      }
    }
  )
  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "compactcrafting:base"
        },
        {
          "item": "minecraft:redstone"
        }
      ],
      "result": {
        "item": "compactcrafting:match_proxy"
      }
    }
  )
  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "compactcrafting:base"
        },
        {
          "item": "minecraft:crafting_table"
        }
      ],
      "result": {
        "item": "compactcrafting:rescan_proxy"
      }
    }
  )
  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "compactcrafting:projector_dish"
        },
        {
          "item": "compactcrafting:base"
        }
      ],
      "result": {
        "item": "compactcrafting:field_projector"
      }
    }
  )

  //Ordinateur
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABACDCABA",
        "BEBFGFBEB",
        "ABACDCABA",
        "CDCEGECDC",
        "FGFGHGFGF",
        "CDCEGECDC",
        "ABAIJIABA",
        "BEBJKJBEB",
        "ABAIEIABA"
      ],
      "key": {
        "A": {
          "item": "electrodynamics:wirehighlyinsulatedcopper"
        },
        "B": {
          "item": "extendedcrafting:redstone_ingot"
        },
        "C": {
          "item": "electrodynamics:dustobsidian"
        },
        "D": {
          "item": "electrodynamics:platesteel"
        },
        "E": {
          "item": "electrodynamics:circuitbasic"
        },
        "F": {
          "item": "electrodynamics:circuitelite"
        },
        "G": {
          "item": "electrodynamics:circuitultimate"
        },
        "H": {
          "item": "computercraft:computer_normal"
        },
        "I": {
          "item": "electrodynamics:wiregold"
        },
        "J": {
          "item": "create:framed_glass"
        },
        "K": {
          "item": "computercraft:monitor_advanced"
        }
      },
      "result": {
        "item": "computercraft:computer_advanced"
      }
    }
  )

  //Botany Pots
  event.custom(
    {
      "type": "botanypots:crop",
      "seed": {
        "item": "timeextraminer:temporal_seeds"
      },
      "categories": [
        "dirt",
        "farmland"
      ],
      "growthTicks": 2,
      "display": {
        "type": "botanypots:aging",
        "block": "timeextraminer:temporal_wheat_2"
      },
      "drops": [
        {
          "chance": 1.00,
          "output": {
            "item": "timeextraminer:raw_time_cristal"
          },
          "minRolls": 100,
          "maxRolls": 200
        },
        {
          "chance": 1.00,
          "output": {
            "item": "timeextraminer:temporal_seeds"
          },
          "minRolls": 5,
          "maxRolls": 10
        }
      ]
    }
  )

  //Machine Frame RFTools
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCCDCCBA",
        "BCCCCCCCB",
        "CCAEFEACC",
        "CCEGHGECC",
        "DCFHIHFCD",
        "CCEGHGECC",
        "CCAEFEACC",
        "BCCCCCCCB",
        "ABCCDCCBA"
      ],
      "key": {
        "A": {
          "item": "quark:iron_plate"
        },
        "B": {
          "item": "beyond_earth:iron_plating_block"
        },
        "C": {
          "item": "extendedcrafting:black_iron_slate"
        },
        "D": {
          "item": "extendedcrafting:black_iron_block"
        },
        "E": {
          "item": "beyond_earth:iron_plate"
        },
        "F": {
          "item": "extendedcrafting:black_iron_ingot"
        },
        "G": {
          "item": "extendedcrafting:frame"
        },
        "H": {
          "item": "electrodynamics:circuitultimate"
        },
        "I": {
          "item": "computercraft:computer_advanced"
        }
      },
      "result": {
        "item": "rftoolsbase:machine_frame"
      }
    }
  )

  //Drawer Creatif
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAAAABAAB",
        "ACCCCBBBB",
        "ACDDEBBBB",
        "ACDEFBDCB",
        "ACEFGFECA",
        "ACDEFEDCA",
        "ACDDEDDCA",
        "ACCCCCCCA",
        "AAAAAAAAA"
      ],
      "key": {
        "A": {
          "item": "storagedrawers:creative_storage_upgrade"
        },
        "B": {
          "item": "extendedcrafting:the_ultimate_ingot"
        },
        "C": {
          "item": "electrodynamics:creativefluidsource"
        },
        "D": {
          "item": "electrodynamics:creativepowersource"
        },
        "E": {
          "item": "extendedcrafting:ultimate_singularity"
        },
        "F": {
          "item": "extendedcrafting:ender_star"
        },
        "G": {
          "item": "storagedrawers:controller"
        }
      },
      "result": {
        "item": "storagedrawers:creative_vending_upgrade"
      }
    }
  )

  //Advanced Crafting Table avec Compact Crafting
    event.remove({ id: 'extendedcrafting:advanced_table' })
    event.custom({
        "type": "compactcrafting:miniaturization",
        "recipeSize": 3,
        "layers": [
        {
            "type": "compactcrafting:mixed",
            "pattern": [
                ["a", "a", "a"],
                ["a", "b", "a"],
                ["a", "a", "a"]
            ]
        },
        {
            "type": "compactcrafting:mixed",
            "pattern": [
                ["c", "d", "c"],
                ["c", "d", "c"],
                ["c", "d", "c"]
            ]
        },
        {
            "type": "compactcrafting:mixed",
            "pattern": [
                ["a", "a", "a"],
                ["a", "e", "a"],
                ["a", "a", "a"]
            ]
        }],
        "catalyst": {
            "id": "extendedcrafting:luminessence",
            "Count": 1
        },
        "components": {
            "a": {
                "type": "compactcrafting:block",
                "block": "timeextraminer:advanced_components"
            },
            "b": {
                "type": "compactcrafting:block",
                "block": "timeextraminer:advancedcatalyst"
            },
            "c": {
                "type": "compactcrafting:block",
                "block": "extendedcrafting:basic_table"
            },
            "d": {
                "type": "compactcrafting:block",
                "block": "minecraft:gold_block"
            },
            "e": {
                "type": "compactcrafting:block",
                "block": "extendedcrafting:black_iron_block"
          }
        },
        "outputs": [
            {
                "id": "extendedcrafting:advanced_table",
                "Count": 1
            }
        ]
    })

    //Moteur Créatif
    event.custom(
      {
        "type": "minecraft:smithing",
        "base": {
          "item": "electrodynamics:creativepowersource"
        },
        "addition": {
          "item": "createaddition:electric_motor"
        },
        "result": {
          "item": "create:creative_motor"
        }
      }
    )

    //Générateur Créatif
    event.custom(
      {
        "type": "minecraft:smithing",
        "base": {
          "item": "create:creative_motor"
        },
        "addition": {
          "item": "createaddition:alternator"
        },
        "result": {
          "item": "createaddition:creative_energy"
        }
      }
    )

    //Dupli Singu
    event.custom({
      "type": "compactcrafting:miniaturization",
        "recipeSize": 3,
        "layers": [
          {
            "type": "compactcrafting:filled",
            "component": "C",
          },
          {
            "type": "compactcrafting:filled",
            "component": "C",
          },
          {
            "type": "compactcrafting:filled",
            "component": "C",
          }
        ],
        "catalyst": {
            "id": "extendedcrafting:the_ultimate_ingot",
            "Count": 1
        },
        "components": {
            "C": {
              "type": "compactcrafting:block",
              "block": "extendedcrafting:the_ultimate_block"
          }
      },
        "outputs": [
          {
            "id": "extendedcrafting:ultimate_singularity",
            "Count": 2
          }
      ]
      }
    )

    //Dupliquer l'Alchemical Ingot
    event.shapeless(Item.of('timeextraminer:alchemical_ingot', 2),
      [ 
        'extendedcrafting:ultimate_singularity',
        'timeextraminer:alchemical_ingot'
      ]
    )
    .keepIngredient('extendedcrafting:ultimate_singularity')

    //Furingot
    event.custom(
      {
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 1,
        "ingredient": {
          "item": "minecraft:cooked_beef"
        },
        "catalyst": {
          "item": "extendedcrafting:the_ultimate_catalyst"
        },
        "result": {
          "item": "timeextraminer:furingots"
        }
      }
    )

    //Benjingot
    event.custom(
      {
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 1,
        "ingredient": {
          "item": "computercraft:computer_normal"
        },
        "catalyst": {
          "item": "extendedcrafting:the_ultimate_catalyst"
        },
        "result": {
          "item": "timeextraminer:benjingots"
        }
      }
    )

    //Doukingot
    event.custom(
      {
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 1,
        "ingredient": {
          "item": "quark:trowel"
        },
        "catalyst": {
          "item": "extendedcrafting:the_ultimate_catalyst"
        },
        "result": {
          "item": "timeextraminer:doukingots"
        }
      }
    )

    //Alphmium Ingot
    event.custom(
      {
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 1,
        "ingredient": {
          "item": "beyond_earth:flag_red"
        },
        "catalyst": {
          "item": "extendedcrafting:the_ultimate_catalyst"
        },
        "result": {
          "item": "timeextraminer:alphmium_ingot"
        }
      }
    )

    //Quantum Compressor
    event.remove({ id: 'extendedcrafting:compressor' })
    event.custom(
      {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AABBCBBAA",
          "DEBCBCBED",
          "BBBECEBBB",
          "BCEFGFECB",
          "CBCHIHCBC",
          "BCEFGFECB",
          "BBBECEBBB",
          "DEBCBCBED",
          "AABBCBBAA"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:crystaltine_ingot"
          },
          "B": {
            "item": "extendedcrafting:black_iron_ingot"
          },
          "C": {
            "item": "extendedcrafting:crystaltine_component"
          },
          "D": {
            "item": "extendedcrafting:black_iron_slate"
          },
          "E": {
            "item": "extendedcrafting:luminessence"
          },
          "F": {
            "type": "forge:nbt",
            "item": "nuclearscience:celldarkmatter",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "G": {
            "item": "electrodynamics:circuitultimate"
          },
          "H": {
            "item": "nuclearscience:fusionreactorcore"
          },
          "I": {
            "item": "nuclearscience:quantumcapacitor"
          }
        },
        "result": {
          "item": "extendedcrafting:compressor",
          "count": 16
        }
      }
    )
    
    //Gaia Farmer
    event.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"setamvtroismm:gaia_farmer"}'), [
      'GEG',
      'EBE',
      'FFF'
    ], {
    G: 'botania:gaia_ingot',
    E: 'botania:life_essence',
    B: 'minecraft:beacon',
    F: 'minecraft:iron_block'
    })

    //Plasma Generator
    event.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"setamvtroismm:plasma_gen"}'), [
      'CCC',
      'CPC',
      'CRC'
    ], {
    C: 'minecraft:cobblestone',
    P: 'electrodynamics:railgunplasma',
    R: 'minecraft:redstone'
    })

    //Pendorite with Emerald
    event.shaped(Item.of('byg:pendorite_ingot'), [
      'CCC',
      'CPP',
      'EE '
    ], {
    C: 'byg:pendorite_scraps',
    E: 'minecraft:emerald',
    P: 'minecraft:diamond'
    })

    //Dimension Quantique
    event.custom(
      {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABBCCCBBA",
          "BBCDDDCBB",
          "BCDEEEDCB",
          "CDEEFEEDC",
          "CDEFGFEDC",
          "CDEEFEEDC",
          "BCDEEEDCB",
          "BBCDDDCBB",
          "ABBCCCBBA"
        ],
        "key": {
          "A": {
            "item": "electrodynamics:fluidvoid"
          },
          "B": {
            "item": "electrodynamics:upgradeitemvoid"
          },
          "C": {
            "item": "nuclearscience:cellantimattersmall"
          },
          "D": {
            "type": "forge:nbt",
            "item": "nuclearscience:celldarkmatter",
            "count": 1,
            "nbt": "{Damage:0}"
          },
          "E": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:hydrogen\"}"
          },
          "F": {
            "item": "extendedcrafting:luminessence"
          },
          "G": {
            "item": "extendedcrafting:ultimate_singularity"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "rftoolsdim:realized_dimension_tab",
          "count": 1,
          "nbt": "{descriptor:'[{\"t\":\"b\",\"n\":\"extendedcrafting:the_ultimate_block\"},{\"t\":\"sk\",\"n\":\"default\"},{\"t\":\"ti\",\"n\":\"normal\"},{\"t\":\"t\",\"n\":\"chaotic\"}]',dimension:\"rftoolsdim:quantumania\",name:\"quantumania\",rfCreateCost:65,rfMaintainCost:63,tickCost:135,ticksLeft:0}"
        }
      }
    )

    //Lapis-Lazuli
    event.custom(
      {
        "type": "botania:elven_trade",
        "ingredients": [
          {
            "item": "minecraft:emerald"
          }
        ],
        "output": [
          {
            "item": "minecraft:lapis_lazuli"
          }
        ]
      }
    )

    //Auto Ender Crafter
    event.custom(
      {
        "type": "extendedcrafting:shaped_ender_crafter",
        "pattern": [
          "ABA",
          "BCB",
          "DDD"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:ender_star"
          },
          "B": {
            "item": "extendedcrafting:enhanced_ender_ingot"
          },
          "C": {
            "item": "extendedcrafting:ender_crafter"
          },
          "D": {
            "item": "extendedcrafting:ender_alternator"
          }
        },
        "result": {
          "item": "custommachinery:custom_machine_item",
          "nbt": "{machine:\"setamvtroismm:auto_ender_crafting\"}"
        }
      }
    )

    //Advanced Component
    event.shapeless(Item.of('timeextraminer:advanced_components', 1),
      [ 
        'extendedcrafting:advanced_component'
      ]
    )

    //Advanced Catalyst
    event.shapeless(Item.of('timeextraminer:advancedcatalyst', 1),
      [ 
        'extendedcrafting:advanced_catalyst'
      ]
    )

    //Pendorite Compat
    event.shapeless(Item.of('byg:pendorite_ingot', 9),
      [ 
        'byg:pendorite_block'
      ]
    )

    //Broken Black Iron
    event.shapeless(Item.of('timeextraminer:broken_black_iron', 1),
      [ 
        'extendedcrafting:black_iron_ingot',
        Item.of('timeextraminer:black_iron_hammer').ignoreNBT()
      ]
    ).damageIngredient(Item.of('timeextraminer:black_iron_hammer').ignoreNBT())

    //Universe Core
    event.custom(
      {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAAAAAA",
          "ABCCDCCEA",
          "ACAAUAACA",
          "ACAFGFACA",
          "AHIGJGKLA",
          "ACAFGFACA",
          "ACAAUAACA",
          "AMCCDCCNA",
          "AAAAAAAAA"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:black_iron_slate"
          },
          "B": {
            "item": "electrodynamics:creativepowersource"
          },
          "C": {
            "item": "extendedcrafting:the_ultimate_ingot"
          },
          "D": {
            "item": "pipez:infinity_upgrade"
          },
          "E": {
            "item": "electrodynamics:creativefluidsource"
          },
          "F": {
            "item": "extendedcrafting:ultimate_singularity"
          },
          "G": {
            "item": "storagedrawers:creative_storage_upgrade"
          },
          "H": {
            "item": "timeextraminer:furingots"
          },
          "I": {
            "item": "timeextraminer:alphmium_ingot"
          },
          "J": {
            "item": "storagedrawers:creative_vending_upgrade"
          },
          "K": {
            "item": "timeextraminer:doukingots"
          },
          "L": {
            "item": "timeextraminer:benjingots"
          },
          "M": {
            "item": "create:creative_motor"
          },
          "N": {
            "item": "createaddition:creative_energy"
          },
          "U": {
            "item": "extendedcrafting:the_ultimate_block"
          }
        },
        "result": {
          "item": "timeextraminer:universal_core"
        }
      }
    )

    //Universe Reconstructor
    event.custom(
      {
        "type": "extendedcrafting:compressor",
        "powerCost": 500000,
        "inputCount": 100,
        "ingredient": {
          "item": "timeextraminer:universal_core"
        },
        "catalyst": {
          "item": "extendedcrafting:the_ultimate_catalyst"
        },
        "result": {
          "item": "timeextraminer:universal_reconstructor"
        }
      }
    )

    //Alchemical Ingot
    event.custom(
      {
        "type": "create:item_application",
        "ingredients": [
          {
            "item": "minecraft:stone"
          },
          {
            "item": "timeextraminer:alchemical_ingot"
          }
        ],
        "results": [
          {
            "item": "timeextraminer:alchemical_ore"
          }
        ]
      }
    )

    //Ultimate Machine Frame
    event.shaped(Item.of('timeextraminer:ultimate_machine_frame'), [
      'UUU',
      'UMU',
      'UUU'
    ], {
    U: 'extendedcrafting:the_ultimate_block',
    M: 'rftoolsbase:machine_frame'
    })

    //Reconstructor Universe
    event.custom(
      {
        "type": "lychee:block_interacting",
        "item_in": {
          "item": "timeextraminer:universal_reconstructor"
        },
        "block_in": "extendedcrafting:the_ultimate_block",
        "post": [
          {
            "type": "execute",
            "command": "tellraw @a [\"\",{\"text\":\"T\",\"color\":\"#780000\"},{\"text\":\"H\",\"color\":\"#780078\"},{\"text\":\"A\",\"color\":\"#000078\"},{\"text\":\"N\",\"color\":\"#3E3EB7\"},{\"text\":\"K\",\"color\":\"#3EB73E\"},{\"text\":\" Y\",\"color\":\"#007800\"},{\"text\":\"O\",\"color\":\"#B7B73E\"},{\"text\":\"U\",\"color\":\"#B73E3E\"},{\"text\":\" F\",\"color\":\"#B73EB7\"},{\"text\":\"O\",\"color\":\"#B77800\"},{\"text\":\"R\",\"color\":\"#007878\"},{\"text\":\" P\",\"color\":\"#3EB7B7\"},{\"text\":\"L\",\"color\":\"#787878\"},{\"text\":\"A\",\"color\":\"#B7B7B7\"},{\"text\":\"Y\",\"color\":\"#3E3E3E\"},{\"text\":\"I\",\"color\":\"#780000\"},{\"text\":\"N\",\"color\":\"#780078\"},{\"text\":\"G\",\"color\":\"#000078\"},{\"text\":\" S\",\"color\":\"#3EB73E\"},{\"text\":\"E\",\"color\":\"#3EB7B7\"},{\"text\":\"T\",\"color\":\"#3E3EB7\"},{\"text\":\"A\",\"color\":\"#B7B7B7\"},{\"text\":\"M\",\"color\":\"#B73EB7\"},{\"text\":\" V3\",\"color\":\"#B73E3E\"}]",
            "hide": true
          }
        ]
      }
    )

  //Black Iron Hammer
	event.custom(
		{
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "AAAAAAAAA",
			  "AAAAAAAAA",
			  "AAAAAAAAA",
			  "   BBB   ",
			  "   BBB   ",
			  "   BBB   ",
			  "   BBB   ",
			  "   BBB   ",
			  "   BBB   "
			],
			"key": {
			  "A": {
				"item": "extendedcrafting:black_iron_slate"
			  },
			  "B": {
				"item": "minecraft:stick"
			  }
			},
			"result": {
			  "item": "timeextraminer:black_iron_hammer"
			}
		}
	)

  //Time in a bottle
  event.remove({ id: 'tiab:time_in_a_bottle' })
  event.custom(
		{
			"type": "create:sequenced_assembly",
			"ingredient": {
			  "item": "minecraft:glass_bottle"
			},
			"transitionalItem": {
			  "item": "quark:bottled_cloud"
			},
			"sequence": [
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "quark:bottled_cloud"
            },
            {
              "item": "timeextraminer:hyper_cubes"
            }
          ],
          "results": [
            {
              "item": "quark:bottled_cloud"
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "quark:bottled_cloud"
            },
            {
              "item": "timeextraminer:hyper_cubes"
            }
          ],
          "results": [
            {
              "item": "quark:bottled_cloud"
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "quark:bottled_cloud"
            },
            {
              "item": "minecraft:clock"
            }
          ],
          "results": [
            {
              "item": "quark:bottled_cloud"
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "quark:bottled_cloud"
            },
            {
              "item": "minecraft:clock"
            }
          ],
          "results": [
            {
              "item": "quark:bottled_cloud"
            }
          ]
        },
				{
					"type": "create:pressing",
					"ingredients": [
					  {
						  "item": "quark:bottled_cloud"
					  }
					],
					"results": [
					  {
						  "item": "quark:bottled_cloud"
					  }
					]
				},
			],
			"results": [
			  {
				"item": "tiab:time_in_a_bottle",
				"chance": 0.7
			  }
			],
			"loops": 17
		  }
	)

  //Bedrock to Damaged Bedrock
  event.custom(
    {
      "type": "create:item_application",
      "ingredients": [
        {
          "item": "minecraft:bedrock"
        },
        {
          "item": "timeextraminer:liquid_air"
        }
      ],
      "results": [
        {
          "item": "timeextraminer:damaged_bedrock"
        }
      ]
    }
  )
  
})