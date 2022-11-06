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
        formDiv.innerHTML = '<div class="modalContent"> <input type="text" id="title" name="title" value="title?"/> <input type="datetime-local" id="dueDate" name="dueDate" value="when?"/> <select name="prioritySelect" id="prioritySelect"> <option value="">--Set Priority--</option> <option value="low">Low</option> <option value="mid">Mid</option> <option value="high">High</option> </select> <input type="text" id="description" name="description" value="description?"/> <button id="create">Create</button> </div>'; // <select name="listID" id="listID"> <option value="">--Pick a list--</option> <option value="allTasksList">All tasks</option> <option value="todayList">Today</option> <option value="upcomingList">Upcoming</option> </select> 
        
        formDiv.setAttribute('class', 'modal');
        contentDiv.prepend(formDiv); 

    const createButton = document.getElementById('create');
    
    createButton.onclick = function() {
        let newToDoItem = new toDoItem((document.getElementById('title').value), (document.getElementById('dueDate').value), (document.getElementById('prioritySelect').value), (document.getElementById('description').value), /*(document.getElementById('listID').value)*/'allTasksList'); //last entry would be allTasksList no matter what and dropdown in formDiv would be removed to make all items auto in allTasksList
            
        contentDiv.removeChild(formDiv);

        return addItemToList(newToDoItem) 
    };
};

export { onClickAddItem };