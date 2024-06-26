import { buildTask, createNewTask, taskList } from "./buildTask";
import { buildProject, createNewProject, projectList } from "./buildProject";
import { buildPage } from "./buildPage";
import { userInterface } from "./dom";
import { trimID } from "./utils";
import { modifyTask } from "./controlTask";
import { checkDateInput } from "./checkInput";
import { startOfDay } from "date-fns";

// The state is used to control the header content on the page.
// It can have three main values: "today", "week", "all".
// Or it can have the id of the current working project.
export let state = "all";

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

      if (!checkDateInput(dueDate)) {
        return;
      }

      this.modalControl.newTaskForm.reset();
      createNewTask(title, description, dueDate, priority);
      buildPage(state);
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
      buildPage(state);
      this.modalControl.newProjectForm.reset();
      this.modalControl.closeNewProjectModal();
    });
    taskList.splice();
  }
}

export class DynamicDOMEvent {
  constructor() {
    this.content = userInterface.content;
    this.sidebarProjects = userInterface.sidebarProjects;
    this.sidebarDate = userInterface.sidebarDate;
    this.tieEventListener();
  }

  tieEventListener() {
    this.sidebarProjects.addEventListener("click", (event) => {
      state = event.target.id;
      buildPage(state);
    });

    this.sidebarDate.addEventListener("click", (event) => {
      state = event.target.id;
      buildPage(state);
    });

    this.content.addEventListener("click", (event) => {
      const eventTargetID = event.target.id;
      const ID = parseInt(trimID(event.target.id));
      modifyTask(eventTargetID, ID);
      buildPage(state);
    });
  }
}
