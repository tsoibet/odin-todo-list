import { addWeeks, format } from "date-fns";
import Todo from "./classTodo.js";

export default function addSamples(todoList, projectList) {

    const today = new Date();

    let sampleTodo1 = new Todo("(Sample) Workout", "abs & upper arms", format(today, "yyyy-MM-dd"), false, false, projectList.allProjects[0]);
    let sampleTodo2 = new Todo("(Sample) Finish Project: Todo List", "The Odin Project", "2022-11-15", true, true, projectList.allProjects[1]);
    let sampleTodo3 = new Todo("(Sample) Move on to next chapter", "Linting", "", false, false, projectList.allProjects[1]);
    let sampleTodo4 = new Todo("(Sample) Write weekly report", "", format(addWeeks(today, 1), "yyyy-MM-dd"), true, false, projectList.allProjects[2]);
    
    todoList.allTodos = [sampleTodo1, sampleTodo2, sampleTodo3, sampleTodo4];

    console.log("Samples added.")

}
