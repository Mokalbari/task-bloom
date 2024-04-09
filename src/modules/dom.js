import { Task } from "./taskManager";

let taskList = [];

export class ModalDomReference {
  constructor() {
    this.openModalBtn = document.querySelector("#openModalBtn");
    this.closeModalBtn = document.querySelector("#closeModalBtn");
    this.modalDialogBox = document.querySelector("#modalDialogBox");
    this.formContent = document.querySelector("#formContent");
  }
}

export class ModalEvents extends ModalDomReference {
  constructor() {
    super();
    this.initEvent();
    this.closeModal();
    this.submitForm();
  }

  initEvent() {
    this.openModalBtn.addEventListener("click", () => {
      this.modalDialogBox.showModal();
    });
  }

  closeModal() {
    this.closeModalBtn.addEventListener("click", () => {
      this.modalDialogBox.close();
    });
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
      console.table(taskList);
    });
  }
}
