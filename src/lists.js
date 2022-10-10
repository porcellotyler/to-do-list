import { createList } from "./DOM";

let mainToDoList = [];
let todayList = [];
let upcomingList = [];
let garbage = [];
//at this time maybe an item has to be in 1 list only, could refactor in future allowing task to be in multiple lists at the same time
function addItemToList(item) {
    if (item.list === "mainList") {
        mainToDoList.push(item);

        let display = document.getElementById('content');
            while(display.firstChild) {
                display.removeChild(display.firstChild);
            };
        return createList(mainToDoList);
    } else if (item.list === 'today') {
        todayList.push(item);

        let display = document.getElementById('content');
            while(display.firstChild) {
                display.removeChild(display.firstChild);
            };
        return createList(todayList);
    } else if (item.list === 'upcoming') {
        upcomingList.push(item);

        let display = document.getElementById('content');
            while(display.firstChild) {
                display.removeChild(display.firstChild);
            };
        return createList(upcomingList);
    } else if (item.list === 'garbage') {
        garbage.push(item);
    } else {
        console.log("error in list ID");
        return
    }
};

function deleteTaskCard(locationID) {
   
    let targetCard = mainToDoList.filter(item => item.id === locationID); 

    mainToDoList = mainToDoList.filter(item => item.id !== locationID);

    targetCard.list = 'garbage';
    garbage.push(targetCard);
}

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
//still need to create form to get input for custom array
/* function customListMaker(name) {
    function customArray(name, contents) {
        this.name = name;
        this.contents = [];
        this.listID = name;
    };

    let newList = new customArray(name, []);
        console.log(newList);
    //add custom list to options in creating task card
    //create task card list id for tracking - how to get custom name into addItemToList logic so browser knows where to place item? 
    
    let customArrayDiv = document.createElement('div');
        customArrayDiv.setAttribute('class', 'customArray');
        customArrayDiv.innerText = `${name}`;
        
    let upcomingDiv = document.getElementById('upcoming');
        upcomingDiv.append(customArrayDiv);
}; */

export { viewAllTasks };
export { viewTodayTasks };
export { viewUpcomingTasks };
//export { customListMaker };
export { addItemToList };
export { deleteTaskCard };