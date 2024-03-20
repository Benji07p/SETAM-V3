onEvent('recipes', event => {
  
    function enderCrafter(item1 ,item2 ,output, nbout){

    event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "setamvtroismm:auto_ender_crafting",
            "time": 1,
            "requirements": [
                {
					"type": "custommachinery:energy_per_tick",
					"mode": "input",
					"amount": 100
				},
                {
					"type": "custommachinery:item",
					"mode": "input",
					"item": item1,
					"amount": 1,
					"slot": "input"
				},
                {
					"type": "custommachinery:item",
					"mode": "input",
					"item": item2,
					"amount": 1,
					"slot": "input1"
				},
                {
					"type": "custommachinery:item",
					"mode": "input",
					"item": item2,
					"amount": 1,
					"slot": "input2"
				},
                {
					"type": "custommachinery:item",
					"mode": "input",
					"item": item2,
					"amount": 1,
					"slot": "input3"
				},
                {
					"type": "custommachinery:item",
					"mode": "input",
					"item": item2,
					"amount": 1,
					"slot": "input4"
				},
                {
					"type": "custommachinery:item",
					"mode": "output",
					"item": output,
					"amount": nbout,
					"slot": "output"
				}
			]
		}
	)}

    enderCrafter("minecraft:nether_star" ,"minecraft:ender_eye" ,"extendedcrafting:ender_star" ,1)
    enderCrafter("extendedcrafting:ender_star" ,"minecraft:diamond_block" ,"quark:diamond_heart" ,4)
    enderCrafter("extendedcrafting:ender_star" ,"extendedcrafting:ender_ingot" ,"extendedcrafting:enhanced_ender_ingot" ,4)

})