import Todo from "./classTodo.js";
import displayTodoList from "./displayTodoList";

export default function operateTodo(operation, todoList, index = "") {
    
    if (operation === "add") {

        let titleInput = document.forms["addTodoForm"]["titleInput"].value;
        let descriptionInput = document.forms["addTodoForm"]["descriptionInput"].value;
        let dueDateInput = document.forms["addTodoForm"]["dueDateInput"].value;
        let projectInput = document.forms["addTodoForm"]["projectInput"].value;
        let priorityInput = document.forms["addTodoForm"]["priorityInput"].checked;

        todoList.add(new Todo(titleInput, descriptionInput, dueDateInput, priorityInput, false, projectInput));

    } else if (operation === "delete") {

        todoList.delete(index);

    } else if (operation === "edit") {

        let titleInput = document.forms["editTodoForm"]["titleInput"].value;
        let descriptionInput = document.forms["editTodoForm"]["descriptionInput"].value;
        let dueDateInput = document.forms["editTodoForm"]["dueDateInput"].value;
        let projectInput = document.forms["editTodoForm"]["projectInput"].value;
        let priorityInput = document.forms["editTodoForm"]["priorityInput"].checked;

        todoList.edit(index, new Todo(titleInput, descriptionInput, dueDateInput, priorityInput, todoList.allTodos[index]["status"], projectInput));

    } else if (operation === "changeStatus") {

        todoList.edit(index, new Todo(todoList.allTodos[index]["title"], todoList.allTodos[index]["description"], todoList.allTodos[index]["dueDate"], todoList.allTodos[index]["priority"], !(todoList.allTodos[index]["status"]), todoList.allTodos[index]["project"]));

    }

    displayTodoList(todoList);
    return false;

}
