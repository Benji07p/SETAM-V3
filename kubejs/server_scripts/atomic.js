onEvent('recipes', event => {

    function atomicAssembler(input2, amount2, input4, amount4, nbtinput5, input7, nbtinput7, amount7, output2, outamount2, nbtinput2, nbtoutput4){
        
    //Atomic Assembler Craft
	event.custom(
		{
			"type": "custommachinery:custom_machine",
			"machine": "setamvtroismm:atomic_assembler",
			"time": 12000,
			"requirements": [
				{
					"type": "custommachinery:energy_per_tick",
					"mode": "input",
					"amount": 80
				},
				{
					"type": "custommachinery:fluid",
					"fluid": "electrodynamics:fluidhydrogen",
					"amount": 5000,
					"mode": "input"
				},
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": "chemlib:hydrogen",
					"amount": 1,
					"slot": "input1"
				},
                {
					"type": "custommachinery:item",
					"mode": "input",
					"item": input2,
					"amount": amount2,
					"slot": "input2"
				},
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": "nuclearscience:celldeuterium",
					"amount": 1,
					"slot": "input3"
				},
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": input4,
					"amount": amount4,
					"slot": "input4"
				},
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": "nuclearscience:celldarkmatter",
					"amount": 1,
					"slot": "input5",
                    "nbt": nbtinput5
				},
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": "nuclearscience:cellantimattersmall",
					"amount": 1,
					"slot": "input6"
				},
                {
					"type": "custommachinery:item",
					"mode": "input",
					"item": input7,
					"amount": amount7,
					"slot": "input7",
                    "nbt": nbtinput7
				},
				{
					"type": "custommachinery:fluid",
					"mode": "output",
					"fluid": "timeextraminer:helium_3fluid",
					"amount": 5000
				},
				{
					"type": "custommachinery:item",
					"mode": "output",
					"item": "timeextraminer:dihelium",
					"amount": 1,
					"slot": "output1"
				},
				{
					"type": "custommachinery:item",
					"mode": "output",
					"item": output2,
					"amount": outamount2,
					"slot": "output2",
                    "nbt": nbtinput2
				},
				{
					"type": "custommachinery:item",
					"mode": "output",
					"item": "nuclearscience:celltritium",
					"amount": 1,
					"slot": "output3"
				},
				{
					"type": "custommachinery:item",
					"mode": "output",
					"item": "nuclearscience:celldarkmatter",
					"amount": 1,
					"slot": "output4",
                    "nbt": nbtoutput4
				}
			]
		}
	)
    }

	//Craft 1 Ruthénium
	atomicAssembler("timeextraminer:positrons", 2, "electrodynamics:ingotsilver", 5, "{Damage:0}", "electrodynamics:ingotmolybdenum", "", 5, "chemlib:gallium_ingot", 5, '{SequencedAssembly:{Progress:0.5f,Step:1,id:"create:kjs_6lxkj98pb7jwylp2upk73ri9p"}}', "{Damage:1}")
    atomicAssembler("timeextraminer:positrons", 2, "electrodynamics:ingotsilver", 5, "{Damage:1}", "electrodynamics:ingotmolybdenum", "", 5, "chemlib:gallium_ingot", 5, '{SequencedAssembly:{Progress:0.5f,Step:1,id:"create:kjs_6lxkj98pb7jwylp2upk73ri9p"}}', "{Damage:2}")
    atomicAssembler("timeextraminer:positrons", 2, "electrodynamics:ingotsilver", 5, "{Damage:2}", "electrodynamics:ingotmolybdenum", "", 5, "chemlib:gallium_ingot", 5, '{SequencedAssembly:{Progress:0.5f,Step:1,id:"create:kjs_6lxkj98pb7jwylp2upk73ri9p"}}', "{Damage:3}")
    atomicAssembler("timeextraminer:positrons", 2, "electrodynamics:ingotsilver", 5, "{Damage:3}", "electrodynamics:ingotmolybdenum", "", 5, "chemlib:gallium_ingot", 5, '{SequencedAssembly:{Progress:0.5f,Step:1,id:"create:kjs_6lxkj98pb7jwylp2upk73ri9p"}}', "{Damage:4}")

	//Craft 2 Ruthénium
	atomicAssembler("electrodynamics:ingotmolybdenum", 5, "electrodynamics:ingotsilver", 5, "{Damage:0}", "chemlib:gallium_ingot", '{SequencedAssembly:{Progress:0.5f,Step:1,id:"create:kjs_6lxkj98pb7jwylp2upk73ri9p"}}', 5, "chemlib:ruthenium", 1, "", "{Damage:1}")
    atomicAssembler("electrodynamics:ingotmolybdenum", 5, "electrodynamics:ingotsilver", 5, "{Damage:1}", "chemlib:gallium_ingot", '{SequencedAssembly:{Progress:0.5f,Step:1,id:"create:kjs_6lxkj98pb7jwylp2upk73ri9p"}}', 5, "chemlib:ruthenium", 1, "", "{Damage:2}")
    atomicAssembler("electrodynamics:ingotmolybdenum", 5, "electrodynamics:ingotsilver", 5, "{Damage:2}", "chemlib:gallium_ingot", '{SequencedAssembly:{Progress:0.5f,Step:1,id:"create:kjs_6lxkj98pb7jwylp2upk73ri9p"}}', 5, "chemlib:ruthenium", 1, "", "{Damage:3}")
    atomicAssembler("electrodynamics:ingotmolybdenum", 5, "electrodynamics:ingotsilver", 5, "{Damage:3}", "chemlib:gallium_ingot", '{SequencedAssembly:{Progress:0.5f,Step:1,id:"create:kjs_6lxkj98pb7jwylp2upk73ri9p"}}', 5, "chemlib:ruthenium", 1, "", "{Damage:4}")
	
	//Craft 1 Osmium
	atomicAssembler("timeextraminer:positrons", 2, "chemlib:tungsten_ingot", 5, "{Damage:0}", "minecraft:gold_ingot", "", 5, "chemlib:cesium_ingot", 5, '{SequencedAssembly:{Progress:0.5f,Step:1,id:"create:kjs_5shwb1gs8v32fdf4zmtxprpgw"}}', "{Damage:1}")
    atomicAssembler("timeextraminer:positrons", 2, "chemlib:tungsten_ingot", 5, "{Damage:1}", "minecraft:gold_ingot", "", 5, "chemlib:cesium_ingot", 5, '{SequencedAssembly:{Progress:0.5f,Step:1,id:"create:kjs_5shwb1gs8v32fdf4zmtxprpgw"}}', "{Damage:2}")
    atomicAssembler("timeextraminer:positrons", 2, "chemlib:tungsten_ingot", 5, "{Damage:2}", "minecraft:gold_ingot", "", 5, "chemlib:cesium_ingot", 5, '{SequencedAssembly:{Progress:0.5f,Step:1,id:"create:kjs_5shwb1gs8v32fdf4zmtxprpgw"}}', "{Damage:3}")
    atomicAssembler("timeextraminer:positrons", 2, "chemlib:tungsten_ingot", 5, "{Damage:3}", "minecraft:gold_ingot", "", 5, "chemlib:cesium_ingot", 5, '{SequencedAssembly:{Progress:0.5f,Step:1,id:"create:kjs_5shwb1gs8v32fdf4zmtxprpgw"}}', "{Damage:4}")

	//Craft 2 Osmium
	atomicAssembler("minecraft:gold_ingot", 5, "chemlib:tungsten_ingot", 5, "{Damage:0}", "chemlib:cesium_ingot", '{SequencedAssembly:{Progress:0.5f,Step:1,id:"create:kjs_5shwb1gs8v32fdf4zmtxprpgw"}}', 5, "chemlib:osmium", 36, "", "{Damage:1}")
    atomicAssembler("minecraft:gold_ingot", 5, "chemlib:tungsten_ingot", 5, "{Damage:1}", "chemlib:cesium_ingot", '{SequencedAssembly:{Progress:0.5f,Step:1,id:"create:kjs_5shwb1gs8v32fdf4zmtxprpgw"}}', 5, "chemlib:osmium", 36, "", "{Damage:2}")
    atomicAssembler("minecraft:gold_ingot", 5, "chemlib:tungsten_ingot", 5, "{Damage:2}", "chemlib:cesium_ingot", '{SequencedAssembly:{Progress:0.5f,Step:1,id:"create:kjs_5shwb1gs8v32fdf4zmtxprpgw"}}', 5, "chemlib:osmium", 36, "", "{Damage:3}")
    atomicAssembler("minecraft:gold_ingot", 5, "chemlib:tungsten_ingot", 5, "{Damage:3}", "chemlib:cesium_ingot", '{SequencedAssembly:{Progress:0.5f,Step:1,id:"create:kjs_5shwb1gs8v32fdf4zmtxprpgw"}}', 5, "chemlib:osmium", 36, "", "{Damage:4}")

	//Craft 1 Bedrock
	atomicAssembler("timeextraminer:positrons", 2, "chemlib:oganesson", 3, "{Damage:0}", "timeextraminer:mixing_silicon", "", 36,"timeextraminer:damaged_bedrock", 1, '{SequencedAssembly:{Progress:0.33333334f,Step:1,id:"create:kjs_crh2qbsnnxcckvvljcd45f3jq"}}', "{Damage:1}")
    atomicAssembler("timeextraminer:positrons", 2, "chemlib:oganesson", 3, "{Damage:1}", "timeextraminer:mixing_silicon", "", 36,"timeextraminer:damaged_bedrock", 1, '{SequencedAssembly:{Progress:0.33333334f,Step:1,id:"create:kjs_crh2qbsnnxcckvvljcd45f3jq"}}', "{Damage:2}")
    atomicAssembler("timeextraminer:positrons", 2, "chemlib:oganesson", 3, "{Damage:2}", "timeextraminer:mixing_silicon", "", 36,"timeextraminer:damaged_bedrock", 1, '{SequencedAssembly:{Progress:0.33333334f,Step:1,id:"create:kjs_crh2qbsnnxcckvvljcd45f3jq"}}', "{Damage:3}")
    atomicAssembler("timeextraminer:positrons", 2, "chemlib:oganesson", 3, "{Damage:3}", "timeextraminer:mixing_silicon", "", 36,"timeextraminer:damaged_bedrock", 1, '{SequencedAssembly:{Progress:0.33333334f,Step:1,id:"create:kjs_crh2qbsnnxcckvvljcd45f3jq"}}', "{Damage:4}")

	//Craft 2 Bedrock
	atomicAssembler("timeextraminer:positrons", 2, "chemlib:osmium", 36, "{Damage:0}", "timeextraminer:damaged_bedrock", '{SequencedAssembly:{Progress:0.33333334f,Step:1,id:"create:kjs_crh2qbsnnxcckvvljcd45f3jq"}}', 1,"timeextraminer:damaged_bedrock", 1, '{SequencedAssembly:{Progress:0.6666667f,Step:2,id:"create:kjs_crh2qbsnnxcckvvljcd45f3jq"}}', "{Damage:1}")
    atomicAssembler("timeextraminer:positrons", 2, "chemlib:osmium", 36, "{Damage:1}", "timeextraminer:damaged_bedrock", '{SequencedAssembly:{Progress:0.33333334f,Step:1,id:"create:kjs_crh2qbsnnxcckvvljcd45f3jq"}}', 1,"timeextraminer:damaged_bedrock", 1, '{SequencedAssembly:{Progress:0.6666667f,Step:2,id:"create:kjs_crh2qbsnnxcckvvljcd45f3jq"}}', "{Damage:2}")
    atomicAssembler("timeextraminer:positrons", 2, "chemlib:osmium", 36, "{Damage:2}", "timeextraminer:damaged_bedrock", '{SequencedAssembly:{Progress:0.33333334f,Step:1,id:"create:kjs_crh2qbsnnxcckvvljcd45f3jq"}}', 1,"timeextraminer:damaged_bedrock", 1, '{SequencedAssembly:{Progress:0.6666667f,Step:2,id:"create:kjs_crh2qbsnnxcckvvljcd45f3jq"}}', "{Damage:3}")
    atomicAssembler("timeextraminer:positrons", 2, "chemlib:osmium", 36, "{Damage:3}", "timeextraminer:damaged_bedrock", '{SequencedAssembly:{Progress:0.33333334f,Step:1,id:"create:kjs_crh2qbsnnxcckvvljcd45f3jq"}}', 1,"timeextraminer:damaged_bedrock", 1, '{SequencedAssembly:{Progress:0.6666667f,Step:2,id:"create:kjs_crh2qbsnnxcckvvljcd45f3jq"}}', "{Damage:4}")
	
	//Craft Finale Bedrock
    atomicAssembler("timeextraminer:positrons", 2, "chemlib:ruthenium_metal_block", 9, "{Damage:0}", "timeextraminer:damaged_bedrock", '{SequencedAssembly:{Progress:0.6666667f,Step:2,id:"create:kjs_crh2qbsnnxcckvvljcd45f3jq"}}', 1,"minecraft:bedrock", 1, "", "{Damage:1}")
    atomicAssembler("timeextraminer:positrons", 2, "chemlib:ruthenium_metal_block", 9, "{Damage:1}", "timeextraminer:damaged_bedrock", '{SequencedAssembly:{Progress:0.6666667f,Step:2,id:"create:kjs_crh2qbsnnxcckvvljcd45f3jq"}}', 1,"minecraft:bedrock", 1, "", "{Damage:2}")
    atomicAssembler("timeextraminer:positrons", 2, "chemlib:ruthenium_metal_block", 9, "{Damage:2}", "timeextraminer:damaged_bedrock", '{SequencedAssembly:{Progress:0.6666667f,Step:2,id:"create:kjs_crh2qbsnnxcckvvljcd45f3jq"}}', 1,"minecraft:bedrock", 1, "", "{Damage:3}")
    atomicAssembler("timeextraminer:positrons", 2, "chemlib:ruthenium_metal_block", 9, "{Damage:3}", "timeextraminer:damaged_bedrock", '{SequencedAssembly:{Progress:0.6666667f,Step:2,id:"create:kjs_crh2qbsnnxcckvvljcd45f3jq"}}', 1,"minecraft:bedrock", 1, "", "{Damage:4}")


		//Sequenced Assembly
		event.custom(
			{
				"type": "create:sequenced_assembly",
				"ingredient": {
				  "item": "minecraft:bedrock"
				},
				"transitionalItem": {
				  "item": "timeextraminer:damaged_bedrock"
				},
				"sequence": [
				  {
					"type": "create:pressing",
					"ingredients": [
					  {
						"item": "timeextraminer:damaged_bedrock"
					  }
					],
					"results": [
					  {
						"item": "timeextraminer:damaged_bedrock"
					  }
					]
				  }
				],
				"results": [
				  {
					"item": "minecraft:bedrock",
					"chance": 1.0
				  }
				],
				"loops": 3
			  }
		)
		event.custom(
			{
				"type": "create:sequenced_assembly",
				"ingredient": {
				  "item": "chemlib:ruthenium_ingot"
				},
				"transitionalItem": {
				  "item": "chemlib:gallium_ingot"
				},
				"sequence": [
				  {
					"type": "create:pressing",
					"ingredients": [
					  {
						"item": "chemlib:gallium_ingot"
					  }
					],
					"results": [
					  {
						"item": "chemlib:gallium_ingot"
					  }
					]
				  }
				],
				"results": [
				  {
					"item": "chemlib:ruthenium_ingot",
					"chance": 1.0
				  }
				],
				"loops": 2
			  }
		)
		event.custom(
			{
				"type": "create:sequenced_assembly",
				"ingredient": {
				  "item": "chemlib:osmium_ingot"
				},
				"transitionalItem": {
				  "item": "chemlib:cesium_ingot"
				},
				"sequence": [
				  {
					"type": "create:pressing",
					"ingredients": [
					  {
						"item": "chemlib:cesium_ingot"
					  }
					],
					"results": [
					  {
						"item": "chemlib:cesium_ingot"
					  }
					]
				  }
				],
				"results": [
				  {
					"item": "chemlib:osmium_ingot",
					"chance": 1.0
				  }
				],
				"loops": 2
			  }
		)
})