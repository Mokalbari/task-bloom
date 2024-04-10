// CSS modules
import indexScss from "./index.scss";
import { Task } from "./modules/taskManager";
import { ModalControl, ModalEventListener } from "./modules/dom";

document.addEventListener("DOMContentLoaded", () => {
  const modalDomReference = new ModalControl();
  const modalInteraction = new ModalEventListener(modalDomReference);
});
