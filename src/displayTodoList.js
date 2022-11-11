import { addWeeks, isToday, isWithinInterval} from "date-fns";
import displayAddTodo from "./displayAddTodo.js";
import { todoItemDOM } from "./DOMmanipulation.js";
import { clearDOM } from "./DOMmanipulation.js";
import { projectTitleDOM } from "./DOMmanipulation.js";

export default function displayTodoList(todoList, projectList, projectToShow = "All") {

    clearDOM();
    displayAddTodo(todoList, projectList, projectToShow);
    projectTitleDOM(projectToShow);
    if (projectToShow === "All") {
        todoList.allTodos.forEach((todoItem, index) => todoItemDOM(todoItem, index, todoList, projectList, projectToShow));
    } else if (projectToShow === "Today") {
        todoList.allTodos.forEach((todoItem, index) => {     
            if (isToday(new Date(todoItem.dueDate))) {
                todoItemDOM(todoItem, index, todoList, projectList, projectToShow);
            }
        });
    } else if (projectToShow === "This week") {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const thisWeek = addWeeks(today, 1);
        thisWeek.setHours(0, 0, 0, 0);
        todoList.allTodos.forEach((todoItem, index) => {   
            const date = new Date(todoItem.dueDate);
            if (isWithinInterval(date, {
                start: today,
                end: thisWeek
            })) {
                todoItemDOM(todoItem, index, todoList, projectList, projectToShow);
            }
        });
    } else {
        todoList.allTodos.forEach((todoItem, index) => {     
            if (todoItem.project === projectToShow) {
                todoItemDOM(todoItem, index, todoList, projectList, projectToShow);
            }
        });
    }
    
}