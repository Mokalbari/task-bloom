import { projectList } from "./buildProject";
import { DOMElement, appendToParent, setContent } from "./dom";

const content = document.querySelector("#content");

export const buildHeader = () => {
  const divHeader = new DOMElement("div");
  divHeader.addClass("content__header");
  appendToParent(content, divHeader);

  const h2 = new DOMElement("h2");
  const p = new DOMElement("p");
  if (projectList) {
    for (let i = 0; i < projectList.length; i++) {
      if (projectList[i].state) {
        h2.textContent = projectList[i].title;
        p.textContent = `You can add or manage Task to ${projectList[i].title}`;
      }
    }
  } else {
    h2.textContent = "Today";
    p.textContent =
      "Welcome! You can add or manage your global task, or start a new project.";
  }
  appendToParent(divHeader, h2);
  appendToParent(divHeader, p);
};
