/* 
remember to remove dev mode and source maps from webpack config before publishing on github

could remove garbage list overall - it doesnt end up being used/needed

--issue-- cards duplicate sometimes on reload
*/

import { viewList } from "./lists";
import { enterCustomName, onClickAddItem } from "./DOM";

const addToDoItem = document.getElementById('addButton');
    addToDoItem.onclick = () => { clearTarget(), onClickAddItem() };

const sidebar = document.getElementById('sidebar');
    sidebar.onclick = e => {

        if (e.target.children.length > 1) {
            return
        } else if (e.target.innerText.includes('Create List')) {
            clearTarget();

            enterCustomName();
        } else { 
            viewList(e.target.innerText);

            clearTarget();

            e.target.setAttribute("id", "targeted");
        };
    };

function clearTarget() {
    if (document.getElementById('targeted') != null) {
        let oldTarget = document.getElementById('targeted');

        oldTarget.removeAttribute("id");
    };
};