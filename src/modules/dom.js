import { Task, taskList } from "./taskManager";

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
    this.openModal();
    this.closeModal();
  }

  openModal() {
    this.openNewTaskBtn.addEventListener("click", () => {
      this.newTaskDialog.showModal();
    });
  }

  closeModal() {
    this.closeNewTaskBtn.addEventListener("click", () => {
      this.newTaskDialog.close();
    });
  }
}
