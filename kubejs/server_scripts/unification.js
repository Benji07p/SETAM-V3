onEvent('recipes', event => {
	// Unification des craft
	event.remove({ id: 'tconstruct:common/materials/copper_ingot_from_nuggets' })
	event.remove({ id: 'tconstruct:common/materials/copper_nugget_from_ingot' })
	event.remove({ id: 'create:crafting/materials/copper_nugget' })
	event.remove({ id: 'beyond_earth:steel_block' })
	event.remove({ id: 'beyond_earth:steel_ingot' })
	event.remove({ id: 'beyond_earth:steel_ingot_from_nugget' })
	event.remove({ id: 'beyond_earth:steel_nugget_from_ingot' })
	event.remove({ id: 'beyond_earth:steel_ingot_blasting' })
	event.remove({ id: 'beyond_earth_giselle_addon:blasting/steel_ingot_from_compresseds' })
	event.remove({ id: 'beyond_earth_giselle_addon:smelting/steel_ingot_from_compresseds' })
	event.remove({ id: 'car:iron_stick'})
	event.remove({ id: 'alchemistry:copper_ingot_from_blasting_copper_dust'})
	event.remove({ id: 'alchemistry:copper_ingot_from_smelting_copper_dust'})
	event.remove({ id: 'alchemistry:iron_ingot_from_smelting_iron_dust'})
	event.remove({ id: 'alchemistry:iron_ingot_from_blasting_iron_dust'})
	event.remove({ id: 'alchemistry:gold_ingot_from_smelting_gold_dust'})
	event.remove({ id: 'alchemistry:gold_ingot_from_blasting_gold_dust'})
	event.remove({ id: 'chemlib:tin_ingot_from_blasting_tin_dust'})
	event.remove({ id: 'chemlib:tin_ingot_from_smelting_tin_dust'})
	event.remove({ id: 'chemlib:lead_ingot_from_blasting_lead_dust'})
	event.remove({ id: 'chemlib:lead_ingot_from_smelting_lead_dust'})
	event.remove({ id: 'chemlib:silver_ingot_from_smelting_silver_dust'})
	event.remove({ id: 'chemlib:silver_ingot_from_blasting_silver_dust'})
	event.remove({ id: 'chemlib:aluminum_ingot_from_smelting_aluminum_dust'})
	event.remove({ id: 'chemlib:aluminum_ingot_from_blasting_aluminum_dust'})
	event.remove({ id: 'chemlib:nickel_ingot_from_smelting_nickel_dust'})
	event.remove({ id: 'chemlib:nickel_ingot_from_blasting_nickel_dust'})
	event.remove({ id: 'chemlib:molybdenum_ingot_from_smelting_molybdenum_dust'})
	event.remove({ id: 'chemlib:molybdenum_ingot_from_blasting_molybdenum_dust'})
	event.remove({ id: 'chemlib:lithium_ingot_from_smelting_lithium_dust'})
	event.remove({ id: 'chemlib:lithium_ingot_from_blasting_lithium_dust'})
	event.remove({ id: 'chemlib:vanadium_ingot_from_smelting_vanadium_dust'})
	event.remove({ id: 'chemlib:vanadium_ingot_from_blasting_vanadium_dust'})
	event.remove({ id: 'chemlib:thorium_ingot_from_smelting_thorium_dust'})
	event.remove({ id: 'chemlib:thorium_ingot_from_blasting_thorium_dust'})
	event.remove({ id: 'chemlib:tin_ingot_to_nugget'})
	event.remove({ id: 'chemlib:tin_nugget_to_ingot'})
	event.remove({ id: 'chemlib:tin_block_to_ingot'})
	event.remove({ id: 'chemlib:tin_ingot_to_block'})
	event.remove({ id: 'chemlib:lead_ingot_to_block'})
	event.remove({ id: 'chemlib:lead_block_to_ingot'})
	event.remove({ id: 'chemlib:lead_ingot_to_nugget'})
	event.remove({ id: 'chemlib:lead_nugget_to_ingot'})
	event.remove({ id: 'chemlib:silver_ingot_to_block'})
	event.remove({ id: 'chemlib:silver_block_to_ingot'})
	event.remove({ id: 'chemlib:silver_nugget_to_ingot'})
	event.remove({ id: 'chemlib:silver_ingot_to_nugget'})
	event.remove({ id: 'chemlib:aluminum_ingot_to_nugget'})
	event.remove({ id: 'chemlib:aluminum_nugget_to_ingot'})
	event.remove({ id: 'chemlib:aluminum_ingot_to_block'})
	event.remove({ id: 'chemlib:aluminum_block_to_ingot'})
	event.remove({ id: 'chemlib:nickel_ingot_to_nugget'})
	event.remove({ id: 'chemlib:nickel_nugget_to_ingot'})
	event.remove({ id: 'chemlib:nickel_ingot_to_block'})
	event.remove({ id: 'chemlib:nickel_block_to_ingot'})
	event.remove({ id: 'chemlib:zinc_nugget_to_ingot'})
	event.remove({ id: 'chemlib:zinc_ingot_to_nugget'})
	event.remove({ id: 'chemlib:zinc_ingot_to_block'})
	event.remove({ id: 'chemlib:zinc_block_to_ingot'})
	event.remove({ id: 'chemlib:cobalt_ingot_to_nugget'})
	event.remove({ id: 'chemlib:cobalt_nugget_to_ingot'})
	event.remove({ id: 'chemlib:cobalt_ingot_to_block'})
	event.remove({ id: 'chemlib:cobalt_block_to_ingot'})
	event.remove({ id: 'chemlib:titanium_ingot_to_block'})
	event.remove({ id: 'chemlib:titanium_block_to_ingot'})
	event.remove({ id: 'chemlib:chromium_ingot_to_block'})
	event.remove({ id: 'chemlib:chromium_block_to_ingot'})
})

