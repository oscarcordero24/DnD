import { 
    fetchData
} from "./functions.js";


fetchData('../data/143046_Complete.json', main);

function main(data){
    const backgrounds = data.compendium.background;
    const classes = data.compendium.class;
    const feats = data.compendium.feat;
    const items = data.compendium.item;
    const monsters = data.compendium.monster;
    const races = data.compendium.race;
    const spells = data.compendium.spell;

    console.log(races);
}

