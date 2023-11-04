onEvent('recipes', event => {
    
    function fondu(tag, sortie, amount, temperature, time){
    
    event.custom({
    "type": "tconstruct:melting",
    "ingredient": {
      "tag": tag
    },
    "result": {
      "fluid": sortie,
      "amount": amount
    },
    "temperature": temperature,
    "time": time
  })

}

function refroidi(tagcast, fluid, amount2, result, time2){
    event.custom(
        {
            "type": "tconstruct:casting_table",
            "cast": {
              "tag": tagcast
            },
            "fluid": {
              "tag": fluid,
              "amount": amount2
            },
            "result": {
              "tag": result
            },
            "cooling_time": time2
          }
    )
}

//Fonte du bismuth
fondu("forge:plates/bismuth", "tconstruct:molten_signalum", 90, 271, 39)
fondu("forge:ingots/bismuth", "tconstruct:molten_signalum", 90, 271, 39)
fondu("forge:nuggets/bismuth", "tconstruct:molten_signalum", 10, 271, 13)
fondu("forge:dusts/bismuth", "tconstruct:molten_signalum", 90, 271, 29)

//Fonte du Newton's Ingots
fondu("forge:ingots/hafnium", "tconstruct:molten_refined_obsidian", 90, 98, 39)
fondu("forge:plates/hafnium", "tconstruct:molten_refined_obsidian", 90, 98, 39)
fondu("forge:nuggets/hafnium", "tconstruct:molten_refined_obsidian", 10, 98, 13)
fondu("forge:dusts/hafnium", "tconstruct:molten_refined_obsidian", 90, 98, 29)

//Refroidissement du bismuth
refroidi("tconstruct:casts/multi_use/ingot", "tconstruct:molten_signalum", 90, "forge:ingots/bismuth", 39)
refroidi("tconstruct:casts/single_use/ingot", "tconstruct:molten_signalum", 90, "forge:ingots/bismuth", 39)
refroidi("tconstruct:casts/multi_use/plate", "tconstruct:molten_signalum", 90, "forge:plates/bismuth", 39)
refroidi("tconstruct:casts/single_use/plate", "tconstruct:molten_signalum", 90, "forge:plates/bismuth", 39)
refroidi("tconstruct:casts/multi_use/nugget", "tconstruct:molten_signalum", 10, "forge:nuggets/bismuth", 13)
refroidi("tconstruct:casts/single_use/nugget", "tconstruct:molten_signalum", 10, "forge:nuggets/bismuth", 13)

//Refroidissement du Newton's Ingots
refroidi("tconstruct:casts/multi_use/ingot", "tconstruct:molten_refined_obsidian", 90, "forge:ingots/hafnium", 39)
refroidi("tconstruct:casts/single_use/ingot", "tconstruct:molten_refined_obsidian", 90, "forge:ingots/hafnium", 39)
refroidi("tconstruct:casts/multi_use/plate", "tconstruct:molten_refined_obsidian", 90, "forge:plates/hafnium", 39)
refroidi("tconstruct:casts/single_use/plate", "tconstruct:molten_refined_obsidian", 90, "forge:plates/hafnium", 39)
refroidi("tconstruct:casts/multi_use/nugget", "tconstruct:molten_refined_obsidian", 10, "forge:nuggets/hafnium", 13)
refroidi("tconstruct:casts/single_use/nugget", "tconstruct:molten_refined_obsidian", 10, "forge:nuggets/hafnium", 13)

})