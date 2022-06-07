console.log("Importing Modules");
import * as ShoppingCart from "./shoppingCart.js";

import add, { cart } from "./shoppingCart.js";

/*
// Importing Modules
// import {
//   addToCart,
//   totalPrice as price, //renaming
//   tq,
// } from "./shoppingCart.js";

// console.log("Importing Module");

// addToCart("bread", 5);
// console.log(price, tq);

console.log("Importing Modules");
import * as ShoppingCart from "./shoppingCart.js";
ShoppingCart.addToCart("bread", 5);
console.log(ShoppingCart.totalPrice);

// Using both default and name exports
// import add, {
//     addToCart,
//     totalPrice as price, //renaming
//     tq,
// } from "./shoppingCart.js";
// add("pizza", 2);
// console.log(price);

// Default exports
import add, { cart } from "./shoppingCart.js";
add("pizza", 2);
add("bread", 5);
add("apples", 4);

console.log(cart);

// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log("Something");

console.log("Importing Modules");
import * as ShoppingCart from "./shoppingCart.js";
ShoppingCart.addToCart("bread", 5);
console.log(ShoppingCart.totalPrice);

const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// lastPost.then((last) => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);


// The Module Pattern
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart("apple", 4);
ShoppingCart2.addToCart("pizza", 2);
console.log(ShoppingCart2);
*/

// CommonJS Modules
// Export
// export.addTocart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

// // Import
// const {addTocart}= require('./shoppingCart.js');

import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

// Example of using cloneDeep.js
const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 5 },
  ],

  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone); // state.user.loggedIn = false
console.log(stateDeepClone); // state.user.loggedIn = true
