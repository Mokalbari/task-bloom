import { buildTask, taskList } from "./buildTask";
import { buildHeader } from "./buildHeader";
import { userInterface } from "./dom";
import { buildProject } from "./buildProject";
import { checkDate, checkProject } from "./checkInput";
import { projectList } from "./buildProject";

const clearPage = () => {
  userInterface.content.textContent = "";
  userInterface.sidebarProjects.textContent = "";
};

// Cette fonction applique un filtre sur la date avant de build la task.
const applyFilter = (value) => {
  if (["today", "week", "all"].includes(value)) {
    const filteredTasks = checkDate(taskList, value);
    buildTask(filteredTasks);
  } else {
    const filteredTasks = checkProject(taskList, value);
    buildTask(filteredTasks);
  }
};

export const buildPage = (value) => {
  clearPage();
  buildHeader(value);
  buildProject();
  applyFilter(value);
};
