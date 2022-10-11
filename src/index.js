/* arrange data in various arrays
    main array
        all to do items
    project arrays
        to do items associated with specific projects

    maybe instead of using arrays, i could use classes to signify which project a task is associated with*****
    
or is this best organized using classes/inheritance
    to do item class
        shows on homepage
        project classes
            shows in specific project
*/

import { onClickAddItem } from "./to-do-items";
import { viewAllTasks } from "./lists";
import { viewTodayTasks } from "./lists";
import { viewUpcomingTasks } from "./lists";

const addToDoItem = document.getElementById('addButton');
    addToDoItem.onclick = () => { onClickAddItem() };

const allTasks = document.getElementById('allTasks');
    allTasks.onclick = () => { viewAllTasks() };

const todayTasks = document.getElementById('today');
    todayTasks.onclick = () => { viewTodayTasks() };

const upcomingTasks = document.getElementById('upcoming');
    upcomingTasks.onclick = () => { viewUpcomingTasks() };

/* const createCustomList = document.getElementById('createList');
    createCustomList.onclick = () => { }; */