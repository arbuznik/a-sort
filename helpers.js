import { arrayLength, HEIGHT_K, sortSpeed } from "./index.js";

export const delay = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const generateArr = (length) => {
  let arr = Array(length);
  for (let i = 0; i < length; i++) {
    arr[i] = Math.ceil(Math.random() * 100);
  }

  return arr;
};

export const generateSelector = () => {
  return `array${Math.floor(Math.random() * 1000000)}`;
};

const renderArrayElement = (val, containerSelector, index) => {
  const el = document.createElement("div");
  el.classList.add("array-element", `element${index}`);
  el.style.height = `${val * HEIGHT_K}px`;
  el.style.width = `calc(100vw / ${arrayLength})`;

  const containerEl = document.querySelector(`.${containerSelector}`);
  containerEl.append(el);
};

export const renderArray = (arr, selector) => {
  const arrayElement = document.createElement("div");
  arrayElement.classList.add("array", selector);
  arrayElement.style.height = `${100 * HEIGHT_K}px`;
  const container = document.querySelector(".main");
  container.prepend(arrayElement);
  arr.forEach((el, index) => renderArrayElement(el, selector, index));
};

export const swapElements = async (arr, i, j, selector) => {
  const container = document.querySelector(`.${selector}`);

  if (container) {
    const iEl = container.querySelector(`.element${i}`);
    const jEl = container.querySelector(`.element${j}`);

    if (iEl && jEl) {
      iEl.classList.add("swap-element");
      await delay(sortSpeed);
      jEl.classList.add("swap-target");
      await delay(sortSpeed);
      iEl.style.height = `${arr[j] * HEIGHT_K}px`;
      await delay(sortSpeed);
      jEl.style.height = `${arr[i] * HEIGHT_K}px`;
      await delay(sortSpeed);
      iEl.classList.remove("swap-element");
      jEl.classList.remove("swap-target");
    }
  }

  const t = arr[j];
  arr[j] = arr[i];
  arr[i] = t;
};
