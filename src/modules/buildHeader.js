import { projectList } from "./buildProject";
import { taskList } from "./buildTask";
import { DOMElement, appendToParent, setContent } from "./dom";
import { state } from "./eventListener";

const content = document.getElementById("content");

export const buildHeader = (value) => {
  const divHeader = new DOMElement("div");
  divHeader.addClass("content__header");

  const h2 = new DOMElement("h2");
  const p = new DOMElement("p");

  if (value === "week") {
    setContent(h2.element, "textContent", "Coming this week:");
    setContent(
      p.element,
      "textContent",
      "These are you upcomming tasks this week."
    );
  } else if (value === "all") {
    setContent(h2.element, "textContent", "All tasks:");
    setContent(
      p.element,
      "textContent",
      "These are all of your current tasks:"
    );
  } else if (value === "today") {
    setContent(h2.element, "textContent", "Today:");
    setContent(
      p.element,
      "textContent",
      "This is what is scheduled for today:"
    );
  } else {
    const project = projectList.filter((i) => i.id === value);
    setContent(h2.element, "textContent", `${project[0].title}`);
    setContent(p.element, "textContent", `${project[0].description}`);
  }

  appendToParent(content, divHeader.element);
  appendToParent(divHeader.element, h2.element);
  appendToParent(divHeader.element, p.element);
};
