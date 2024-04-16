import { buildTask, createNewTask } from "./buildTask";
import { buildProject, createNewProject, projectList } from "./buildProject";
import { buildPage } from "./buildPage";
import { userInterface } from "./dom";

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

      this.modalControl.newTaskForm.reset();
      createNewTask(title, description, dueDate, priority);
      buildPage();
      this.modalControl.closeNewTaskModal();
    });

    this.modalControl.openNewProjectBtn.addEventListener("click", () => {
      this.modalControl.openNewProjectModal();
    });

    this.modalControl.closeNewProjectBtn.addEventListener("click", () => {
      this.modalControl.closeNewProjectModal();
    });

    this.modalControl.newProjectForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const title = document.getElementById("titleProject").value;
      const description = document.getElementById("descriptionProject").value;

      createNewProject(title, description);
      buildPage();
      this.modalControl.newProjectForm.reset();
      this.modalControl.closeNewProjectModal();
    });
  }
}

export class DynamicDOMEvent {
  constructor() {
    this.content = userInterface.content;
    this.sidebarLinks = userInterface.sidebarLinks;
    this.tieEventListener();
  }

  tieEventListener() {
    this.sidebarLinks.addEventListener("click", (event) => {
      alert(event.target.id);
    });
  }
}
