// Exporting Module
console.log("Exporting Module");

// Blocking code
// console.log("Start fetching users");
// await fetch("https://jsonplaceholder.typicode.com/users");
// console.log("finish fetching");

// Variables that are declared inside of a module, are scoped to the module
// Not accessible to other modules
const shippingCost = 10;
export const cart = [];

// Exporting to other modules
// Named exports
// Only works in top level code
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// Exporting multiple things
// Renaming names
const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

// Default exports
// Use only when you want to export 1 thing per module
// Exporting the value itself, without a name
// Name will be given during import

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
