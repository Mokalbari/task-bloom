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
    this.newTaskDialog.showModal();
  }

  closeModal() {
    this.newTaskDialog.close();
  }
}

export class ModalEventListener {
  constructor(modalDomReference) {
    this.modalDomReference = modalDomReference;
    this.tieEventListener();
  }

  tieEventListener() {
    this.modalDomReference.openNewTaskBtn.addEventListener("click", () => {
      this.modalDomReference.openModal();
    });

    this.modalDomReference.closeNewTaskBtn.addEventListener("click", () => {
      this.modalDomReference.closeModal();
    });
  }
}
