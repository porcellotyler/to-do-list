/* 
remember to remove dev mode and source maps from webpack config before publishing on github

could remove garbage list overall - it doesnt end up being used/needed

--issue-- cards duplicate sometimes on reload
*/

import { viewList } from "./lists";
import { enterCustomName, onClickAddItem } from "./DOM";

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