import Todo from "./classTodo.js";

export default function addSamples(todoList) {

    let sampleTodo1 = new Todo("sample Title 1", "sample Des 1", "20221011", false, false, "All");
    let sampleTodo2 = new Todo("sample Title 2", "sample Des 2", "20221010", false, true, "All");
    let sampleTodo3 = new Todo("sample Title 3", "sample Des 3", "20221009", true, false, "All");
    
    todoList.add(sampleTodo1);
    todoList.add(sampleTodo2);
    todoList.add(sampleTodo3);

}
