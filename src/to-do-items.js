//import { createMainList } from "./DOM";
import { addItemToMainList } from "./lists";

function toDoItem(title, dueDate, priority, description) {
    this.title = title
    this.dueDate = dueDate
    this.priority = priority
    this.description = description
    this.list = "mainList"
    this.id = ""
};

function onClickAddItem() {

    const contentDiv = document.getElementById('content');
    const formDiv = document.createElement('div');
        formDiv.innerHTML = '<div class="modalContent"> <input type="text" id="title" name="title" value="title?"/> <input type="datetime-local" id="dueDate" name="dueDate" value="when?"/> <input type="text" id="priority" name="priority" value="priority?"/> <input type="text" id="description" name="description" value="description?"/> <button id="create">Create</button> </div>';
        //priority could be a choice between options 1-5
        formDiv.setAttribute('class', 'modal');
        contentDiv.prepend(formDiv); //may be unnecessary

    const createButton = document.getElementById('create');
    
    createButton.onclick = function() {
        let newToDoItem = new toDoItem((document.getElementById('title').value), (document.getElementById('dueDate').value), (document.getElementById('priority').value), (document.getElementById('description').value),);

        contentDiv.removeChild(formDiv); //may be unnecessary

        return addItemToMainList(newToDoItem) //maybe this should be in a separate module 
    };
};

/*let mainToDoList = [];

function addItemToMainList(item) {

    /*let oldDisplay = document.getElementById('content');
        oldDisplay.innerText = '';

    if (item.list === "mainList") {
        mainToDoList.push(item);
        return createMainList(mainToDoList);
    } else {
        return console.log("error in list ID")
    }
};

function deleteTaskCard(locationID) {
    mainToDoList.splice(locationID, 1);
} */

export { onClickAddItem };
//export { deleteTaskCard };