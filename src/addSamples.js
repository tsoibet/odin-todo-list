import Todo from "./classTodo.js";
import { defaultList } from "./pageLoad.js";

export default function addSamples() {

    let testTodo1 = new Todo("Test Title 1", "Test Des 1", "20221011", false, false, "All");
    let testTodo2 = new Todo("Test Title 2", "Test Des 2", "20221010", false, true, "All");
    let testTodo3 = new Todo("Test Title 3", "Test Des 3", "20221009", true, false, "All");
    
    defaultList.add(testTodo1);
    defaultList.add(testTodo2);
    defaultList.add(testTodo3);

}
