export default class ProjectList {

    constructor(allProjects = ["Personal", "Study", "Work"]) {
        this._allProjects = allProjects;
    }

    get allProjects() {
        return this._allProjects;
    }

    set allProjects(listInput) {
        this._allProjects = listInput;
    }

    add(projectName) {
        this.allProjects.push(projectName);
    }

    delete(index) {
        this.allProjects.splice(index, 1);
    }

    edit(index, newProjectName) {
        this.allProjects[index] = newProjectName;
    }

}