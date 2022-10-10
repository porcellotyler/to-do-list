import { createMainList } from "./DOM";

let mainToDoList = [];
let todayList = [];
let upcomingList = [];
let garbage = [];
//could rename below to generic add item to list
//at this time maybe an item has to be in 1 list only, could refactor in future allowing task to be in multiple lists at the same time
function addItemToMainList(item) {
    if (item.list === "mainList") {
        mainToDoList.push(item);

        let display = document.getElementById('content');
            while(display.firstChild) {
                display.removeChild(display.firstChild);
            };
        return createMainList(mainToDoList);
    } else if (item.list === 'today') {
        todayList.push(item);

        let display = document.getElementById('content');
            while(display.firstChild) {
                display.removeChild(display.firstChild);
            };
        return createMainList(todayList);
    } else if (item.list === 'upcoming') {
        upcomingList.push(item);

        let display = document.getElementById('content');
            while(display.firstChild) {
                display.removeChild(display.firstChild);
            };
        return createMainList(upcomingList);
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

    createMainList(mainToDoList);
};

function viewTodayTasks() {
    let display = document.getElementById('content');
        while(display.firstChild) {
            display.removeChild(display.firstChild);
        };

    createMainList(todayList);
};

function viewUpcomingTasks() {
    let display = document.getElementById('content');
        while(display.firstChild) {
            display.removeChild(display.firstChild);
        };

    createMainList(upcomingList);
};

export { viewAllTasks };
export { viewTodayTasks };
export { viewUpcomingTasks };
export { addItemToMainList };
export { deleteTaskCard };