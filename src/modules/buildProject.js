import { DOMElement, appendToParent, setContent, userInterface } from "./dom";
import { checkStateInput } from "./checkInput";
import { toCamelCase } from "./utils";

export let projectList = [];

const sidebarLinks = userInterface.sidebarLinks;

export class Project {
  #title;
  #description;
  #id;
  #date;
  #state;
  constructor(title, description) {
    this.#title = title;
    this.#description = description;
    this.#id = toCamelCase(title);
    this.#date = new Date();
    this.#state = false;
  }

  get title() {
    return `${this.#title}`;
  }

  get description() {
    return `${this.#description}`;
  }

  get date() {
    return `${format(this.#date, "dd-mm-yyyy")}`;
  }

  set description(value) {
    if (checkInputString(value)) {
      this.#description = value;
    }
  }

  get state() {
    return this.#state;
  }

  set state(value) {
    if (checkStateInput(value)) {
      this.#state = state;
    }
  }

  get id() {
    return this.#id;
  }
}

export const createNewProject = (title, description) => {
  const newProject = new Project(title, description);
  projectList.push(newProject);
};

export const buildProject = () => {
  for (let i = 0; i < projectList.length; i++) {
    const li = new DOMElement("li");
    const a = new DOMElement("a");
    a.setAttribute("href", "#");
    a.setAttribute("id", projectList[i].id);
    setContent(a.element, "textContent", projectList[i].title);

    appendToParent(sidebarLinks, li.element);
    appendToParent(li.element, a.element);
  }
};
