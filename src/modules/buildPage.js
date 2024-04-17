import { buildTask, taskList } from "./buildTask";
import { buildHeader } from "./buildHeader";
import { userInterface } from "./dom";
import { buildProject } from "./buildProject";
import { checkDate } from "./checkInput";

const clearPage = () => {
  userInterface.content.textContent = "";
  userInterface.sidebarProjects.textContent = "";
};

// Cette fonction applique un filtre sur la date avant de build la task.
const applyDateFilter = (value) => {
  const filteredTasks = checkDate(taskList, value);
  buildTask(filteredTasks);
};

export const buildPage = (value) => {
  clearPage();
  buildHeader(value);
  buildProject();
  applyDateFilter(value);
};
