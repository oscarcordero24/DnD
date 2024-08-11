import { fetchData } from "./functions.js";

const categoryCmbBox = document.getElementById('category');
const itemsCmbBox = document.getElementById('items');

fetchData('../data/143046_Complete.json', init);

function init(data){
    // Get data
    const fetchedData = data.compendium;
    // Get all keys from the data
    const categoryList = Object.keys(fetchedData).filter(x => x.split('@').length < 2);
    // Populate Category combobox
    populateCombo(categoryCmbBox, categoryList);

    // Get data for item cobobox
    let itemsList = getItemsList(categoryCmbBox.value, fetchedData);

    // Populate Items combobox
    populateCombo(itemsCmbBox, itemsList);

    categoryCmbBox.addEventListener('change', function(){
        itemsList = getItemsList(categoryCmbBox.value, fetchedData);
        populateCombo(itemsCmbBox, itemsList);
    });
}

function populateCombo(combobox, list){
    combobox.innerHTML = '';
    list.forEach(element => {
        let option = document.createElement('option');
        option.value = element;
        option.textContent = element;
        combobox.appendChild(option);
    });
}

function getItemsList(value, data){
    let tempList = data[value].map(x => x.name);
    return tempList;
}
