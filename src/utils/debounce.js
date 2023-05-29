export const debounce = (func) => {
  let timer;

  return (timeout) => {
    clearTimeout(timer);

    timer = setTimeout(func, timeout);
  }
}