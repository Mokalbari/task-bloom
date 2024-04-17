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
    this.#dueDate = new Date(dueDate);
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

export const buildTask = (taskListToBuild) => {
  taskListToBuild.forEach((task) => {
    const divTask = new DOMElement("div");
    divTask.addClass("task");
    divTask.addClass(task.priority);

    if (task.check) {
      divTask.addClass("check");
    }

    const divTaskTitle = new DOMElement("div");
    divTaskTitle.addClass("task__title");
    const titleH3 = new DOMElement("h3");
    const titleP = new DOMElement("p");

    const divTaskControl = new DOMElement("div");
    divTaskControl.addClass("task__control");

    const divTaskControlDate = new DOMElement("div");
    divTaskControlDate.addClass("task__control--date");
    const dateP1 = new DOMElement("p");
    const dateP2 = new DOMElement("p");

    const divTaskControlButton = new DOMElement("div");
    divTaskControlButton.addClass("task__control--button");
    const checkButton = new DOMElement("button");
    checkButton.setAttribute("id", `val${task.id}`);
    const modifyButton = new DOMElement("button");
    modifyButton.setAttribute("id", `mod${task.id}`);
    const deleteButton = new DOMElement("button");
    deleteButton.setAttribute("id", `del${task.id}`);

    setContent(titleH3.element, "textContent", task.title);
    setContent(titleP.element, "textContent", task.description);
    setContent(dateP1.element, "textContent", "Due date:");
    setContent(
      dateP2.element,
      "textContent",
      format(task.dueDate, "dd-MM-yyyy")
    );
    setContent(checkButton.element, "textContent", "✔️");
    setContent(modifyButton.element, "textContent", "⚙️");
    setContent(deleteButton.element, "textContent", "✖️");

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
  });
};
