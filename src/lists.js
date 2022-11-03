import { createList } from "./DOM";

let mainToDoList = ["mainToDoList"];
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

//maybe need to refactor below to loop through parentList and display chosen list instead of hard coding - need to be able to display custom lists as well
function viewAllTasks() {
    let display = document.getElementById('content');
        while(display.firstChild) {
            display.removeChild(display.firstChild);
        };

    createList(mainToDoList);
};

function viewTodayTasks() {
    let display = document.getElementById('content');
        while(display.firstChild) {
            display.removeChild(display.firstChild);
        };

    createList(todayList);
};

function viewUpcomingTasks() {
    let display = document.getElementById('content');
        while(display.firstChild) {
            display.removeChild(display.firstChild);
        };

    createList(upcomingList);
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

    let upcomingDiv = document.getElementById('upcoming');
        upcomingDiv.append(customArrayDiv);    
};

export { viewAllTasks };
export { viewTodayTasks };
export { viewUpcomingTasks };
export { enterCustomName };
export { customListMaker };
export { addItemToList };
export { deleteTaskCard };