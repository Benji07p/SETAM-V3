onEvent('recipes', event => {
    
	function advancedNuclearChest(tick, input, output, chance){
	event.custom(
        {
			"type": "custommachinery:custom_machine",
			"machine": "setamvtroismm:advanced_nuclear_chest",
			"time": tick,
			"requirements": [
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": input,
					"amount": 1
				},
                {
					"type": "custommachinery:item",
					"mode": "output",
					"item": output,
					"amount": 1
				},
                {
                    "type": "custommachinery:command",
                    "phase": "crafting_tickable",
                    "permission": 2,
                    "command": "/execute as @a[distance=..16,nbt=!{Inventory:[{id:'nuclearscience:reinforcedhazmathelmet'}]},nbt=!{Inventory:[{id:'nuclearscience:reinforcedhazmatplate'}]},nbt=!{Inventory:[{id:'nuclearscience:reinforcedhazmatlegs'}]},nbt=!{Inventory:[{id:'nuclearscience:reinforcedhazmatboots'}]},tag=!hasEffect] at @s run effect give @s nuclearscience:radiation 1380 10 true"
                }
            ]
        })
    }

    advancedNuclearChest(63118, 'timeextraminer:berkelium_249', 'timeextraminer:californium_249')
	advancedNuclearChest(70, 'timeextraminer:plutonium_243', 'timeextraminer:americium_243')
	advancedNuclearChest(173, 'timeextraminer:americium_244', 'timeextraminer:curium_244')
	advancedNuclearChest(17, 'timeextraminer:curium_249', 'timeextraminer:berkelium_249')
	advancedNuclearChest(776348, 'nuclearscience:celltritium', 'timeextraminer:helium_3')

})