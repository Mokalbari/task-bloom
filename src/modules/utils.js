// Utility function
// These will be used in other class and functions
// Add new utilities here

export const setUniqueID = () => {
  return Math.floor(Math.random() * Date.now());
};

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
