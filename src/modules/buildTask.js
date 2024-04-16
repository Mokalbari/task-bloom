import { format, set } from "date-fns";
import { DOMElement, appendToParent, setContent } from "./dom";
import { svgBundle } from "./utils";
import { checkInputDate, checkInputString } from "./checkInput";
import { setUniqueID, toCamelCase } from "./utils";

export let taskList = [];
const content = document.querySelector("#content");

export class Task {
  #id;
  #date;
  #title;
  #description;
  #dueDate;
  #priority;
  #project;

  constructor(title, description, dueDate, priority, project) {
    this.#id = setUniqueID();
    this.#date = new Date();
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#project = project;
  }
  get title() {
    return this.#title;
  }

  get description() {
    return this.#description;
  }

  get dueDate() {
    return this.#dueDate;
  }

  get priority() {
    return this.#priority;
  }

  get project() {
    return this.#project;
  }

  set project(value) {
    this.#project = toCamelCase(value);
  }

  get id() {
    return this.#id;
  }

  get date() {
    return format(this.#date, "dd-MM-yyyy");
  }

  set title(value) {
    if (checkInputString(value)) {
      this.#title = value;
    }
  }

  set description(value) {
    if (checkInputString(value)) {
      this.#description = value;
    }
  }

  set dueDate(value) {
    if (checkInputDate(value)) {
      this.#dueDate = value;
    }
  }

  set priority(value) {
    if (checkPriorityValue(value)) {
      this.#priority = value;
    }
  }
}

export const createNewTask = (title, description, dueDate, priority) => {
  const newTask = new Task(title, description, dueDate, priority);
  taskList.push(newTask);
  console.table(taskList);
};

export const buildTask = () => {
  content.textContent = "";
  for (let i = 0; i < taskList.length; i++) {
    // Create the container around a task and verify priority
    const divTask = new DOMElement("div");
    divTask.addClass("task");
    const priority = taskList[i].priority;
    divTask.addClass(priority);

    // Create the header part of the task
    const divTaskTitle = new DOMElement("div");
    divTaskTitle.addClass("task__title");
    const titleH3 = new DOMElement("h3");
    const titleP = new DOMElement("p");

    // Create the control part of the task
    const divTaskControl = new DOMElement("div");
    divTaskControl.addClass("task__control");

    // Module for the due date
    const divTaskControlDate = new DOMElement("div");
    divTaskControlDate.addClass("task__control--date");
    const dateP1 = new DOMElement("p");
    const dateP2 = new DOMElement("p");

    // Module for the svg
    const divTaskControlSvg = new DOMElement("div");
    divTaskControlSvg.addClass;

    // Adding content to the newly created elements.
    setContent(titleH3.element, "textContent", taskList[i].title);
    setContent(titleP.element, "textContent", taskList[i].description);
    setContent(dateP1.element, "textContent", "Due date:");
    setContent(
      dateP2.element,
      "textContent",
      format(taskList[i].dueDate, "dd-MM-yyyy")
    );
    setContent(divTaskControlSvg.element, "innerHTML", svgBundle());

    // Appending newly created elements to the DOM / parent.
    appendToParent(content, divTask.element);
    appendToParent(divTask.element, divTaskTitle.element);
    appendToParent(divTaskTitle.element, titleH3.element);
    appendToParent(divTaskTitle.element, titleP.element);
    appendToParent(divTask.element, divTaskControl.element);
    appendToParent(divTaskControl.element, divTaskControlDate.element);
    appendToParent(divTaskControlDate.element, dateP1.element);
    appendToParent(divTaskControlDate.element, dateP2.element);
    appendToParent(divTaskControl.element, divTaskControlSvg.element);
  }
};
