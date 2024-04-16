import { startOfDay, addYears, isAfter } from "date-fns";
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

export const checkPriorityValue = (value) => {
  if (value === "High" || value === "Medium" || value === "Low") {
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

export const checkStateInput = (value) => {
  if (typeof value === "boolean") {
    return true;
  }
};

export const checkProjectID = (value) => {
  if (value === "today" || value === "week" || value === "all") {
    return null;
  } else {
    return value;
  }
};

export const checkDateInput = (value) => {
  const today = startOfDay(new Date());
  const maxDate = addYears(new Date(), 10);
  const inputDate = startOfDay(new Date(value));
  if (inputDate < today) {
    alert("Enter a due date in the future.");
    return false;
  } else if (isAfter(inputDate, maxDate)) {
    alert("Add a date within a 10 year frame.");
    return false;
  } else {
    return true;
  }
};
