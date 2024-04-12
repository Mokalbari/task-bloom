// CSS modules
import indexScss from "./index.scss";
import { Task } from "./modules/taskManager";
import {
  ModalControl,
  setContent,
  DOMElement,
  appendToDOM,
} from "./modules/dom";
import { ModalEventListener } from "./modules/eventListener";
import { buildTask, createNewTask } from "./modules/buildTask";
import { buildProject } from "./modules/buildProject";

document.addEventListener("DOMContentLoaded", () => {
  const modalControl = new ModalControl();
  const modalEvents = new ModalEventListener(modalControl);
  buildTask();
});

buildProject();
