import displayAddTodo from "./displayAddTodo.js";
import displayTodo from "./displayTodo.js";
import { clearDOM } from "./DOMmanipulation.js";

export default function displayTodoList(todoList) {

    clearDOM();
    displayAddTodo();
    if (todoList) {
        todoList.forEach((todoItem, index) => displayTodo(todoItem, index));
    }

}