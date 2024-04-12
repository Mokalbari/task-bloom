import { DOMElement, appendToParent, setContent } from "./dom";
import { Project } from "./taskManager";

let projectList = [];

const sidebarLinks = document.querySelector(".sidebar__links");

export const createNewProject = (title, description) => {
  const newProject = new Project(title, description);
  projectList.push(newProject);
  console.table(projectList);
};

export const buildProject = () => {
  sidebarLinks.textContent = "";
  for (let i = 0; i < projectList.length; i++) {
    const li = new DOMElement("li");
    const a = new DOMElement("a");
    a.setAttribute("href", "#");
    setContent(a.element, "textContent", projectList[i].title);

    appendToParent(sidebarLinks, li.element);
    appendToParent(li.element, a.element);
  }
};
