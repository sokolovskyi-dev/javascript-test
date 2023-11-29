"use strict";

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function each(arr, callback) {
//   let total = arr[0];
//   for (let i = 1; i < arr.length; i += 1) {
//     total = callback(total, arr[i]);
//   }
//   return total;
// }

// function add(a, b) {
//   return a + b;
// }

// function mult(a, b) {
//   return a * b;
// }

// console.log(each(arr, add));
// console.log(each(arr, mult));

// function createProduct(obj, callback) {
//   const product = {
//     id: Date.now(),
//     ...obj,
//   };
//   callback(product);
// }

// function logProduct(obj) {
//   console.log(obj);
// }

// function logTotalPrice({ price, quantity }) {
//   console.log(`Total price ${price * quantity}`);
// }

// createProduct({ name: "qwe", price: 30, quantity: 10 }, logProduct);
// createProduct({ name: "qwe", price: 20, quantity: 10 }, logTotalPrice);

const TRANSACTION_LIMIT = 1000;

const account = {
  username: "Jacob",
  balance: 400,

  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`❌❌❌Transaction Limit is  ${TRANSACTION_LIMIT}`);
      return;
    } else if (this.balance < amount) {
      onError("❌❌❌Not Enough money in the account");
      return;
    }

    this.balance -= amount;
    onSuccess(`😁😁😁Transaction complete ${amount}, balance: ${this.balance}`);
  },

  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`❌❌❌Transaction Limit is  ${TRANSACTION_LIMIT}`);
      return;
    } else if (amount <= 0) {
      onError(`Nice try BRO 🤣`);
      return;
    }
    this.balance += amount;
    onSuccess(`💪💪💪Added ${amount}, balance: ${this.balance}`);
  },
};

function handleSuccess(message) {
  console.log(`Success!!! ${message}`);
}

function handleError(message) {
  console.log(`Error! ${message}`);
}

account.withdraw(300, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
