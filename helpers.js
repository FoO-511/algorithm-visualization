export const asyncSetTimeout = async (fn, ms = 500) => {
  await new Promise((resolve) => setTimeout(resolve, ms));
  fn();
};

export const wait = (ms = 300) =>
  new Promise((resolve) => setTimeout(resolve, ms));