import Todo from "./classTodo";

export function updateStorage(todoList, projectList) {
    localStorage.setItem("todos", JSON.stringify(todoList.allTodos));
    localStorage.setItem("projects", JSON.stringify(projectList.allProjects));
}

export function retrieveTodos() {
    let todoInstanceArray = [];
    let jsonArray = JSON.parse(localStorage.getItem("todos"));
    for (let item of jsonArray) {
        let instance = Object.assign(new Todo(), item);
        todoInstanceArray.push(instance);
    }
    return todoInstanceArray;
}

export function retrieveProjects() {
    return JSON.parse(localStorage.getItem("projects"));
}