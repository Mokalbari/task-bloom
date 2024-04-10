import { Task, taskList } from "./taskManager";
import { createNewTask } from "./utils";

export class ModalEventListener {
  constructor(modalControl) {
    this.modalControl = modalControl;
    this.tieEventListener();
  }

  tieEventListener() {
    this.modalControl.openNewTaskBtn.addEventListener("click", () => {
      this.modalControl.openNewTaskModal();
    });

    this.modalControl.closeNewTaskBtn.addEventListener("click", () => {
      this.modalControl.closeNewTaskModal();
    });

    this.modalControl.newTaskForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const dueDate = document.getElementById("due-date").value;
      const priority = document.getElementById("priority").value;

      createNewTask(title, description, dueDate, priority);
      this.modalControl.closeNewTaskModal();
    });

    this.modalControl.openNewProjectBtn.addEventListener("click", () => {
      this.modalControl.openNewProjectModal();
    });

    this.modalControl.closeNewProjectBtn.addEventListener("click", () => {
      this.modalControl.closeNewProjectModal();
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
