export class ModalDomReference {
  constructor() {
    // new task dom reference
    this.openNewTaskBtn = document.querySelector("#openNewTaskBtn");
    this.closeNewTaskBtn = document.querySelector("#closeNewTaskBtn");
    this.newTaskDialog = document.querySelector("#newTaskDialog");
    this.newTaskForm = document.querySelector("#newTaskForm");
    // new project dom reference
    this.openNewProjectBtn = document.querySelector("#openNewProjectBtn");
    this.closeNewProjectBtn = document.querySelector("#closeNewProjectBtn");
    this.newProjectDialog = document.querySelector("#newProjectDialog");
    this.newProjectForm = document.querySelector("#newProjectForm");
  }
}

export class ModalControl extends ModalDomReference {
  constructor() {
    super();
    this.openNewTaskModal();
    this.closeNewTaskModal();
    this.openNewProjectModal();
    this.closeNewProjectModal();
  }

  openNewTaskModal() {
    this.newTaskDialog.showModal();
  }

  closeNewTaskModal() {
    this.newTaskDialog.close();
  }

  openNewProjectModal() {
    this.newProjectDialog.showModal();
  }

  closeNewProjectModal() {
    this.newProjectDialog.close();
  }
}
