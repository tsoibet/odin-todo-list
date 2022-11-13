import Todo from "./classTodo.js";

export default function addSamples(todoList, projectList) {

    let sampleTodo1 = new Todo("Sample Title 1", "sample 1", "2022-11-11", false, false, projectList.allProjects[0]);
    let sampleTodo2 = new Todo("Sample Title 2", "sample 2", "2022-11-17", false, true, projectList.allProjects[1]);
    let sampleTodo3 = new Todo("Sample Title 3", "sample 3", "2022-11-18", true, false, projectList.allProjects[2]);
    let sampleTodo4 = new Todo("Sample Title 4", "sample 4", "2022-10-19", true, false, projectList.allProjects[2]);
    
    todoList.allTodos = [sampleTodo1, sampleTodo2, sampleTodo3, sampleTodo4];

    console.log("Samples added.")

}
