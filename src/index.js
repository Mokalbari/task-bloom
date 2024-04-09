// CSS modules
import indexScss from "./index.scss";
import { Task } from "./modules/taskManager";
import { ModalControl, ModalSubmission } from "./modules/dom";

document.addEventListener("DOMContentLoaded", () => {
  const modalInteraction = new ModalControl();
  const modalSubmission = new ModalSubmission();
});
