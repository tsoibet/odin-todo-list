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
    console.log("Retrieve todos:", todoInstanceArray);
    return todoInstanceArray;
}

export function retrieveProjects() {
    console.log("Retrieve projects:", JSON.parse(localStorage.getItem("projects")));
    return JSON.parse(localStorage.getItem("projects"));
}