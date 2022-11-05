/* 
to do

*** add date-fns library to webpack to fix the due date functionality

*** refactor onClickAddItem in to-do-items so all new to do tasks are added to allTasksList - lines 16 & 24, add save button line 73 in DOM so when user picks a list, it will update

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