import Todo from "./classTodo.js";

export default function addSamples(todoList) {

    let sampleTodo1 = new Todo("Sample Title 1", "sample 1", "2022-10-11", false, false, "All");
    let sampleTodo2 = new Todo("Sample Title 2", "sample 2", "2022-10-10", false, true, "All");
    let sampleTodo3 = new Todo("Sample Title 3", "sample 3", "2022-10-09", true, false, "All");
    
    todoList.add(sampleTodo1);
    todoList.add(sampleTodo2);
    todoList.add(sampleTodo3);

}
