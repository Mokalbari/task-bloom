import { taskList } from "./buildTask";

export const modifyTask = (eventTarget, IDValue) => {
  if (eventTarget.includes("del")) {
    deleteTask(IDValue);
  } else if (eventTarget.includes("val")) {
    checkTask(IDValue);
  } else if (eventTarget.includes("mod")) {
  }
};

const findIndex = (IDValue) => {
  return taskList.findIndex((task) => task.id === IDValue);
};

const findTask = (IDValue) => {
  return taskList.filter((task) => task.id === IDValue);
};

const deleteTask = (IDValue) => {
  let taskIndex = findIndex(IDValue);
  if (taskIndex !== -1) {
    taskList.splice(taskIndex, 1);
  }
};

const checkTask = (IDValue) => {
  let task = findTask(IDValue);
  task[0].check ? (task[0].check = false) : (task[0].check = true);
};
