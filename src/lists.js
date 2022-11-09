import { createList } from "./DOM";
import { updateCardListOptions } from "./DOM";
const _ = require('lodash');

if (!localStorage.getItem("parentList")) {
    populateStorage();
};

function populateStorage() {
    localStorage.setItem("parentList", JSON.stringify([]));

    localStorage.setItem("allTasksList", JSON.stringify(["allTasksList"]));

    localStorage.setItem("todayList", JSON.stringify(["todayList"]));

    localStorage.setItem("upcomingList", JSON.stringify(["upcomingList"]));

    localStorage.setItem("garbage", JSON.stringify(["garbage"]));
};

let parentList = JSON.parse(localStorage.getItem("parentList")); 
let allTasksList = JSON.parse(localStorage.getItem("allTasksList"));
let todayList = JSON.parse(localStorage.getItem("todayList"));
let upcomingList = JSON.parse(localStorage.getItem("upcomingList"));
let garbage = JSON.parse(localStorage.getItem("garbage"));

if (parentList != null) {
    parentList.push(allTasksList, todayList, upcomingList, garbage);
}; //on page reload, these lists are pushed again, how to avoid this? 

function updateStorage(storageKey, data) {

    localStorage.setItem(`${storageKey}`, JSON.stringify(data));

};

//updateStorage("parentList", parentList);
    
/*function getFromStorage() {  
    let parentList = JSON.parse(localStorage.getItem("parentList")); 
    
    for (let i = 0; i < parentList.length; i++) {
        parentList[i] = JSON.parse(localStorage.getItem(`${parentList[i]}`));
    };
}; */

function addItemToList(item) {
    if (item.list != 'garbage' && item.list != 'allTasksList') { allTasksList.push(item) }; //would remove this bit i think

    for (let i = 0; i < parentList.length; i++) {
        if (item.list == parentList[i][0]) {
            parentList[i].push(item);
            
            let display = document.getElementById('content');
        
            while(display.firstChild) { display.removeChild(display.firstChild); };

            updateStorage(parentList[i][0], parentList[i]);
            createList(parentList[i]);

        } else if (item.list === 'garbage') {
            garbage.push(item);
        };
    };
};

function deleteTaskCard(locationID, listID) {

    if (listID != 'allTasksList') {
    let mainListTargetCard = allTasksList.filter(item => (item.id === locationID && item.list === listID));

    let deletionIndex = allTasksList.findIndex(card => (card.list == listID && card.id == locationID));

    allTasksList.splice(deletionIndex, 1); 
    updateStorage("allTasksList", allTasksList);

    mainListTargetCard.list = 'garbage';
    garbage.push(mainListTargetCard);
    };

    for (let i = 0; i < parentList.length; i++) {
        if (parentList[i].includes(listID)) {

            let targetCard = parentList[i].filter(item => item.id === locationID);

            parentList[i].splice(locationID, 1);
            updateStorage(parentList[i][0], parentList[i]);

            targetCard.list = 'garbage';
            garbage.push(targetCard);
        };
    };
};

function viewList(list) {
    //camelCasing list so that it can be used to identify the appropriate array
    
    let camelList = _.camelCase(list).concat('List');

    let display = document.getElementById('content');
        while(display.firstChild) {
            display.removeChild(display.firstChild);
        };

    for (let i = 0; i < parentList.length; i++) {
        if (parentList[i].includes(camelList)) {
            createList(parentList[i]);
        };
    };
};

function enterCustomName() {
    const contentDiv = document.getElementById('content');
    const formDiv = document.createElement('div');
        formDiv.innerHTML = '<div class="modalContent"> <input type="text" id="customName" name="customName" value="Name of Custom List"/> <button id="addNewList">Create List</button> </div>'; 

        formDiv.setAttribute('class', 'modal');
        contentDiv.prepend(formDiv);

    const addNewList = document.getElementById('addNewList');

    addNewList.onclick = function() {
        let customName = document.getElementById('customName').value;

        contentDiv.removeChild(formDiv);

        let camelName = _.camelCase(customName);

        return customListMaker(camelName), updateCardListOptions(customName);    
    };
};

function customListMaker(name) {
    name = new Array(name);
        //need to fix DOM handling below so DOM display isnt camelCased
    let customArrayDiv = document.createElement('div');
        customArrayDiv.setAttribute('class', 'customArray');
        customArrayDiv.innerText = `${name}`;

    name[0] = `${name + 'List'}`;

    parentList.push(name);
    localStorage.setItem("parentList", JSON.stringify(parentList));
    updateStorage(name[0], name);

    let customListImage = document.createElement("img");
        customListImage["src"] = '/img/customList.svg';
        customArrayDiv.prepend(customListImage);

    let createListDiv = document.getElementById('createList');
    let sidebarDiv = document.getElementById('sidebar');
        sidebarDiv.insertBefore(customArrayDiv, createListDiv); //DOM handling could be removed here and added to DOM.js for consistency
};

export { viewList };
export { enterCustomName };
export { customListMaker };
export { addItemToList };
export { deleteTaskCard };