/*const addToDoItem = () => {
    const destinationDiv = document.getElementById('content'); //this will likely be changed once the page structure is built out, adding to content div for now to test


};*/

function createMainList(list) {
    for (let i = 0; i < list.length; i++) {
        let display = document.getElementById('content');

        let toDoItemCard = document.createElement('div');
        toDoItemCard.classList.add('toDoItemCard');
        toDoItemCard.innerText = 'To-Do Task Info:';
        display.prepend(toDoItemCard);

        let title = document.createElement('div');
            title.innerText = `Title: ${list[i].title}`;
            toDoItemCard.append(title);

        let dueDate = document.createElement('div');
            dueDate.innerText = `Due Date: ${list[i].dueDate}`;
            toDoItemCard.append(dueDate);

        let priority = document.createElement('div');
            priority.innerText = `Priority: ${list[i].priority}`;
            toDoItemCard.append(priority);

        let description = document.createElement('div');
            description.innerText = `Description: ${list[i].description}`;
            toDoItemCard.append(description);
    };
};

export { createMainList };