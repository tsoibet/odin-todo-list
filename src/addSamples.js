import TodoList from "./classTodoList.js";
import Todo from "./classTodo.js";
import operateTodo from "./operateTodo.js";

export default function addSamples() {

    let testList = new TodoList([]);
    let testTodo1 = new Todo("Test Title 1", "Test Des 1", "20221011", "1", false, "All");
    operateTodo("add", testList, testTodo1);
    let testTodo2 = new Todo("Test Title 2", "Test Des 2", "20221010", "1", true, "All");
    operateTodo("add", testList, testTodo2);
    let testTodo3 = new Todo("Test Title 3", "Test Des 3", "20221009", "2", true, "All");
    operateTodo("add", testList, testTodo3);

}
