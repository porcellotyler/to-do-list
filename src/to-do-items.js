import { addItemToList } from "./lists";

function toDoItem(title, dueDate, priority, description, list) {
    this.title = title
    this.dueDate = dueDate
    this.priority = priority
    this.description = description
    this.list = list
    this.id = ""
};

function onClickAddItem() {

    const contentDiv = document.getElementById('content');
    const formDiv = document.createElement('div');
        formDiv.innerHTML = '<div class="modalContent"> <input type="text" id="title" name="title" value="title?"/> <input type="datetime-local" id="dueDate" name="dueDate" value="when?"/> <select name="prioritySelect" id="prioritySelect"> <option value="">--Set Priority--</option> <option value="low">Low</option> <option value="mid">Mid</option> <option value="high">High</option> </select> <input type="text" id="description" name="description" value="description?"/>  <select name="listID" id="listID"> <option value="">--Pick a list--</option> <option value="mainToDoList">All tasks</option> <option value="todayList">Today</option> <option value="upcomingList">Upcoming</option> </select> <button id="create">Create</button> </div>';
        
        formDiv.setAttribute('class', 'modal');
        contentDiv.prepend(formDiv); 

    const createButton = document.getElementById('create');
    
    createButton.onclick = function() {
        let newToDoItem = new toDoItem((document.getElementById('title').value), (document.getElementById('dueDate').value), (document.getElementById('prioritySelect').value), (document.getElementById('description').value), (document.getElementById('listID').value));
            
        contentDiv.removeChild(formDiv);

        return addItemToList(newToDoItem) 
    };
};

export { onClickAddItem };