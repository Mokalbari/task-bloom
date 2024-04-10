import { Task, taskList } from "./taskManager";
import { createNewTask } from "./utils";

export class ModalEventListener {
  constructor(modalDomReference) {
    this.modalDomReference = modalDomReference;
    this.tieEventListener();
  }

  tieEventListener() {
    this.modalDomReference.openNewTaskBtn.addEventListener("click", () => {
      this.modalDomReference.openNewTaskModal();
    });

    this.modalDomReference.closeNewTaskBtn.addEventListener("click", () => {
      this.modalDomReference.closeNewTaskModal();
    });

    this.modalDomReference.formContent.addEventListener("submit", (event) => {
      event.preventDefault();

      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const dueDate = document.getElementById("due-date").value;
      const priority = document.getElementById("priority").value;

      createNewTask(title, description, dueDate, priority);
      this.modalDomReference.closeNewTaskModal();
    });
  }
}

// getBookInfoForm.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const title = document.getElementById("title").value;
//     const author = document.getElementById("author").value;
//     const description = document.getElementById("description").value;
//     const pages = document.getElementById("pages").value;
//     const read = document.getElementById("read").checked;//
//     event.target.reset();
