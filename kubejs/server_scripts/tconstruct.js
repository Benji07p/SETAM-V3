onEvent('recipes', event => {
    
    function fondu(item, sortie, amount, temperature, time){
    
    event.custom({
    "type": "tconstruct:melting",
    "ingredient": {
      "item": item
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
              "item": result
            },
            "cooling_time": time2
          }
    )
}

//Fonte du bismuth
fondu("chemlib:bismuth_plate", "tconstruct:molten_signalum", 90, 271, 39)
fondu("chemlib:bismuth_ingot", "tconstruct:molten_signalum", 90, 271, 39)
fondu("chemlib:bismuth_nugget", "tconstruct:molten_signalum", 10, 271, 13)
fondu("chemlib:bismuth_dust", "tconstruct:molten_signalum", 90, 271, 29)

//Molten Black Iron
fondu("timeextraminer:broken_black_iron", "timeextraminer:molten_black_iron", 90, 1499, 80)

//Fonte du Newton's Ingots
fondu("timeextraminer:newtons_ingot", "tconstruct:molten_refined_obsidian", 90, 98, 39)
fondu("timeextraminer:newtons_plate", "tconstruct:molten_refined_obsidian", 90, 98, 39)
fondu("timeextraminer:newtons_nugget", "tconstruct:molten_refined_obsidian", 10, 98, 13)
fondu("timeextraminer:newtons_dust", "tconstruct:molten_refined_obsidian", 90, 98, 29)

//Refroidissement du bismuth
refroidi("tconstruct:casts/multi_use/ingot", "tconstruct:molten_signalum", 90, "chemlib:bismuth_ingot", 39)
refroidi("tconstruct:casts/single_use/ingot", "tconstruct:molten_signalum", 90, "chemlib:bismuth_ingot", 39)
refroidi("tconstruct:casts/multi_use/plate", "tconstruct:molten_signalum", 90, "chemlib:bismuth_plate", 39)
refroidi("tconstruct:casts/single_use/plate", "tconstruct:molten_signalum", 90, "chemlib:bismuth_plate", 39)
refroidi("tconstruct:casts/multi_use/nugget", "tconstruct:molten_signalum", 10, "chemlib:bismuth_nugget", 13)
refroidi("tconstruct:casts/single_use/nugget", "tconstruct:molten_signalum", 10, "chemlib:bismuth_nugget", 13)

//Refroidissement du Newton's Ingots
refroidi("tconstruct:casts/multi_use/ingot", "tconstruct:molten_refined_obsidian", 90, "timeextraminer:newtons_ingot", 39)
refroidi("tconstruct:casts/single_use/ingot", "tconstruct:molten_refined_obsidian", 90, "timeextraminer:newtons_ingot", 39)
refroidi("tconstruct:casts/multi_use/plate", "tconstruct:molten_refined_obsidian", 90, "timeextraminer:newtons_plate", 39)
refroidi("tconstruct:casts/single_use/plate", "tconstruct:molten_refined_obsidian", 90, "timeextraminer:newtons_plate", 39)
refroidi("tconstruct:casts/multi_use/nugget", "tconstruct:molten_refined_obsidian", 10, "timeextraminer:newtons_nugget", 13)
refroidi("tconstruct:casts/single_use/nugget", "tconstruct:molten_refined_obsidian", 10, "timeextraminer:newtons_nugget", 13)

//Molten Black Iron
refroidi("tconstruct:casts/multi_use/ingot", "timeextraminer:molten_black_iron", 90, "extendedcrafting:black_iron_ingot", 80)
refroidi("tconstruct:casts/single_use/ingot", "timeextraminer:molten_black_iron", 90, "extendedcrafting:black_iron_ingot", 80)
})

//Molten Black Iron
onEvent('fluid.tags', event => {
  event.add('timeextraminer:molten_black_iron', 'timeextraminer:molten_black_iron')
})