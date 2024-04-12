import { startOfDay } from "date-fns/fp/startOfDay";
import { checkInputString } from "./utils";

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
  }
}

const wrapper = document.querySelector(".wrapper");

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

// Something to create a tag and an attribute
// Something to put textContent / innerHTML inside -> Altérer l'élément
// Something to append to DOM

class CreateDOMElement {
  #tagName;
  #attribute;
  constructor(tagName, attribute) {
    this.#tagName = tagName;
    this.#attribute = attribute;
  }

  get tagName() {
    return this.#tagName;
  }

  get attribute() {
    return this.#attribute;
  }

  setAttributeValue(attributeValue) {
    const element = document.createElement(this.#tagName);
    element.setAttribute(this.#attribute, attributeValue);
    return element;
  }
}

const setContent = (element, method, str) => {
  if (checkInputString(str)) {
    if (method === "innerHTML") {
      return (element.innerHTML = str);
    } else if (method === "textContent") {
      return (element.textContent = str);
    }
  }
};

const appendToDOM = (parent, child) => {
  return parent.appendChild(child);
};
