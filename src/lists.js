import { clearDisplay, createList, customListDisplay, updateCardListOptions } from "./DOM";
const _ = require('lodash');

if (!localStorage.getItem("parentList")) {
    populateStorage();
} else {
    getCustomLists();
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
};

function updateStorage(storageKey, data) {
    localStorage.setItem(`${storageKey}`, JSON.stringify(data));
};

function addItemToList(item) {
    if (item.list != 'garbage' && item.list != 'allTasksList') { allTasksList.push(item) }; //would remove this bit i think
    
    for (let i = 0; i < parentList.length; i++) {
        if (item.list == parentList[i][0]) {
            parentList[i].push(item);
            
            clearDisplay();

            updateStorage(parentList[i][0], parentList[i]);
            createList(parentList[i]);
        } else if (item.list === 'garbage') {
            garbage.push(item);
        };
    };
};

function deleteTaskCard(locationID, listID) {
    if (listID != 'allTasksList') {
    let allTasksListTargetCard = allTasksList.filter(item => (item.id === locationID && item.list === listID));

    let deletionIndex = allTasksList.findIndex(card => (card.list == listID && card.id == locationID));

    allTasksList.splice(deletionIndex, 1); 
    updateStorage("allTasksList", allTasksList);

    allTasksListTargetCard.list = 'garbage';
    garbage.push(allTasksListTargetCard);
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
    clearDisplay();

    let camelList = _.camelCase(list).concat('List'); //camelCasing list so that it can be used to identify the appropriate array

    for (let i = 0; i < parentList.length; i++) {
        if (parentList[i].includes(camelList)) {
            createList(parentList[i]);
        };
    };
};

function customListMaker(name) {
    name = new Array(name);

    name[0] = `${name + 'List'}`;

    parentList.push(name);
    localStorage.setItem("parentList", JSON.stringify(parentList));
    
    return updateStorage(name[0], name);
};

function getCustomLists() {
    let parentList = JSON.parse(localStorage.getItem("parentList"));

    for (let i = 4; i < parentList.length; i++) { //i = 4 because parentList[0-3] are default lists already displayed
        let displayName = _.startCase(parentList[i][0]).replace('List', '');

        customListDisplay(displayName);
        updateCardListOptions(displayName);
    };
};

export { viewList };
export { customListMaker };
export { addItemToList };
export { deleteTaskCard };