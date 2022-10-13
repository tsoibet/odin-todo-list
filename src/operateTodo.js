import displayTodoList from "./displayTodoList";

export default function operateTodo(operate, targetList, todo, newTodo = {}) {
    
    if (operate === "add") {
        targetList.add(todo);
    } else if (operate === "delete") {
        targetList.delete(todo);
    } else if (operate === "edit") {
        targetList.edit(todo, newTodo);
    }

    displayTodoList(targetList.allTodos);

}
