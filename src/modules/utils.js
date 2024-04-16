export const setUniqueID = () => {
  return Math.floor(Math.random() * Date.now());
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

export const trimID = (value) => {
  return value.slice(3);
};
