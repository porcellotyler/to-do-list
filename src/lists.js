import { createMainList } from "./DOM";

let mainToDoList = [];
let garbage = [];

function addItemToMainList(item) {
    if (item.list === "mainList") {
        mainToDoList.push(item);

        let display = document.getElementById('content');
            while(display.firstChild) {
                display.removeChild(display.firstChild);
            };
        return createMainList(mainToDoList);
    } else {
        return console.log("error in list ID")
    }
};

function deleteTaskCard(locationID) {
   
    let targetCard = mainToDoList.filter(item => item.id === locationID); 
    
    mainToDoList = mainToDoList.filter(item => item.id !== locationID);

    targetCard.list = 'garbage';
    garbage.push(targetCard);
}

export { addItemToMainList };
export { deleteTaskCard };