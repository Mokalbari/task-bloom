import { buildTask } from "./buildTask";
import { buildHeader } from "./buildHeader";
import { userInterface } from "./dom";
import { buildProject } from "./buildProject";

export const buildPage = () => {
  userInterface.content.textContent = "";
  userInterface.sidebarLinks.textContent = "";
  buildHeader();
  buildProject();
  buildTask();
};
