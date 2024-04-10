// Utility function
// These will be used in other class and functions
// Add new utilities here

export const setUniqueID = () => {
  return Math.floor(Math.random() * Date.now());
};

// New task or modification, checks field validation
export const checkInputString = (value) => {
  if (typeof value !== "string") {
    throw new Error("Your input must be a string");
  } else if (value.length < 2) {
    throw new Error("Your input must be at least two letters long.");
  } else {
    return true;
  }
};

export const checkInputNumber = (value, minValue, maxValue) => {
  if (typeof value !== "number" || value < minValue || value > maxValue) {
    throw new Error(
      `Your input must be a number between ${minValue} and ${maxValue}`
    );
  } else {
    return true;
  }
};

export const checkInputDate = (value) => {
  if (!(value instanceof Date)) {
    throw new Error("Due date must be a valid Date object.");
  } else {
    return true;
  }
};

export const toCamelCase = (str) => {
  if (typeof str !== "string") {
    throw new Error("Your input must be a sentence.");
  } else {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  }
};

// Media between event listener and Task class
export const createNewTask = (title, description, dueDate, priority) => {
  const newTask = new Task(title, description, dueDate, priority);
  taskList.push(newTask);
};
