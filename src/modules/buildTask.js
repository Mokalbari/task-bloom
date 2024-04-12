import { format, set } from "date-fns";
import { DOMElement, appendToParent, setContent } from "./dom";
import { Task } from "./taskManager";
import { svgBundle } from "./utils";

export let taskList = [];

const content = document.querySelector("#content");

export const createNewTask = (title, description, dueDate, priority) => {
  const newTask = new Task(title, description, dueDate, priority);
  taskList.push(newTask);
  console.table(taskList);
};

const setPriority = (object, element) => {
  switch (object) {
    case "High":
      element.className = "task high";
      break;

    case "Medium":
      element.className = "task medium";
      break;

    case "Low":
      element.className = "task low";
      break;

    default:
      element.className = "task";
      break;
  }
};

export const buildTask = () => {
  content.textContent = "";
  for (let i = 0; i < taskList.length; i++) {
    const divTask = new DOMElement("div", "class").setAttributeValue("task");
    const divTaskTitle = new DOMElement("div", "class").setAttributeValue(
      "task__title"
    );
    const titleH3 = new DOMElement("h3").setAttributeValue();
    setContent(titleH3, "textContent", taskList[i].title);
    const titleP = new DOMElement("p").setAttributeValue();
    setContent(titleP, "textContent", taskList[i].description);

    const divTaskControl = new DOMElement("div", "class").setAttributeValue(
      "task__control"
    );
    const divTaskControlDate = new DOMElement("div", "class").setAttributeValue(
      "task__control--date"
    );
    const dateP1 = new DOMElement("p").setAttributeValue();
    setContent(dateP1, "textContent", "Due date:");

    const dateP2 = new DOMElement("p").setAttributeValue();
    setContent(
      dateP2,
      "textContent",
      format(taskList[i].dueDate, "dd-MM-yyyy")
    );

    const divTaskControlSvg = new DOMElement("div", "class").setAttributeValue(
      "task__control--svg"
    );
    setContent(divTaskControlSvg, "innerHTML", svgBundle());

    setPriority(taskList[i].priority, divTask);
    appendToParent(content, divTask);
    appendToParent(divTask, divTaskTitle);
    appendToParent(divTaskTitle, titleH3);
    appendToParent(divTaskTitle, titleP);
    appendToParent(divTask, divTaskControl);
    appendToParent(divTaskControl, divTaskControlDate);
    appendToParent(divTaskControlDate, dateP1);
    appendToParent(divTaskControlDate, dateP2);
    appendToParent(divTaskControl, divTaskControlSvg);
  }
};
