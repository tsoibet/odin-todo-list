import displayTodo from "./displayTodo.js";

export default function displayTodoList(todoList) {

    console.clear();
    todoList.forEach((todoItem) => displayTodo(todoItem));

}