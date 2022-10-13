export default class Todo {
    
    constructor(title, description, dueDate, priority, status, project) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._status = status;
        this._project = project;
    }

    get title() {
        return this._title;
    }
    get description() {
        return this._description;
    }
    get dueDate() {
        return this._dueDate;
    }
    get priority() {
        return this._priority;
    }
    get status() {
        return this._status;
    }
    get project() {
        return this._project;
    }

    set title(titleInput) {
        this._title = titleInput;
    }
    set description(descriptionInput) {
        this._description = descriptionInput;
    }
    set dueDate(dueDateInput) {
        this._dueDate = dueDateInput;
    }
    set priority(priorityInput) {
        this._priority = priorityInput;
    }
    set status(statusInput) {
        this._status = statusInput;
    }
    set project(projectInput) {
        this._project = projectInput;
    }

}