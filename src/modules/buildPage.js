import { buildTask } from "./buildTask";
import { buildHeader } from "./buildHeader";
import { userInterface } from "./dom";
import { buildProject } from "./buildProject";

const clearPage = () => {
  userInterface.content.textContent = "";
  userInterface.sidebarProjects.textContent = "";
};

export const buildPage = (value) => {
  clearPage();
  buildHeader(value);
  buildProject();
  buildTask();
};
