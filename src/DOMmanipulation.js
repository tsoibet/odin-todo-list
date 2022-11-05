import operateTodo from "./operateTodo";

export default function homepageDOM() {

    const body = document.querySelector("body");

    const container = document.createElement("div");
    container.classList.add('container');

    const header = document.createElement("div");
    header.classList.add('header');
    header.textContent = "The Odin Project: Todo List";
    container.appendChild(header);

    const main = document.createElement("div");
    main.classList.add('main');

    const sidebar = document.createElement("div");
    sidebar.classList.add('sidebar');
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const allTodos = document.createElement("li");
    allTodos.textContent = "All";
    ul.appendChild(allTodos);
    const today = document.createElement("li");
    today.textContent = "Today";
    ul.appendChild(today);
    const thisWeek = document.createElement("li");
    thisWeek.textContent = "This week";
    ul.appendChild(thisWeek);
    nav.appendChild(ul);
    sidebar.appendChild(nav);
    main.appendChild(sidebar);

    const content = document.createElement("div");
    content.classList.add('content');
    const projectTitle = document.createElement("div");
    projectTitle.classList.add('projectTitle');
    projectTitle.textContent = "All";
    content.appendChild(projectTitle);
    const todoItems = document.createElement("div");
    todoItems.classList.add('todoItems');
    content.appendChild(todoItems);
    main.appendChild(content);

    container.appendChild(main);
    body.appendChild(container);

}

export function clearDOM() {
    const todoItems = document.querySelector(".todoItems");
    todoItems.textContent = "";
}

export function addTodoDOM(todoList) {

    const todoItems = document.querySelector(".todoItems");

    const addTodoForm = document.createElement("form");
    addTodoForm.name = "addTodoForm";
    addTodoForm.onsubmit = () => operateTodo("add", todoList);

    const addTodo = document.createElement("div");
    addTodo.classList.add('todoItem');
    addTodo.id = generateId("add");
    addTodoForm.appendChild(addTodo);

    todoItems.appendChild(addTodoForm);

    todoCompleteButtonDOM(addTodo.id);

    const details = document.createElement("div");
    details.classList.add("details");
    const detailsLeft = document.createElement("div");
    detailsLeft.classList.add("left");
    details.appendChild(detailsLeft);
    const detailsRight = document.createElement("div");
    detailsRight.classList.add("right");
    details.appendChild(detailsRight);
    addTodo.appendChild(details);

    todoDeleteButtonDOM(addTodo.id);

    const left = document.querySelector(`#todo-add .left`);
    const titleInput = document.createElement("input");
    titleInput.classList.add("title");
    titleInput.classList.add("input");
    titleInput.type = "text";
    titleInput.name = "titleInput";
    titleInput.id = "titleInput";
    titleInput.required = true;
    left.appendChild(titleInput);

    const descriptionInput = document.createElement("input");
    descriptionInput.classList.add("description");
    descriptionInput.classList.add("input");
    descriptionInput.type = "text";
    descriptionInput.name = "descriptionInput";
    descriptionInput.id = "descriptionInput";
    left.appendChild(descriptionInput);

    const otherDetails = document.createElement("div");
    otherDetails.classList.add("otherDetails");

    const dueDateInput = document.createElement("input");
    dueDateInput.classList.add("dueDate");
    dueDateInput.classList.add("input");
    dueDateInput.type = "date";
    dueDateInput.name = "dueDateInput";
    dueDateInput.id = "dueDateInput";
    otherDetails.appendChild(dueDateInput);

    const projectInput = document.createElement("input");
    projectInput.classList.add("project");
    projectInput.classList.add("input");
    projectInput.type = "text";
    projectInput.name = "projectInput";
    projectInput.id = "projectInput";
    otherDetails.appendChild(projectInput);

    const priorityInput = document.createElement("input");
    priorityInput.classList.add("priority");
    priorityInput.classList.add("input");
    priorityInput.type = "checkbox";
    priorityInput.name = "priorityInput";
    priorityInput.id = "priorityInput";
    otherDetails.appendChild(priorityInput);

    left.appendChild(otherDetails);

    const right = document.querySelector(`#todo-add .right`);
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Add";
    right.appendChild(submitButton);

}

export function todoItemDOM(todo, index) {

    const todoItems = document.querySelector(".todoItems");
    const todoItem = document.createElement("div");
    todoItem.classList.add('todoItem');
    todoItem.id = generateId(index);
    todoItems.appendChild(todoItem);

    todoCompleteButtonDOM(todoItem.id);

    const details = document.createElement("div");
    details.classList.add("details");
    const detailsLeft = document.createElement("div");
    detailsLeft.classList.add("left");
    details.appendChild(detailsLeft);
    const detailsRight = document.createElement("div");
    detailsRight.classList.add("right");
    details.appendChild(detailsRight);
    todoItem.appendChild(details);

    todoDeleteButtonDOM(todoItem.id);

    for (let property in todo) {
        todoPropertyDOM(index, trimPropertyName(property), todo[property]);
    }

}

function todoCompleteButtonDOM(id){

    const parent = document.querySelector(`#${id}`);
    const completeButton = document.createElement("div");
    completeButton.classList.add("button");
    completeButton.classList.add("complete");
    parent.appendChild(completeButton);

}

function todoPropertyDOM(index, propertyName, propertyValue) {

    if (propertyName === "status") {
        if (propertyValue) {
            const todoItem = document.querySelector(`#todo-${index}`);
            todoItem.classList.add("completed");
        }
    } else if (propertyName === "project") {
        const parent = document.querySelector(`#todo-${index} .right`);
        const property = document.createElement("div");
        property.classList.add(propertyName);
        property.textContent = propertyValue;
        parent.appendChild(property);
    } else {
        if (propertyValue) {
            const parent = document.querySelector(`#todo-${index} .left`);
            if (propertyName === "priority") {
                parent.classList.add("important");
            } else {
                const property = document.createElement("div");
                property.classList.add(propertyName);
                property.textContent = propertyValue;
                parent.appendChild(property);
            }
        }
    }

}

function todoDeleteButtonDOM(id){

    const parent = document.querySelector(`#${id} .right`);
    const deleteButton = document.createElement("div");
    deleteButton.classList.add("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "X";
    parent.appendChild(deleteButton);

}

function generateId(index) {
    return `todo-${index}`;
}

function trimPropertyName(rawName) {
    return rawName.slice(1);
}