import { Task, taskList } from "./taskManager";

export class ModalDomReference {
  constructor() {
    this.openModalBtn = document.querySelector("#openModalBtn");
    this.closeModalBtn = document.querySelector("#closeModalBtn");
    this.modalDialogBox = document.querySelector("#modalDialogBox");
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
    this.openModalBtn.addEventListener("click", () => {
      this.modalDialogBox.showModal();
    });
  }

  closeModal() {
    this.closeModalBtn.addEventListener("click", () => {
      this.modalDialogBox.close();
    });
  }
}

export class ModalSubmission extends ModalControl {
  constructor() {
    super();
    this.submitForm();
  }
  submitForm() {
    this.formContent.addEventListener("submit", (event) => {
      event.preventDefault();
      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const dueDate = document.getElementById("due-date").value;
      const priority = document.getElementById("priority").value;

      const newTask = new Task(title, description, dueDate, priority);
      this.modalDialogBox.close();
      taskList.push(newTask);
    });
  }
}
