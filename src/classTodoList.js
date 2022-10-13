export default class TodoList {

    constructor(allTodos) {
        this._allTodos = allTodos;
    }

    get allTodos() {
        return this._allTodos;
    }

    set allTodos(listInput) {
        this._allTodos = listInput;
    }

    add(todoItem) {
        this.allTodos.push(todoItem);
    }

    delete(todoItem) {
        this.allTodos.splice(this.allTodos.indexOf(todoItem), 1);
    }

    edit(todoItem, newTodoItem) {
        this.allTodos[this.allTodos.indexOf(todoItem)] = newTodoItem;
    }

}