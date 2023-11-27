"use strict";

// function findLargestNumber() {
//   let max;
//   for (const num of arguments) {
//     if (typeof num === "number") {
//       max = num;
//       break;
//     }
//   }
//   for (const num of arguments) {
//     if (typeof num === "number") {
//       if (num > max) {
//         max = num;
//       }
//     } else {
//       max = findLargestNumber(...num);
//     }
//   }

//   return max;
// }

// console.log(findLargestNumber([[1, 143], 5, 7], 6, 7, 8, 88, 123));

// const product = {
//     id, name, price, quantity,
// }

const product1 = { id: 1, name: "Apple", price: 0.5, quantity: 30 };
const product2 = { id: 2, name: "Banana", price: 0.3, quantity: 50 };

let inventory = [];

function addProduct(product) {
  return inventory.push(product);
}

function findProductById(id) {
  for (const product of inventory) {
    if (product.id === id) {
      return product;
    }
  }
  return null;
}

function updateProductQuantity(id, newQuantity) {
  for (const product of inventory) {
    if (product.id === id) {
      product.quantity = newQuantity;
    }
  }
}

function listAllProducts() {
  return console.log(inventory);
}

addProduct({ id: 1, name: "Apple", price: 0.5, quantity: 30 });
addProduct({ id: 2, name: "Banana", price: 0.3, quantity: 50 });
console.log(inventory);

console.log(findProductById(2));

updateProductQuantity(2, 45);
console.log(inventory);

listAllProducts();
