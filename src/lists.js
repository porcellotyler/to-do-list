import { createList } from "./DOM";
const _ = require('lodash');

let mainToDoList = ["allTasksList"];
let todayList = ["todayList"];
let upcomingList = ["upcomingList"];
let garbage = ["garbage"];
    //adding the name of the list as the first item in each array so the addItemToList function knows what to point to

let parentList = [];
    parentList.push(mainToDoList, todayList, upcomingList, garbage);

function addItemToList(item) {
    for (let i = 0; i < parentList.length; i++) {
        if (item.list == ((parentList[i])[0])) {
            parentList[i].push(item);
            
            let display = document.getElementById('content');
        
            while(display.firstChild) {
                display.removeChild(display.firstChild);
            };

            createList(parentList[i]);

        } else if (item.list === 'garbage') {
            garbage.push(item);
        };
    };
};

function deleteTaskCard(locationID, listID) {
    for (let i = 0; i < parentList.length; i++) {
        if (parentList[i].includes(listID)) {

            let targetCard = parentList[i].filter(item => item.id === locationID); 

            parentList[i].splice(locationID, 1);

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

        return customListMaker(customName);    
    };
};

function customListMaker(name) {
    name = new Array(name);

    parentList.push(name);
    
    let customArrayDiv = document.createElement('div');
        customArrayDiv.setAttribute('class', 'customArray');
        customArrayDiv.innerText = `${name}`;

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