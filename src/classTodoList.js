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

    delete(index) {
        this.allTodos.splice(index, 1);
    }

    edit(index, newTodoItem) {
        this.allTodos[index] = newTodoItem;
    }

}