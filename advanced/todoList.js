// /**
//  * Problem:
//  * Write a program to manage a to-do list.
//  * The program should support adding tasks, removing tasks, and displaying all tasks.
//  *
//  * Your task:
//  * Implement the functions `addTask`, `removeTask`, and `showTasks` to manage the to-do list.
//  *
//  * Example:
//  * addTask("Buy groceries") should add a new task.
//  * removeTask("Buy groceries") should remove the task.
//  * showTasks() should return a list of all current tasks.
//  */

let tasks = [];

function addTask(task) {
    if (!tasks.includes(task)) { 
        tasks.push(task);
    }
    return tasks;
}

function removeTask(task) {
    for (let i = 0; i < tasks.length; i++) { 
        if (tasks[i] === task) { 
            tasks.splice(i, 1); 
            break; 
        }
    }
    return tasks; 
}

function showTasks() {
    return tasks;
}

module.exports = { addTask, removeTask, showTasks }