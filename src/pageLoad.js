import addSamples from "./addSamples.js";
import displayTodoList from "./displayTodoList.js";
import homepageDOM from "./DOMmanipulation.js";

export default function pageLoad(todoList, projectList) {

    homepageDOM(todoList, projectList);
    addSamples(todoList, projectList);
    displayTodoList(todoList, projectList);

}