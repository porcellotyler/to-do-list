/* 
to do

- make all todo items really show all items from all lists

- add editability to to-do task cards

- add date-fns library to webpack to fix the due date functionality

- refactor onClickAddItem in to-do-items so that custom lists are included

- make sure that custom lists include their name as the first item in their arrays so that items are correctly placed

- refactor view tasks functions in lists to work for custom lists as well

- add localStorage

- add ability to move card from one list to another after creation - nice but not necessary
    had an idea to add list selection as only allowed to pick after the item is created , not sure if this helps or not tho


*/

import { onClickAddItem } from "./to-do-items";
import { viewAllTasks } from "./lists";
import { viewTodayTasks } from "./lists";
import { viewUpcomingTasks } from "./lists";
import { enterCustomName } from "./lists";

const addToDoItem = document.getElementById('addButton');
    addToDoItem.onclick = () => { onClickAddItem() };

const allTasks = document.getElementById('allTasks');
    allTasks.onclick = () => { viewAllTasks() };

const todayTasks = document.getElementById('today');
    todayTasks.onclick = () => { viewTodayTasks() };

const upcomingTasks = document.getElementById('upcoming');
    upcomingTasks.onclick = () => { viewUpcomingTasks() };

const createCustomList = document.getElementById('createList');
    createCustomList.onclick = () => { enterCustomName() };