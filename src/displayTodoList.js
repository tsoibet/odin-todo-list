import displayAddTodo from "./displayAddTodo.js";
import { todoItemDOM } from "./DOMmanipulation.js";
import { clearDOM } from "./DOMmanipulation.js";
import { projectTitleDOM } from "./DOMmanipulation.js";

export default function displayTodoList(todoList, projectList, projectToShow = "All") {

    clearDOM();
    displayAddTodo(todoList, projectList);
    if (todoList.allTodos) {
        projectTitleDOM(projectToShow);
        if (projectToShow == "All") {
            todoList.allTodos.forEach((todoItem, index) => todoItemDOM(todoItem, index, todoList, projectList));
        } else {
            todoList.allTodos.forEach((todoItem, index) => {     
                if (todoItem.project === projectToShow) {
                    todoItemDOM(todoItem, index, todoList, projectList);
                }
            });
        }
    }
}