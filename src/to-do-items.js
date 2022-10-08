import { createMainList } from "./DOM";

function toDoItem(title, dueDate, priority, description) {
    this.title = title
    this.dueDate = dueDate
    this.priority = priority
    this.description = description
};

/* 
each item card should have a mark as complete checkbox and delete button
*/

function onClickAddItem() {
    //show modal to add item with form to enter data
    const contentDiv = document.getElementById('content');

    const formDiv = document.createElement('div');
        formDiv.innerHTML = '<input type="text" id="title" name="title" value="title?"/> <input type="datetime-local" id="dueDate" name="dueDate" value="when?"/> <input type="text" id="priority" name="priority" value="priority?"/> <input type="text" id="description" name="description" value="description?"/> <button id="create">Create</button>';
        contentDiv.appendChild(formDiv);

    const createButton = document.getElementById('create');
    
    createButton.onclick = function() {
        let newToDoItem = new toDoItem((document.getElementById('title').value), (document.getElementById('dueDate').value), (document.getElementById('priority').value), (document.getElementById('description').value),);

        formDiv.innerHTML = '';

        return addItemToMainList(newToDoItem) //maybe this should be in a separate module later
    };
};
//main list things should probably end up in index.js
const mainListDiv = document.createElement("div");
    mainListDiv.setAttribute('id', 'mainListDiv');

const contentDiv = document.getElementById('content');
    contentDiv.appendChild(mainListDiv);

let mainToDoList = [];

function addItemToMainList(item) {
    mainToDoList.push(item);

    let oldDisplay = document.getElementById('mainListDiv');
        oldDisplay.innerText = '';
    
    return createMainList(mainToDoList);
};

export { onClickAddItem };