import { generateArr, generateSelector, renderArray } from "./helpers.js";
import { bubbleSort, insertSort, selectionSort } from "./sort-algos.js";

const STARTING_SPEED = 80;
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

const disableSortButtons = (disable) => {
  const buttons = document.querySelectorAll(".sort-button");
  buttons.forEach((button) => (button.disabled = disable));
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
    disableSortButtons(true);
    await bubbleSort(initialArray, initialArraySelector);
  });

  const selectionSortButton = document.querySelector(".selection-sort-button");
  selectionSortButton.addEventListener("click", async () => {
    disableSortButtons(true);
    await selectionSort(initialArray, initialArraySelector);
  });

  const insertSortButton = document.querySelector(".insert-sort-button");
  insertSortButton.addEventListener("click", async () => {
    disableSortButtons(true);
    await insertSort(initialArray, initialArraySelector);
  });

  const initNewArrayButton = document.querySelector(".reset-array-button");
  initNewArrayButton.addEventListener("click", () => {
    document.querySelector(`.${initialArraySelector}`).remove();
    initArray();
    disableSortButtons(false);
  });
};

addListeners();
initArray();
