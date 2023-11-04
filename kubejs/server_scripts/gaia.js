onEvent('recipes', event => {

    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "setamvtroismm:gaia_farmer",
            "time": 10,
            "requirements": [
                {
					"type": "custommachinery:energy_per_tick",
					"mode": "input",
					"amount": 10
				},
                {
					"type": "custommachinery:item",
					"mode": "input",
					"item": "botania:gaia_ingot",
					"amount": 1,
					"slot": "input"
				},
                {
					"type": "custommachinery:item_transform",
					"input": "rftoolsutility:syringe",
					"input_slot": "input1",
                    "output": "input1",
                    "input_nbt": "{mobId:\"botania:doppleganger\"}"
                },
                {
					"type": "custommachinery:item",
					"mode": "output",
					"item": "botania:life_essence",
					"amount": 8,
					"slot": "output"
				}
			]
		}
	)

})