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

export const swapElements = async (arr, targetIndex, swapIndex, selector) => {
  const container = document.querySelector(`.${selector}`);

  if (container) {
    const iEl = container.querySelector(`.element${targetIndex}`);
    const jEl = container.querySelector(`.element${swapIndex}`);

    if (iEl && jEl) {
      iEl.classList.add("swap-element");
      await delay(sortSpeed);
      jEl.classList.add("swap-target");
      await delay(sortSpeed);
      iEl.style.height = `${arr[swapIndex] * HEIGHT_K}px`;
      await delay(sortSpeed);
      jEl.style.height = `${arr[targetIndex] * HEIGHT_K}px`;
      await delay(sortSpeed);
      iEl.classList.remove("swap-element");
      jEl.classList.remove("swap-target");
    }
  }

  const t = arr[swapIndex];
  arr[swapIndex] = arr[targetIndex];
  arr[targetIndex] = t;
};

export const copyElement = async (arr, targetIndex, copyIndex, selector) => {
  const container = document.querySelector(`.${selector}`);

  if (container) {
    const targetEL = container.querySelector(`.element${targetIndex}`);
    const copyEl = container.querySelector(`.element${copyIndex}`);

    if (targetEL && copyEl) {
      targetEL.classList.add("swap-element");
      await delay(sortSpeed);
      copyEl.classList.add("swap-target");
      await delay(sortSpeed);
      targetEL.style.height = `${arr[copyIndex] * HEIGHT_K}px`;
      await delay(sortSpeed);
      targetEL.classList.remove("swap-element");
      copyEl.classList.remove("swap-target");
    }
  }

  arr[targetIndex] = arr[copyIndex];
};

export const setElementValue = async (arr, targetIndex, value, selector) => {
  const container = document.querySelector(`.${selector}`);

  if (container) {
    const targetEL = container.querySelector(`.element${targetIndex}`);
    targetEL.style.height = `${value * HEIGHT_K}px`;
    await delay(sortSpeed);
  }
};
