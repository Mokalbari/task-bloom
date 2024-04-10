import { format } from "date-fns";

import {
  setUniqueID,
  checkInputDate,
  checkInputNumber,
  checkInputString,
  toCamelCase,
} from "./utils";

export let taskList = [];

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
    if (checkInputNumber(value, 1, 3)) {
      this.#priority = value;
    }
  }
}

export class Project {
  #title;
  #description;
  #id;
  #date;
  constructor(title, description) {
    this.#title = title;
    this.#description = description;
    this.#id = toCamelCase(title);
    this.#date = new Date();
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
    if (checkInputString) {
      this.#description = value;
    }
  }
}
