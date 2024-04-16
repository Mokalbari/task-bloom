import { buildTask } from "./buildTask";
import { buildHeader } from "./buildHeader";
import { userInterface } from "./dom";
import { buildProject } from "./buildProject";

const clearPage = () => {
  userInterface.content.textContent = "";
  userInterface.sidebarLinks.textContent = "";
};

export const buildPage = () => {
  clearPage();
  buildHeader();
  buildProject();
  buildTask();
};
