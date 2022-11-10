import displayTodoList from "./displayTodoList";
import operateTodo from "./operateTodo";

export default function homepageDOM(todoList, projectList) {

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
    allTodos.addEventListener("click", function(){
        displayTodoList(todoList, projectList);
    });
    ul.appendChild(allTodos);

    for (let item of projectList.allProjects) {
        const project = document.createElement("li");
        project.textContent = item;
        project.addEventListener("click", function(){
            displayTodoList(todoList, projectList, item);
        });
        ul.appendChild(project);
    }

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
    projectTitle.id = "projectTitle";
    content.appendChild(projectTitle);
    const todoItems = document.createElement("div");
    todoItems.classList.add('todoItems');
    content.appendChild(todoItems);
    main.appendChild(content);

    container.appendChild(main);
    body.appendChild(container);

}

export function projectTitleDOM(project) {
    const projectTitle = document.querySelector("#projectTitle");
    projectTitle.textContent = project;
}

export function clearDOM() {
    const todoItems = document.querySelector(".todoItems");
    todoItems.textContent = "";
}

export function addTodoDOM(todoList, projectList) {

    const todoItems = document.querySelector(".todoItems");

    const addTodoForm = document.createElement("form");
    addTodoForm.name = "addTodoForm";
    addTodoForm.onsubmit = () => operateTodo("add", todoList, projectList);

    const addTodo = document.createElement("div");
    addTodo.classList.add('todoItem');
    addTodo.id = generateId("add");
    addTodoForm.appendChild(addTodo);
    todoItems.appendChild(addTodoForm);
    const wrapper = document.createElement("div");
    wrapper.classList.add('wrapper');
    addTodo.appendChild(wrapper);

    todoCompleteButtonDOM(addTodo.id);

    const details = document.createElement("div");
    details.classList.add("details");
    const detailsLeft = document.createElement("div");
    detailsLeft.classList.add("left");
    details.appendChild(detailsLeft);
    const detailsRight = document.createElement("div");
    detailsRight.classList.add("right");
    details.appendChild(detailsRight);
    wrapper.appendChild(details);

    todoDeleteButtonDOM(addTodo.id);

    const left = document.querySelector(`#todo-add .left`);
    const titleInput = document.createElement("input");
    titleInput.classList.add("title");
    titleInput.classList.add("input");
    titleInput.type = "text";
    titleInput.autocomplete = "off";
    titleInput.name = "titleInput";
    titleInput.id = "titleInput";
    titleInput.placeholder = "Title";
    titleInput.required = true;
    left.appendChild(titleInput);

    const descriptionInput = document.createElement("input");
    descriptionInput.classList.add("description");
    descriptionInput.classList.add("input");
    descriptionInput.type = "text";
    descriptionInput.autocomplete = "off";
    descriptionInput.name = "descriptionInput";
    descriptionInput.id = "descriptionInput";
    descriptionInput.placeholder = "Notes";
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

    const projectInput = document.createElement("select");
    projectInput.classList.add("project");
    projectInput.classList.add("input");
    projectInput.name = "projectInput";
    projectInput.id = "projectInput";
    for (let project of projectList.allProjects) {
        const option = document.createElement("option");
        option.value = project;
        option.textContent = project;
        projectInput.appendChild(option);
    }
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

export function editTodoDOM(id, index, todoList, projectList) {

    const todoItem = document.querySelector(`#${id}`);
    todoItem.textContent = "";

    const editTodoForm = document.createElement("form");
    editTodoForm.name = "editTodoForm";
    editTodoForm.onsubmit = () => operateTodo("edit", todoList, projectList, index);
    todoItem.appendChild(editTodoForm);

    const completeButton = document.createElement("div");
    completeButton.classList.add("button");
    completeButton.classList.add("complete");
    editTodoForm.appendChild(completeButton);

    const details = document.createElement("div");
    details.classList.add("details");

    const detailsLeft = document.createElement("div");
    detailsLeft.classList.add("left");
    details.appendChild(detailsLeft);

    const titleInput = document.createElement("input");
    titleInput.classList.add("title");
    titleInput.classList.add("input");
    titleInput.type = "text";
    titleInput.autocomplete = "off";
    titleInput.name = "titleInput";
    titleInput.id = "titleInput";
    titleInput.required = true;
    titleInput.value = todoList.allTodos[index]["title"];
    detailsLeft.appendChild(titleInput);

    const descriptionInput = document.createElement("input");
    descriptionInput.classList.add("description");
    descriptionInput.classList.add("input");
    descriptionInput.type = "text";
    descriptionInput.autocomplete = "off";
    descriptionInput.name = "descriptionInput";
    descriptionInput.id = "descriptionInput";
    descriptionInput.value = todoList.allTodos[index]["description"];
    detailsLeft.appendChild(descriptionInput);

    const otherDetails = document.createElement("div");
    otherDetails.classList.add("otherDetails");

    const dueDateInput = document.createElement("input");
    dueDateInput.classList.add("dueDate");
    dueDateInput.classList.add("input");
    dueDateInput.type = "date";
    dueDateInput.name = "dueDateInput";
    dueDateInput.id = "dueDateInput";
    dueDateInput.value = todoList.allTodos[index]["dueDate"];
    otherDetails.appendChild(dueDateInput);

    const projectInput = document.createElement("select");
    projectInput.classList.add("project");
    projectInput.classList.add("input");
    projectInput.name = "projectInput";
    projectInput.id = "projectInput";
    for (let project of projectList.allProjects) {
        const option = document.createElement("option");
        option.value = project;
        option.textContent = project;
        projectInput.appendChild(option);
    }
    projectInput.value = todoList.allTodos[index]["project"];
    otherDetails.appendChild(projectInput);

    const priorityInput = document.createElement("input");
    priorityInput.classList.add("priority");
    priorityInput.classList.add("input");
    priorityInput.type = "checkbox";
    priorityInput.name = "priorityInput";
    priorityInput.id = "priorityInput";
    priorityInput.checked = todoList.allTodos[index]["priority"];
    otherDetails.appendChild(priorityInput);

    detailsLeft.appendChild(otherDetails);

    const detailsRight = document.createElement("div");
    detailsRight.classList.add("right");
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Edit";
    detailsRight.appendChild(submitButton);
    details.appendChild(detailsRight);
    editTodoForm.appendChild(details);

}

export function todoItemDOM(todo, index, todoList, projectList) {

    const todoItems = document.querySelector(".todoItems");
    const todoItem = document.createElement("div");
    todoItem.classList.add('todoItem');
    todoItem.id = generateId(index);
    todoItems.appendChild(todoItem);
    const wrapper = document.createElement("div");
    wrapper.classList.add('wrapper');
    todoItem.appendChild(wrapper);

    todoCompleteButtonDOM(todoItem.id, index, todoList, projectList);

    const details = document.createElement("div");
    details.classList.add("details");
    const detailsLeft = document.createElement("div");
    detailsLeft.classList.add("left");
    details.appendChild(detailsLeft);
    const detailsRight = document.createElement("div");
    detailsRight.classList.add("right");
    const operationButtons = document.createElement("div");
    operationButtons.classList.add("operationButtons");
    detailsRight.appendChild(operationButtons);
    details.appendChild(detailsRight);
    wrapper.appendChild(details);

    todoEditButtonDOM(todoItem.id, index, todoList, projectList);
    todoDeleteButtonDOM(todoItem.id, index, todoList);

    for (let property in todo) {
        todoPropertyDOM(index, trimPropertyName(property), todo[property]);
    }

}

function todoCompleteButtonDOM(id, index = "NA", todoList = {}, projectList = []){

    const parent = document.querySelector(`#${id} div`);
    const completeButton = document.createElement("div");
    completeButton.classList.add("button");
    completeButton.classList.add("complete");
    if (!isNaN(index)) {
        completeButton.addEventListener("click", function(){
            operateTodo("changeStatus", todoList, projectList, index);
        });
    }
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

function todoEditButtonDOM(id, index = "NA", todoList = {}, projectList = {}){

    const parent = document.querySelector(`#${id} .operationButtons`);
    const editButton = document.createElement("button");
    editButton.classList.add("button");
    editButton.classList.add("edit");
    editButton.textContent = "E";
    if (!isNaN(index)) {
        editButton.addEventListener("click", function() {
            editTodoDOM(id, index, todoList, projectList);
        });
    }
    parent.appendChild(editButton);

}

function todoDeleteButtonDOM(id, index = "NA", todoList = {}){

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "X";
    if (!isNaN(index)) {
        deleteButton.addEventListener("click", function() {
            operateTodo("delete", todoList, projectList, index);
        });
        const parent = document.querySelector(`#${id} .operationButtons`);
        parent.appendChild(deleteButton);
    } else {
        deleteButton.type = "reset";
        const parent = document.querySelector(`#${id} .right`);
        parent.appendChild(deleteButton);
    }

}

function generateId(index) {
    return `todo-${index}`;
}

function trimPropertyName(rawName) {
    return rawName.slice(1);
}