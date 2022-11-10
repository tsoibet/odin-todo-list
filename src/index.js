import ProjectList from "./classProjectList.js";
import TodoList from "./classTodoList.js";
import pageLoad from "./pageLoad.js";
import './styles.css'

let allTodoList = new TodoList();
let allProjectList = new ProjectList();
pageLoad(allTodoList, allProjectList);

