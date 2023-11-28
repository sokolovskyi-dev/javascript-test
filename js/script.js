"use strict";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function each(arr, callback) {
  let total = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    total = callback(total, arr[i]);
  }
  return total;
}

function add(a, b) {
  return a + b;
}

function mult(a, b) {
  return a * b;
}

console.log(each(arr, add));
console.log(each(arr, mult));
