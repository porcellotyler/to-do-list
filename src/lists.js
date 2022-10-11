import { createList } from "./DOM";

let mainToDoList = ["mainToDoList"];
let todayList = ["todayList"];
let upcomingList = ["upcomingList"];
let garbage = ["garbage"];
    //adding the name of the list as the first item in each array so the addItemToList function knows what to point to

let parentList = [];
    parentList.push(mainToDoList, todayList, upcomingList, garbage);

/*
ok so...
could create parentList array of all lists
    when user creates custom array, that gets spliced into "parentList" array of all arrays

    then, for the addItemToList fn below...
        instead of explicitly checking for item.list to === "mainList" (for example)
        we can check by calling on the "parentList" array
        so to check for mainList instead of calling it specifically we could do item.list === parentList[0] and loop through all of "parentList" array (except garbage?)
*/


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
//at this time an item has to be in 1 list only, could refactor in future allowing task to be in multiple lists at the same time
/*function addItemToList(item) {
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
}; */

function deleteTaskCard(locationID) {
    //unsure of my previous thinking here but this needs to be updated to function for all lists included custom added lists
    let targetCard = mainToDoList.filter(item => item.id === locationID); 

    mainToDoList = mainToDoList.filter(item => item.id !== locationID);

    targetCard.list = 'garbage';
    garbage.push(targetCard);
}

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

//still need to create form to get input for custom array

function customListMaker(name) {
    name = new Array(name);

    parentList.push(name);
    
    let customArrayDiv = document.createElement('div');
        customArrayDiv.setAttribute('class', 'customArray');
        customArrayDiv.innerText = `${name}`;
        
    let upcomingDiv = document.getElementById('upcoming');
        upcomingDiv.append(customArrayDiv);

    //add custom list to options in creating task card
    //maybe remove list selection from task card creation - all new cards auto added to all tasks - then the user can choose another list from the card itself - not sure if this solves the problem
    
};

export { viewAllTasks };
export { viewTodayTasks };
export { viewUpcomingTasks };
export { customListMaker };
export { addItemToList };
export { deleteTaskCard };