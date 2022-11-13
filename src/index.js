import addSamples from "./addSamples.js";
import ProjectList from "./classProjectList.js";
import TodoList from "./classTodoList.js";
import { retrieveTodos, retrieveProjects, updateStorage } from "./localStorage.js";
import pageLoad from "./pageLoad.js";
import './styles.css'

let allTodoList = new TodoList();
let allProjectList = new ProjectList();

if (retrieveProjects() && retrieveTodos()) {
    allTodoList.allTodos = retrieveTodos();
    allProjectList.allProjects = retrieveProjects();
} else {
    addSamples(allTodoList, allProjectList);
    updateStorage(allTodoList, allProjectList);
}

pageLoad(allTodoList, allProjectList);
