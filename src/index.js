/* 
to do

*** make all todo items really show all items from all lists

*** add editability to to-do task cards

*** add date-fns library to webpack to fix the due date functionality

*** refactor onClickAddItem in to-do-items so that custom lists are included

- make sure that custom lists include their name as the first item in their arrays so that items are correctly placed

*** add localStorage

- add ability to move card from one list to another after creation - nice but not necessary
    had an idea to add list selection as only allowed to pick after the item is created , not sure if this helps or not tho

- make to do items collapsible, nice to have
*/

import { onClickAddItem } from "./to-do-items";
import { viewList } from "./lists";
import { enterCustomName } from "./lists";

const addToDoItem = document.getElementById('addButton');
    addToDoItem.onclick = () => { onClickAddItem() };

const sidebar = document.getElementById('sidebar');
    sidebar.onclick = e => {

        if (e.target.children.length > 1) {
            return
        } else if (e.target.innerText.includes('Create List')) {
            enterCustomName()
        } else { 
            viewList(e.target.innerText);
        };
    };