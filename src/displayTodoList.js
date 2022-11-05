import displayAddTodo from "./displayAddTodo.js";
import { todoItemDOM } from "./DOMmanipulation.js";
import { clearDOM } from "./DOMmanipulation.js";

export default function displayTodoList(todoList) {

    clearDOM();
    displayAddTodo(todoList);
    if (todoList.allTodos) {
        todoList.allTodos.forEach((todoItem, index) => todoItemDOM(todoItem, index));
    }

}