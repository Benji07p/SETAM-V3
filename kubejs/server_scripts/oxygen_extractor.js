onEvent('recipes', event => {
  
    function oxygenLoader(dimension ,output){

    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "setamvtroismm:oxygen_extractor",
            "time": 1,
            "requirements": [
                {
					"type": "custommachinery:item",
					"mode": "input",
					"item": "minecraft:glass_bottle",
					"amount": 1,
					"slot": "input"
				},
                {
					"type": "custommachinery:item",
					"mode": "input",
					"item": "minecraft:slime_ball",
					"amount": 1,
					"slot": "input1"
				},
                {
                    "type": "custommachinery:dimension",
                    "filter": dimension
                },
                {
					"type": "custommachinery:item",
					"mode": "output",
					"item": output,
					"amount": 1,
					"slot": "output"
				}
			]
		}
	)}

    oxygenLoader("minecraft:overworld" ,"timeextraminer:air_gas")
    oxygenLoader("minecraft:the_nether" ,"timeextraminer:nether_gas")
    oxygenLoader("minecraft:the_end" ,"timeextraminer:void_gas")
    oxygenLoader("beyond_earth:moon" ,"timeextraminer:helium_3")
    oxygenLoader("beyond_earth:mars" ,"nuclearscience:celldeuterium")

})