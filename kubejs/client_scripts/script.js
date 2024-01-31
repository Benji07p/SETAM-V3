// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

onEvent('jei.information', event=> {
	event.add('timeextraminer:universal_reconstructor', ['May reconstructing the universe', 'May destroying it', 'Maybe not'])
})

onEvent('item.tooltip', tooltip => {
	tooltip.add('timeextraminer:universal_reconstructor', ['May reconstructing the universe', 'Maybe not'])
	tooltip.add('extendedcrafting:ultimate_singularity', ['Not consumed in alchemical ingot duplication'])
	tooltip.add('timeextraminer:furingots', ['The Owner'])
	tooltip.add('timeextraminer:benjingots', ['The Developper'])
	tooltip.add('timeextraminer:alphmium_ingot', ['The Leader'])
	tooltip.add('timeextraminer:doukingots', ['The Builder'])
})

//Tooltips ChemLib
onEvent('item.tooltip', tooltip => {

	function chemLib(name, text1, text2) {
		tooltip.addAdvanced(['#forge:ingots/' + name, '#forge:nuggets/' + name, '#forge:dusts/' + name, '#forge:plates/' + name, '#forge:storage_blocks/' + name], (item, advanced, text) => {
			text.add(1, Text.of('§3' + text1))
			text.add(2, Text.of('§7' + text2))
		})
	}
	//chemLib('uranium', 'U (92)', 'Actinides')
	chemLib('iron', 'Fe (26)', 'Transition Metals')
	chemLib('gold', 'Au (79)', 'Transition Metals')
	chemLib('copper', 'Cu (29)', 'Transition Metals')
	chemLib('sulfur', 'S (16)', 'Reactive Non-Metals')
	//chemLib('cobalt', 'Co (27)', 'Transition Metals')

	tooltip.addAdvanced(['electrodynamics:ingotlead', 'electrodynamics:dustlead', 'electrodynamics:resourceblocklead', 'electrodynamics:platelead'], (item, advanced, text) => {
		text.add(1, Text.of('§3Pb (82)'))
		text.add(2, Text.of('§7Post-Transition Metals'))
	})

	tooltip.addAdvanced(['electrodynamics:ingotsilver', 'electrodynamics:dustsilver', 'electrodynamics:resourceblocksilver', 'electrodynamics:nuggetsilver'], (item, advanced, text) => {
		text.add(1, Text.of('§3Ag (47)'))
		text.add(2, Text.of('§7Transition Metals'))
	})

	tooltip.addAdvanced(['electrodynamics:resourceblockaluminum', 'electrodynamics:ingotaluminum', 'electrodynamics:platealuminum'], (item, advanced, text) => {
		text.add(1, Text.of('§3Al (13)'))
		text.add(2, Text.of('§7Post-Transition Metals'))
	})

	tooltip.addAdvanced(['electrodynamics:dustlithium', 'electrodynamics:platelithium', 'electrodynamics:ingotlithium'], (item, advanced, text) => {
		text.add(1, Text.of('§3Li (3)'))
		text.add(2, Text.of('§7Alkali Metals'))
	})

	tooltip.addAdvanced(['#forge:ingots/titanium', '#forge:storage_blocks/titanium', '#forge:plates/titanium'], (item, advanced, text) => {
		text.add(1, Text.of('§3Ti (22)'))
		text.add(2, Text.of('§7Transition Metals'))
	})

	tooltip.addAdvanced(['electrodynamics:ingotchromium', 'electrodynamics:resourceblockchromium'], (item, advanced, text) => {
		text.add(1, Text.of('§3Cr (24)'))
		text.add(2, Text.of('§7Transition Metals'))
	})

	tooltip.addAdvanced(['electrodynamics:ingotmolybdenum', 'electrodynamics:dustmolybdenum'], (item, advanced, text) => {
		text.add(1, Text.of('§3Mo (42)'))
		text.add(2, Text.of('§7Transition Metals'))
	})

	tooltip.addAdvanced(['electrodynamics:dustvanadium', 'electrodynamics:ingotvanadium'], (item, advanced, text) => {
		text.add(1, Text.of('§3V (23)'))
		text.add(2, Text.of('§7Transition Metals'))
	})

	tooltip.addAdvanced(['#forge:ingots/tin', '#forge:nuggets/tin', '#forge:dusts/tin', '#forge:storage_blocks/tin'], (item, advanced, text) => {
		text.add(1, Text.of('§3Sn (50)'))
		text.add(2, Text.of('§7Post-Transition Metals'))
	})

	tooltip.addAdvanced(['#forge:ingots/cobalt', '#forge:nuggets/cobalt', '#forge:storage_blocks/cobalt'], (item, advanced, text) => {
		text.add(1, Text.of('§3Co (27)'))
		text.add(2, Text.of('§7Transition Metals'))
	})

	tooltip.addAdvanced(['create:zinc_ingot', 'create:zinc_nugget', 'createaddition:zinc_sheet', 'create:zinc_block'], (item, advanced, text) => {
		text.add(1, Text.of('§3Zn (30)'))
		text.add(2, Text.of('§7Transition Metals'))
	})

	tooltip.addAdvanced(['nuclearscience:thorianitedust'], (item, advanced, text) => {
		text.add(1, Text.of('§3Th (90)'))
		text.add(2, Text.of('§7Actinides'))
	})
})