import { generateArr, generateSelector, renderArray } from "./helpers.js";
import { bubbleSort, selectionSort } from "./sort-algos.js";

const STARTING_SPEED = 20;
const STARTING_ARRAY_LENGTH = 100;
export const HEIGHT_K = 5;

let initialArray;
let initialArraySelector;
export let sortSpeed = STARTING_SPEED;
export let arrayLength = STARTING_ARRAY_LENGTH;

const initArray = () => {
  initialArraySelector = generateSelector();
  initialArray = generateArr(arrayLength);
  renderArray(initialArray, initialArraySelector);
};

const addListeners = () => {
  const speedSlider = document.querySelector(".speed-slider");
  speedSlider.value = sortSpeed;
  speedSlider.addEventListener(
    "input",
    (e) => (sortSpeed = 100 - e.target.value)
  );

  const lengthSlider = document.querySelector(".length-slider");
  lengthSlider.value = arrayLength;
  lengthSlider.addEventListener("input", (e) => (arrayLength = e.target.value));

  const bubbleSortButton = document.querySelector(".bubble-sort-button");
  bubbleSortButton.addEventListener("click", async () => {
    bubbleSort(initialArray, initialArraySelector);
    bubbleSortButton.disabled = true;
  });

  const selectionSortButton = document.querySelector(".selection-sort-button");
  selectionSortButton.addEventListener("click", async () => {
    selectionSort(initialArray, initialArraySelector);
    selectionSortButton.disabled = true;
  });

  const initNewArrayButton = document.querySelector(".reset-array-button");
  initNewArrayButton.addEventListener("click", () => {
    document.querySelector(`.${initialArraySelector}`).remove();
    initArray();
    bubbleSortButton.disabled = false;
    selectionSortButton.disabled = false;
  });
};

addListeners();
initArray();
