import { swapElements } from "./helpers.js";

export const bubbleSort = async (array, selector) => {
  let arr = [...array];
  let sort = false;

  do {
    sort = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        await swapElements(arr, i, i + 1, selector);
        sort = true;
      }
    }
  } while (sort);

  return arr;
};

export const selectionSort = async (array, selector) => {
  let arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    await swapElements(arr, i, minIndex, selector);
    // const t = arr[minIndex];
    // arr[minIndex] = arr[i];
    // arr[i] = t;
  }

  return arr;
};

// const selectionSort = async (array) => {
//   let arr = [...array];
//
//   renderArray(arr, ".sorted-array");
//
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//
//     await swapElements(arr, minIndex, i, ".sorted-array");
//     // const t = arr[minIndex];
//     // arr[minIndex] = arr[i];
//     // arr[i] = t;
//   }
//
//   return arr;
// };
