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
})