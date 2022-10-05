console.log("Hello world");

/*

arrange data in various arrays
    main array
        all to do items
    project arrays
        to do items associated with specific projects
    
or is this best organized using classes/inheritance
    to do item class
        shows on homepage
        project classes
            shows in specific project

add mouse event listener for the button - clicking will trigger function to createToDoItem


maybe easiest rn to write in one file then split into modules
*/

import { onClickAddItem } from "./to-do-items";

const addToDoItem = document.getElementById('addButton');

addToDoItem.onclick = () => { onClickAddItem() };