//add a mark as complete checkbox
//import { deleteTaskCard } from "./to-do-items";
import { deleteTaskCard } from "./lists";
//this could be renamed to a generic createlist, the input is what determines what list it is, but its all going to the same dom anyways
function createMainList(list) {
    for (let i = 0; i < list.length; i++) {
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
            priority.setAttribute('class', 'priority');
            priority.innerText = `${list[i].priority}`;
            toDoItemCard.append(priority);

        let description = document.createElement('div');
            description.setAttribute('class', 'description');
            description.innerText = `${list[i].description}`;
            toDoItemCard.append(description);

        let deleteButton = document.createElement('button');
            deleteButton.setAttribute('id', 'deleteButton');
            deleteButton.setAttribute('class', `item-${i}`);
            deleteButton.innerText = 'X';
            deleteButton.onclick = () => {
                deleteTaskCard(i);
                let deleteLocation = deleteButton.parentNode;
                display.removeChild(deleteLocation)
            }
            toDoItemCard.append(deleteButton);
    };
};

export { createMainList };