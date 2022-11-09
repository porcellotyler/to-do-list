import { addItemToList, deleteTaskCard } from "./lists";

let listOptions = ['today', 'upcoming']

function updateCardListOptions(newOption) {
    listOptions.push(newOption);
};

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
            title.setAttribute('contenteditable', true);
            toDoItemCard.append(title);

        let dueDate = document.createElement('div');
            dueDate.setAttribute('class', 'dueDate');
            dueDate.innerText = `Due: ${list[i].dueDate}`;
            dueDate.setAttribute('contenteditable', true);
            toDoItemCard.append(dueDate);

        let priority = document.createElement('div');
            priority.setAttribute('class', `priority-${list[i].priority}`);
            if (list[i].priority == 'high') {
                priority.innerText = '🌕';
            } else if (list[i].priority == 'mid') {
                priority.innerText = '🌓';
            } else if (list[i].priority == 'low') {
                priority.innerText = '🌑';
            } else {
                priority.innerText = '😶‍🌫️';
            };
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
            description.setAttribute('contenteditable', true);
            toDoItemCard.append(description);

        let listSelector = document.createElement('select');
            listSelector.name = 'listOptions';
            listSelector.id = 'listOptions';
            for (const list of listOptions) {
                var option = document.createElement("option");
                option.value = list;
                option.text = list;
                listSelector.appendChild(option);
            };
        
        let label = document.createElement('label');
            label.innerText = 'List:';
            label.htmlFor = 'listOptions';
        toDoItemCard.appendChild(label).appendChild(listSelector);

        let firstList = list[i].list; //storing original list so that list can change below and still point to delete a card from the correct list after changing lists

        let saveButton = document.createElement('button');
            saveButton.setAttribute('id', 'saveButton');
            saveButton.setAttribute('class', `item-${i}`);
            saveButton.innerText = 'Save';
            saveButton.onclick = () => {
                
                list[i].list = `${listSelector.options[listSelector.selectedIndex].text + 'List'}`;

                addItemToList(list[i]);
                if (firstList != 'allTaskList') {
                    deleteTaskCard(i, firstList);
                };
            };
        toDoItemCard.append(saveButton);

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
        }; //not showing delete button on allTasksList because im having trouble getting it to work bug-free
    };
};

export { updateCardListOptions };
export { createList };