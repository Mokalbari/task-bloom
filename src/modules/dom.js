import { startOfDay } from "date-fns/fp/startOfDay";
import { checkInputString } from "./checkInput";

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
    // task space dom reference
    this.content = document.querySelector("#content");
    this.contentHeaderDate = document.querySelector("#content__header--date");
    this.contentHeaderDescription = document.querySelector(
      "#content__header--description"
    );
  }
}

export class SidebarReference {
  constructor() {
    this.sidebarLink = document.querySelector(".sidebar__a");
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

export class DOMElement {
  #element;

  constructor(tagName) {
    this.#element = document.createElement(tagName);
  }

  get element() {
    return this.#element;
  }

  setAttribute(name, value) {
    this.#element.setAttribute(name, value);
  }

  addClass(className) {
    this.#element.classList.add(className);
  }
}

export const setContent = (element, method, str) => {
  if (checkInputString(str)) {
    if (method === "innerHTML") {
      return (element.innerHTML = str);
    } else if (method === "textContent") {
      return (element.textContent = str);
    } else {
      throw new Error("Your input mustbe 'innerHTML' or 'textContent");
    }
  } else {
    throw new Error("Your input mustbe 'innerHTML' or 'textContent");
  }
};

export const appendToParent = (parent, child) => {
  return parent.appendChild(child);
};
