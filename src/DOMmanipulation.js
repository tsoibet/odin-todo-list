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

export function todoItemDOM(todo, index) {

    const todoItems = document.querySelector(".todoItems");
    const todoItem = document.createElement("div");
    todoItem.classList.add('todoItem');
    todoItem.id = generateId(index);
    todoItems.appendChild(todoItem);

    todoCompleteButtonDOM(index);

    const details = document.createElement("div");
    details.classList.add("details");
    const detailsLeft = document.createElement("div");
    detailsLeft.classList.add("left");
    details.appendChild(detailsLeft);
    const detailsRight = document.createElement("div");
    detailsRight.classList.add("right");
    details.appendChild(detailsRight);
    todoItem.appendChild(details);

    todoDeleteButtonDOM(index);

    for (let property in todo) {
        todoPropertyDOM(index, trimPropertyName(property), todo[property]);
    }

}

function todoCompleteButtonDOM(index){

    const parent = document.querySelector(`#${generateId(index)}`);
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

function todoDeleteButtonDOM(index){

    const parent = document.querySelector(`#${generateId(index)} .right`);
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