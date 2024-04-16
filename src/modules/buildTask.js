import { format, set } from "date-fns";
import { DOMElement, appendToParent, setContent, userInterface } from "./dom";
import { checkInputDate, checkInputString, checkProjectID } from "./checkInput";
import { setUniqueID, toCamelCase } from "./utils";
import { buildHeader } from "./buildHeader";
import { state } from "./eventListener";

export let taskList = [];
const content = userInterface.content;

export class Task {
  #id;
  #date;
  #title;
  #description;
  #dueDate;
  #priority;
  #project;
  #check;

  constructor(title, description, dueDate, priority) {
    this.#id = setUniqueID();
    this.#date = new Date();
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#project = checkProjectID(state);
    this.#check = false;
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

  get check() {
    return this.#check;
  }

  set check(value) {
    this.#check = value;
  }

  get project() {
    return this.#project;
  }

  set project(value) {
    if (getProjectID(value)) {
      this.#project = value;
    }
  }
}

export const createNewTask = (title, description, dueDate, priority) => {
  const newTask = new Task(title, description, dueDate, priority);
  taskList.push(newTask);
};

export const buildTask = () => {
  for (let i = 0; i < taskList.length; i++) {
    // Create the container around a task and verify priority
    const divTask = new DOMElement("div");
    divTask.addClass("task");
    const priority = taskList[i].priority;
    divTask.addClass(priority);
    const check = taskList[i].check;
    if (check) {
      divTask.addClass("check");
    }

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

    // Module for the Button
    const divTaskControlButton = new DOMElement("div");
    divTaskControlButton.addClass("task__control--button");

    const checkButton = new DOMElement("button");
    checkButton.setAttribute("id", `val${taskList[i].id}`);
    const modifyButton = new DOMElement("button");
    modifyButton.setAttribute("id", `mod${taskList[i].id}`);
    const deleteButton = new DOMElement("button");
    deleteButton.setAttribute("id", `del${taskList[i].id}`);

    // Adding content to the newly created elements.
    setContent(titleH3.element, "textContent", taskList[i].title);
    setContent(titleP.element, "textContent", taskList[i].description);
    setContent(dateP1.element, "textContent", "Due date:");
    setContent(
      dateP2.element,
      "textContent",
      format(taskList[i].dueDate, "dd-MM-yyyy")
    );
    setContent(checkButton.element, "textContent", "✔️");
    setContent(modifyButton.element, "textContent", "⚙️");
    setContent(deleteButton.element, "textContent", "✖️");

    // Appending newly created elements to the DOM / parent.
    appendToParent(content, divTask.element);
    appendToParent(divTask.element, divTaskTitle.element);
    appendToParent(divTaskTitle.element, titleH3.element);
    appendToParent(divTaskTitle.element, titleP.element);
    appendToParent(divTask.element, divTaskControl.element);
    appendToParent(divTaskControl.element, divTaskControlDate.element);
    appendToParent(divTaskControlDate.element, dateP1.element);
    appendToParent(divTaskControlDate.element, dateP2.element);
    appendToParent(divTaskControl.element, divTaskControlButton.element);
    appendToParent(divTaskControlButton.element, checkButton.element);
    appendToParent(divTaskControlButton.element, modifyButton.element);
    appendToParent(divTaskControlButton.element, deleteButton.element);
  }
};
