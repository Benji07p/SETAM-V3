onEvent('recipes', event => {

    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "setamvtroismm:plasma_gen",
            "time": 1,
            "requirements": [
                {
					"type": "custommachinery:energy_per_tick",
					"mode": "input",
					"amount": 100
				},
				{
					"type": "custommachinery:redstone",
					"power": "15"
				},
                {
					"type": "custommachinery:command",
					"command": "/summon electrodynamics:energyblast",
					"permission": 4,
					"phase": "crafting_tickable"
				}
			]
		}
	)

})