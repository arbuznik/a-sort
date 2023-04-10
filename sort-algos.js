import { copyElement, setElementValue, swapElements } from "./helpers.js";

export const bubbleSort = async (array, selector) => {
  let sort = false;

  do {
    sort = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        await swapElements(array, i, i + 1, selector);
        sort = true;
      }
    }
  } while (sort);
};

export const selectionSort = async (array, selector) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    await swapElements(array, i, minIndex, selector);
  }
};

export const insertSort = async (array, selector) => {
  for (let i = 0; i < array.length; i++) {
    const temp = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > temp) {
      await copyElement(array, j + 1, j, selector);
      j--;
    }

    array[j + 1] = temp;
    await setElementValue(array, j + 1, temp, selector);
  }
};
