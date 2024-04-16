import { projectList } from "./buildProject";
import { taskList } from "./buildTask";
import { DOMElement, appendToParent, setContent } from "./dom";

const content = document.getElementById("content");

export const buildHeader = () => {
  const divHeader = new DOMElement("div");
  divHeader.addClass("content__header");

  const h2 = new DOMElement("h2");
  const p = new DOMElement("p");

  if (projectList.length > 0) {
    for (let i = 0; i < projectList.length; i++) {
      if (projectList[i].state) {
        setContent(h2.element, "textContent", projectList[i].title);
        setContent(
          p.element,
          "textContent",
          `${projectList[i].description}. You can add or manage Task to ${projectList[i].title}`
        );
        break;
      } else {
        setContent(h2.element, "textContent", "Today");
        setContent(
          p.element,
          "textContent",
          "Welcome! You can add or manage your global task, or start a new project."
        );
      }
    }
  } else {
    setContent(h2.element, "textContent", "Today");
    setContent(
      p.element,
      "textContent",
      "Welcome! You can add or manage your global task, or start a new project."
    );
  }
  appendToParent(content, divHeader.element);
  appendToParent(divHeader.element, h2.element);
  appendToParent(divHeader.element, p.element);
};
