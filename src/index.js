// CSS modules
import indexScss from "./index.scss";
import {
  ModalControl,
  setContent,
  DOMElement,
  appendToDOM,
} from "./modules/dom";
import { ModalEventListener } from "./modules/eventListener";
import { buildTask } from "./modules/buildTask";
import { buildProject } from "./modules/buildProject";
import { buildHeader } from "./modules/buildHeader";

document.addEventListener("DOMContentLoaded", () => {
  const modalControl = new ModalControl();
  const modalEvents = new ModalEventListener(modalControl);
  buildHeader();
  buildTask();
});

buildProject();
