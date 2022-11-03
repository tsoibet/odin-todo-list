import addSamples from "./addSamples.js";
import TodoList from "./classTodoList.js";
import displayTodoList from "./displayTodoList.js";
import homepageDOM from "./DOMmanipulation.js";

export let defaultList = new TodoList([]);

export default function pageLoad() {

    homepageDOM();
    addSamples();
    displayTodoList(defaultList.allTodos);

}