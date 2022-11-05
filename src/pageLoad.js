import addSamples from "./addSamples.js";
import displayTodoList from "./displayTodoList.js";
import homepageDOM from "./DOMmanipulation.js";

export default function pageLoad(todoList) {

    homepageDOM();
    addSamples(todoList);
    displayTodoList(todoList);

}