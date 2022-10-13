export default function displayTodo(todoItem) {

    for (let property in todoItem) {
        console.log(`${property} : ${todoItem[property]}`);
    }

}
