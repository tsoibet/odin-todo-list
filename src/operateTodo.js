import Todo from "./classTodo.js";
import displayTodoList from "./displayTodoList";
import { defaultList } from "./pageLoad.js";

export default function operateTodo(operate, targetList = defaultList, todo = {}, newTodo = {}) {
    
    if (operate === "add") {

        let titleInput = document.forms["addTodoForm"]["titleInput"].value;
        let descriptionInput = document.forms["addTodoForm"]["descriptionInput"].value;
        let dueDateInput = document.forms["addTodoForm"]["dueDateInput"].value;
        let projectInput = document.forms["addTodoForm"]["projectInput"].value;
        let priorityInput = document.forms["addTodoForm"]["priorityInput"].checked;

        targetList.add(new Todo(titleInput, descriptionInput, dueDateInput, priorityInput, false, projectInput));

    } else if (operate === "delete") {

        targetList.delete(todo);

    } else if (operate === "edit") {

        targetList.edit(todo, newTodo);

    }

    displayTodoList(targetList.allTodos);
    return false;

}
