import { deleteTaskCard } from "./lists";

function createList(list) {
    for (let i = 1; i < list.length; i++) { //set i to 1 because the first item in each array is the name of the list (which is a string and isn't meant to post on the DOM)
        let display = document.getElementById('content');

        let toDoItemCard = document.createElement('div');
            toDoItemCard.classList.add('toDoItemCard');
            display.append(toDoItemCard);

        let itemID = i;
            list[i].id = itemID;
    
        let title = document.createElement('div');
            title.setAttribute('class', 'title');
            title.innerText = `${list[i].title}`;
            toDoItemCard.append(title);

        let dueDate = document.createElement('div');
            dueDate.setAttribute('class', 'dueDate');
            dueDate.innerText = `Due: ${list[i].dueDate}`;
            toDoItemCard.append(dueDate);

        let priority = document.createElement('div');
            priority.setAttribute('class', `priority-${list[i].priority}`);
            priority.innerText = `${list[i].priority}`;
            toDoItemCard.append(priority);

        let checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.setAttribute('class', 'checkbox')
        /*let checkboxDiv = document.createElement('div');
            checkboxDiv.innerText = 'Done?';
            checkboxDiv.append(checkbox);
            checkboxDiv.setAttribute('class', 'checkbox');*/
            toDoItemCard.append(checkbox);

        let description = document.createElement('div');
            description.setAttribute('class', 'description');
            description.innerText = `${list[i].description}`;
            toDoItemCard.append(description);

        if (list[0] != 'allTasksList') {
            let deleteButton = document.createElement('button');
                deleteButton.setAttribute('id', 'deleteButton');
                deleteButton.setAttribute('class', `item-${i}`);
                deleteButton.innerText = 'X';
            deleteButton.onclick = () => {
                deleteTaskCard(i, list[i].list);
                let deleteLocation = deleteButton.parentNode;
                display.removeChild(deleteLocation)
                };

            toDoItemCard.append(deleteButton); 
        }; //not showing a delete card button on the allTasksList because im having trouble getting it to work bug-free
    };
};

export { createList };