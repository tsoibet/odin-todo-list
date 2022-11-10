import displayAddTodo from "./displayAddTodo.js";
import { todoItemDOM } from "./DOMmanipulation.js";
import { clearDOM } from "./DOMmanipulation.js";

export default function displayTodoList(todoList, projectList) {

    clearDOM();
    displayAddTodo(todoList, projectList);
    if (todoList.allTodos) {
        todoList.allTodos.forEach((todoItem, index) => todoItemDOM(todoItem, index, todoList, projectList));
    }
    console.log(todoList.allTodos);

}