onEvent('item.tags', event => {
	// Ajout de Tags
	event.get('forge:wires/copper').add('electrodynamics:wirecopper')
	event.get('forge:wires').add('electrodynamics:wireiron')
	event.get('forge:wires/all_metal').add('electrodynamics:wireiron')
	event.get('forge:wires/iron').add('electrodynamics:wireiron')
	event.get('forge:wires').add('electrodynamics:wiregold')
	event.get('forge:wires/all_metal').add('electrodynamics:wiregold')
	event.get('forge:wires/gold').add('electrodynamics:wiregold')

	// Retiré les Tags
	//Cuivre
	event.get('forge:nuggets/copper').remove(['tconstruct:copper_nugget', 'create:copper_nugget'])
	event.get('forge:dusts/copper').remove('chemlib:copper_dust')
	event.get('forge:wires/copper').remove('createaddition:copper_wire')
	event.get('forge:plates/copper').remove('chemlib:copper_plate')
	event.get('forge:nuggets').remove('create:copper_nugget')

	//Tin
	event.get('forge:nuggets/tin').remove('chemlib:tin_nugget')
	event.get('forge:ingots/tin').remove('chemlib:tin_ingot')
	event.get('forge:dusts/tin').remove('chemlib:tin_dust')
	event.get('forge:storage_blocks/tin').remove('chemlib:tin_metal_block')

	//Aluminium
	event.get('forge:plates/aluminum').remove('chemlib:aluminum_plate')
	event.get('forge:storage_blocks/aluminum').remove('chemlib:aluminum_metal_block')
	event.get('forge:ingots/aluminum').remove('chemlib:aluminum_ingot')

	//Lead
	event.get('forge:storage_blocks/lead').remove('chemlib:lead_metal_block')
	event.get('forge:dusts/lead').remove('chemlib:lead_dust')
	event.get('forge:plates/lead').remove('chemlib:lead_plate')
	event.get('forge:ingots/lead').remove('chemlib:lead_ingot')

	//Silver
	event.get('forge:ingots/silver').remove('chemlib:silver_ingot')
	event.get('forge:nuggets/silver').remove('chemlib:silver_nugget')
	event.get('forge:dusts/silver').remove('chemlib:silver_dust')
	event.get('forge:storage_blocks/silver').remove('chemlib:silver_metal_block')

	//Steel
	event.get('forge:nuggets/steel').remove('beyond_earth:steel_nugget')
	event.get('forge:ingots/steel').remove('beyond_earth:steel_ingot')
	event.get('forge:storage_blocks/steel').remove('beyond_earth:steel_block')

	//Zinc
	event.get('forge:ingots/zinc').remove('chemlib:zinc_ingot')
	event.get('forge:storage_blocks/zinc').remove('chemlib:zinc_metal_block')
	event.get('forge:nuggets/zinc').remove('chemlib:zinc_nugget')
	event.get('forge:plates/zinc').remove('chemlib:zinc_plate')

	//Cobalt
	event.get('forge:nuggets/cobalt').remove('chemlib:cobalt_nugget')
	event.get('forge:storage_blocks/cobalt').remove('chemlib:cobalt_metal_block')
	event.get('forge:ingots/cobalt').remove('chemlib:cobalt_ingot')
	
	//Fer
	event.get('forge:plates/iron').remove('chemlib:iron_plate')
	event.get('forge:dusts/iron').remove('chemlib:iron_dust')
	event.get('forge:rods/iron').remove(['createaddition:iron_rod', 'car:iron_stick'])
	event.get('forge:rods').remove('createaddition:iron_rod')
	event.get('forge:rods/all_metal').remove('createaddition:iron_rod')
	event.get('forge:wires').remove('createaddition:iron_wire')
	event.get('forge:wires/all_metal').remove('createaddition:iron_wire')
	event.get('forge:wires/iron').remove('createaddition:iron_wire')

	//Or
	event.get('forge:plates/gold').remove('chemlib:gold_plate')
	event.get('forge:dusts/gold').remove('chemlib:gold_dust')
	event.get('forge:wires').remove('createaddition:gold_wire')
	event.get('forge:wires/all_metal').remove('createaddition:gold_wire')
	event.get('forge:wires/gold').remove('createaddition:gold_wire')

	//Sulfur
	event.get('forge:dusts/sulfur').remove('chemlib:sulfur_dust')

	//Molybdène
	event.get('forge:ingots/molybdenum').remove('chemlib:molybdenum_ingot')
	event.get('forge:dusts/molybdenum').remove('chemlib:molybdenum_dust')
	
	//Lithium
	event.get('forge:plates/lithium').remove('chemlib:lithium_plate')
	event.get('forge:dusts/lithium').remove('chemlib:lithium_dust')
	event.get('forge:ingots/lithium').remove('chemlib:lithium_ingot')

	//Vanadium
	event.get('forge:ingots/vanadium').remove('chemlib:vanadium_ingot')
	event.get('forge:dusts/vanadium').remove('chemlib:vanadium_dust')

	//Titanium
	event.get('forge:ingots/titanium').remove('chemlib:titanium_ingot')
	event.get('forge:plates/titanium').remove('chemlib:titanium_plate')
	event.get('forge:storage_blocks/titanium').remove('chemlib:titanium_metal_block')

	//Chromium
	event.get('forge:ingots/chromium').remove('chemlib:chromium_ingot')
	event.get('forge:storage_blocks/chromium').remove('chemlib:chromium_metal_block')

	//Thorium
	event.get('forge:dusts/thorium').remove('chemlib:thorium_dust')
})

