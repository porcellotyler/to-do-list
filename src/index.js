/* 
to do

*** remember to remove dev mode and source maps from webpack config before publishing on github

*** add localStorage - add a function that looks for that data in localStorage when your app is first loaded.

maybe its a lot simpler than im making it out to be

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
/*
if (!localStorage.getItem('message')) {
    addToStorage();
} else {
    setStyles();
};

function setStyles() {
    let myMessage = localStorage.getItem('message');
    
    myMessage = 'Hello World!';

    //localStorage.setItem('message', myMessage);

    console.log(myMessage);
    console.log(localStorage.getItem('message'));
};

function addToStorage() {
    localStorage.setItem('message', 'populate');

    setStyles();
} */