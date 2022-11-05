import Todo from "./classTodo.js";
import displayTodoList from "./displayTodoList";

export default function operateTodo(operate, todoList, todo = {}, newTodo = {}) {
    
    if (operate === "add") {

        let titleInput = document.forms["addTodoForm"]["titleInput"].value;
        let descriptionInput = document.forms["addTodoForm"]["descriptionInput"].value;
        let dueDateInput = document.forms["addTodoForm"]["dueDateInput"].value;
        let projectInput = document.forms["addTodoForm"]["projectInput"].value;
        let priorityInput = document.forms["addTodoForm"]["priorityInput"].checked;

        todoList.add(new Todo(titleInput, descriptionInput, dueDateInput, priorityInput, false, projectInput));

    } else if (operate === "delete") {

        todoList.delete(todo);

    } else if (operate === "edit") {

        todoList.edit(todo, newTodo);

    }

    displayTodoList(todoList);
    return false;

}
