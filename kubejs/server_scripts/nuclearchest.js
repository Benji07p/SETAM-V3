onEvent('recipes', event => {
    
	function nuclearChest(tick, input, output, chance){
	event.custom(
        {
			"type": "custommachinery:custom_machine",
			"machine": "setamvtroismm:nuclear_chest",
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

    nuclearChest(7920000, 'timeextraminer:berkelium_249', 'timeextraminer:californium_249')
	nuclearChest(4800, 'timeextraminer:plutonium_243', 'timeextraminer:americium_243')
	nuclearChest(12000, 'timeextraminer:americium_244', 'timeextraminer:curium_244')
	nuclearChest(1200, 'timeextraminer:curium_249', 'timeextraminer:berkelium_249')
	nuclearChest(53568000, 'nuclearscience:celltritium', 'timeextraminer:helium_3')

	event.custom(
        {
			"type": "custommachinery:custom_machine",
			"machine": "setamvtroismm:nuclear_chest",
			"time": 1,
			"requirements": [
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": 'timeextraminer:dihelium',
					"amount": 1
				},
                {
					"type": "custommachinery:item",
					"mode": "output",
					"item": 'chemlib:hydrogen',
					"chance": 0.9,
					"amount": 1
				},
				{
					"type": "custommachinery:item",
					"mode": "output",
					"item": 'nuclearscience:celldeuterium',
					"chance": 0.05,
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
})

//execute as @a[distance=..16,nbt=!{Inventory:[{id:'nuclearscience:reinforcedhazmathelmet'}]},nbt=!{Inventory:[{id:'nuclearscience:reinforcedhazmatplate'}]},nbt=!{Inventory:[{id:'nuclearscience:reinforcedhazmatlegs'}]},nbt=!{Inventory:[{id:'nuclearscience:reinforcedhazmatboots'}]},tag=!hasEffect] run execute as @s run effect give @s nuclearscience:radiation 1380 10 true