"use strict";

// /**
//  * Function returns initial value increased by change step
//  * @returns initial value increased by change step
//  */

// function myCounter() {
//   let counter = changeStep;
//   return function () {
//     return (initialValue += counter);
//   };
// }

// let initialValue = Number(prompt("Введите начальное зеначение счетчика"));
// let changeStep = Number(prompt("Шаг изменения счетчика"));

// const result1 = myCounter();
// const result2 = myCounter();
// const result3 = myCounter();

// alert(result1());
// alert(result2());
// alert(result3());

/**
 * Function returns initial value increased by change step
 * @returns initial value increased by change step
 */

function customCounter(initialValue, changeStep) {
  let counter = changeStep;
  return function () {
    return (initialValue += counter);
  };
}

const myCounter = customCounter(
  Number(prompt("Введите начальное зеначение счетчика")),
  Number(prompt("Шаг изменения счетчика"))
);

alert(myCounter());
alert(myCounter());
alert(myCounter());
