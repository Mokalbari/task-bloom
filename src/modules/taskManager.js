import { format } from "date-fns";
import {
  setUniqueID,
  checkInputDate,
  checkInputNumber,
  checkInputString,
} from "./utils";

export class Task {
  #id;
  #date;
  #title;
  #description;
  #dueDate;
  #priority;

  constructor(title, description, dueDate, priority) {
    this.#id = setUniqueID();
    this.#date = new Date();
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
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
      this.#date = value;
    }
  }

  set priority(value) {
    if (checkInputNumber(value, 1, 3)) {
      this.#priority = value;
    }
  }
}
