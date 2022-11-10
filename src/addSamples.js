import Todo from "./classTodo.js";

export default function addSamples(todoList, projectList) {

    let sampleTodo1 = new Todo("Sample Title 1", "sample 1", "2022-10-11", false, false, projectList.allProjects[0]);
    let sampleTodo2 = new Todo("Sample Title 2", "sample 2", "2022-10-10", false, true, projectList.allProjects[1]);
    let sampleTodo3 = new Todo("Sample Title 3", "sample 3", "2022-10-09", true, false, projectList.allProjects[2]);
    
    todoList.add(sampleTodo1);
    todoList.add(sampleTodo2);
    todoList.add(sampleTodo3);

}
