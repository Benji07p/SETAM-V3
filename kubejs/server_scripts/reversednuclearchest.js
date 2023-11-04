onEvent('recipes', event => {
    
	function reverseNuclearChest(input, output, chance){
	event.custom(
        {
			"type": "custommachinery:custom_machine",
			"machine": "setamvtroismm:reversed_nuclear_chest",
			"time": 1,
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

    reverseNuclearChest('chemlib:titanium', 'timeextraminer:calcium_48')
	reverseNuclearChest('timeextraminer:helium_3', 'nuclearscience:celltritium')

})