// CSS modules
import indexScss from "./index.scss";
import { ModalControl, DynamicDOMReference } from "./modules/dom";
import { ModalEventListener, DynamicDOMEvent } from "./modules/eventListener";
import { buildTask } from "./modules/buildTask";
import { buildProject } from "./modules/buildProject";
import { buildHeader } from "./modules/buildHeader";
import { buildPage } from "./modules/buildPage";

document.addEventListener("DOMContentLoaded", () => {
  const modalControl = new ModalControl();
  const modalEvents = new ModalEventListener(modalControl);
});

buildPage();
