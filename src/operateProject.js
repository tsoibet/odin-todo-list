import pageLoad from "./pageLoad";

export default function operateProject(operation, projectList, todoList) {

    if (operation === "add") {
        const input = document.forms["addProjectForm"]["addProjectInput"].value;
        projectList.add(input);
    }

    pageLoad(todoList, projectList);
    return false;

}