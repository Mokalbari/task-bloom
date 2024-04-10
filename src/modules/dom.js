export class ModalDomReference {
  constructor() {
    this.openNewTaskBtn = document.querySelector("#openNewTaskBtn");
    this.closeNewTaskBtn = document.querySelector("#closeNewTaskBtn");
    this.newTaskDialog = document.querySelector("#newTaskDialog");
    this.formContent = document.querySelector("#formContent");
  }
}

export class ModalControl extends ModalDomReference {
  constructor() {
    super();
    this.openNewTaskModal();
    this.closeNewTaskModal();
  }

  openNewTaskModal() {
    this.newTaskDialog.showModal();
  }

  closeNewTaskModal() {
    this.newTaskDialog.close();
  }
}
