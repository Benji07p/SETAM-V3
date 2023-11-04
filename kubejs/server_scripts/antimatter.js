onEvent('recipes', event => {
    
	function antimatter(itemtag, amount){
	event.custom(
        {
            "type": "custommachinery:custom_machine",
            "machine": "setamvtroismm:antimatter_generator",
            "time": 1,
            "requirements": [
                {
					"type": "custommachinery:item",
					"mode": "input",
					"item": itemtag,
					"amount": 1,
					"slot": "input"
				},
				{
					"type": "custommachinery:energy",
					"mode": "output",
					"amount": amount
				}
			]
		}
	)}

	antimatter('#forge:weak_antimatter' ,28785920)
	antimatter('#forge:puissant_antimatter' ,863632876)
})