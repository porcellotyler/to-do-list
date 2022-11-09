import { createList } from "./DOM";
import { updateCardListOptions } from "./DOM";
const _ = require('lodash');
/*
let allTasksList = ["allTasksList"];
let todayList = ["todayList"];
let upcomingList = ["upcomingList"];
let garbage = ["garbage"];
//adding the name of the list as the first item in each array so the addItemToList function knows what to point to

let parentList = [];
    parentList.push(allTasksList, todayList, upcomingList, garbage);

//let parentList = JSON.parse(localStorage.getItem('parentList')) || [];
//parentList.push(JSON.parse(localStorage.getItem('parentList')));
//localStorage.setItem('parentList', JSON.stringify(parentList));
//parentList.splice(0, 1); //addressing index 0 object being null rn
//parentList.push(allTasksList, todayList, upcomingList, garbage);

//localStorage.setItem('parentList', JSON.stringify(parentList));

//parentList = JSON.parse(localStorage.getItem('parentList'));

//let parentList = localStorage.setItem('parentList', JSON.stringify([`${allTasksList}, ${todayList}, ${upcomingList}, ${garbage}`]));
//consider custom lists, may need to adjust this
//localStorage.setItem('parentList', JSON.stringify(parentList)); */

if (!localStorage.getItem("parentList")) {
    populateStorage();
} else {
   // getLists(); 
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

//parentList.push(allTasksList, todayList, upcomingList, garbage); 

localStorage.setItem("parentList", JSON.stringify(parentList));

function updateStorage(storageKey, data) {

    localStorage.setItem(`${storageKey}`, JSON.stringify(data));

};
    
function getFromStorage() {

    //parentList = JSON.parse(localStorage.getItem('parentList'));
    
    for (let i = 0; i < parentList.length; i++) {
        parentList[i] = JSON.parse(localStorage.getItem(`${parentList[i]}`));
    };
};

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

        return customListMaker(customName), updateCardListOptions(customName);    
    };
};

function customListMaker(name) {
    name = new Array(name);
        
    let customArrayDiv = document.createElement('div');
        customArrayDiv.setAttribute('class', 'customArray');
        customArrayDiv.innerText = `${name}`;

    name[0] = `${name + 'List'}`;

    parentList.push(name);

    let customListImage = document.createElement("img");
        customListImage["src"] = '/img/customList.svg';
        customArrayDiv.prepend(customListImage);

    let createListDiv = document.getElementById('createList');
    let sidebarDiv = document.getElementById('sidebar');
        sidebarDiv.insertBefore(customArrayDiv, createListDiv);
};

export { viewList };
export { enterCustomName };
export { customListMaker };
export { addItemToList };
export { deleteTaskCard };