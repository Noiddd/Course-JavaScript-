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
// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("bread", 5);
// console.log(ShoppingCart.totalPrice);

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