onEvent('fluid.tags', event => {
	// Ethanol
	event.get('forge:ethanol').remove(['electrodynamics:fluidethanol', 'createaddition:flowing_bioethanol', 'createaddition:bioethanol'])
	event.get('forge:ethanol').add(['chemlib:ethanol_fluid', 'chemlib:ethanol_flowing'])

	// Oxygen
	event.get('forge:oxygen').remove('electrodynamics:fluidoxygen')
	event.get('forge:oxygen').add(['chemlib:oxygen_fluid', 'chemlib:oxygen_flowing'])

	// Hydrogen
	event.get('forge:hydrogen').remove('electrodynamics:fluidhydrogen')
	event.get('forge:hydrogen').add(['chemlib:hydrogen_fluid', 'chemlib:hydrogen_flowing'])

	// Sulfuric Acid
	event.get('forge:sulfuric_acid').remove('electrodynamics:fluidsulfuricacid')
	event.get('forge:sulfuric_acid').add(['chemlib:sulfuric_acid_fluid', 'chemlib:sulfuric_acid_flowing'])

	// Ammonia
	event.get('forge:ammonia').remove('nuclearscience:fluidammonia')
	event.get('forge:ammonia').add(['chemlib:ammonia_fluid', 'chemlib:ammonia_flowing'])

	// Copper Sulfate
	event.get('forge:copper_sulfate').remove('electrodynamics:fluidsulfatecopper')
	event.get('forge:copper_sulfate').add(['timeextraminer:copper_sulfate', 'timeextraminer:flowing_copper_sulfate'])

	// Gold Sulfate
	event.get('forge:gold_sulfate').remove('electrodynamics:fluidsulfategold')
	event.get('forge:gold_sulfate').add(['timeextraminer:gold_sulfate', 'timeextraminer:flowing_gold_sulfate'])

	// Silver Sulfate
	event.get('forge:silver_sulfate').remove('electrodynamics:fluidsulfatesilver')
	event.get('forge:silver_sulfate').add(['timeextraminer:silver_sulfate', 'timeextraminer:flowing_silver_sulfate'])

	// Tin Sulfate
	event.get('forge:tin_sulfate').remove('electrodynamics:fluidsulfatetin')
	event.get('forge:tin_sulfate').add(['timeextraminer:tin_sulfate', 'timeextraminer:flowing_tin_sulfate'])

	// Vanadium Sulfate
	event.get('forge:vanadium_sulfate').remove('electrodynamics:fluidsulfatevanadium')
	event.get('forge:vanadium_sulfate').add(['timeextraminer:vanadium_sulfate', 'timeextraminer:flowing_vanadium_sulfate'])

	// Lithium Sulfate
	event.get('forge:lithium_sulfate').remove('electrodynamics:fluidsulfatelithium')
	event.get('forge:lithium_sulfate').add(['timeextraminer:lithium_sulfate', 'timeextraminer:flowing_lithium_sulfate'])

	// Molybdenum Sulfate
	event.get('forge:molybdenum_sulfate').remove('electrodynamics:fluidsulfatemolybdenum')
	event.get('forge:molybdenum_sulfate').add(['timeextraminer:molybdenum_sulfate', 'timeextraminer:flowing_molybdenum_sulfate'])

	// Carbyne Sulfate
	event.get('forge:netherite_sulfate').remove('electrodynamics:fluidsulfatenetherite')
	event.get('forge:netherite_sulfate').add(['timeextraminer:carbyne_sulfate', 'timeextraminer:flowing_carbyne_sulfate'])

	// Lead Sulfate
	event.get('forge:lead_sulfate').remove('electrodynamics:fluidsulfatelead')
	event.get('forge:lead_sulfate').add(['timeextraminer:lead_sulfate', 'timeextraminer:flowing_lead_sulfate'])

	// Iron Sulfate
	event.get('forge:iron_sulfate').remove('electrodynamics:fluidsulfateiron')
	event.get('forge:iron_sulfate').add(['timeextraminer:iron_sulfate', 'timeextraminer:flowing_iron_sulfate'])

	// Hydraulic Fluid
	event.get('forge:hydraulic_fluid').remove('electrodynamics:fluidhydraulic')
	event.get('forge:hydraulic_fluid').add(['timeextraminer:hydraulic_fluid', 'timeextraminer:flowing_hydraulic_fluid'])
})