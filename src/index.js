// CSS modules
import indexScss from "./index.scss";
import { Task } from "./modules/taskManager";
import { ModalControl } from "./modules/dom";
import { ModalEventListener } from "./modules/eventListener";

document.addEventListener("DOMContentLoaded", () => {
  const modalDomReference = new ModalControl();
  const modalInteraction = new ModalEventListener(modalDomReference);
});
