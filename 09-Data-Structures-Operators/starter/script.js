"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = "20:00",
    address,
    starterIndex = 1,
    mainIndex = 0,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}. Will be delivered to ${address} at ${time} `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is the pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

/*
//////////////////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // This is a destrcuturing assignment, not an array
console.log(x, y, z); // Prints: 2, 3, 4
console.log(arr); // Original array is not affected

let [main, , secondary] = restaurant.categories; // Use a blank to skip
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // Prints: Vegetarian Italian

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recieve 2 return values from a function
const [start, mainCourse] = restaurant.order(2, 0);
console.log(start, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // r is undefined

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // r is 1

//////////////////////////////////////////
// Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Changing property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // Can't start with {}, so () is used
console.log(a, b); // Prints: 23 7

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Immediately do destructuring
restaurant.orderDelivery({
  time: "23:30",
  address: "Ang Mo Kio",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Hougang",
  startIndex: 1,
});

//////////////////////////////////////////
// The Spread Operator(...)

// Creating a new array

// Bad way
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // Prints: [1, 2, 7, 8, 9]

// Good way
const newArr = [1, 2, ...arr]; //... takes everything out of the array and write them individually
console.log(newArr); // Prints: [1, 2, 7, 8, 9]

console.log(...newArr); // Prints: 1 2 7 8 9 // Prints them all individually
console.log(1, 2, 7, 8, 9); // Prints: 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, "Gnocci"]; // Creating a completly new arary, not manipulating original array
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 array
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
// Can only use the spread operator when building an array or passing values into a function
const str = "Jonas";
const letters = [...str, "", "S."];
console.log(letters);
console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta! Ingredients 1?"),
//   prompt("Ingredients 2?"),
//   prompt("Ingredients 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
//////////////////////////////////////////
// Rest Pattern and Parameters
// Spread is to unpack an array and rest is to pack elements into an array

// Destructuring
// Spread, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// Rest, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // the rest operator collects the elements that are unuse in the assignment

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood); // rest pattern always must be the last, since it takes the REMAINING elements in the array

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// Functions
const add = function (...numbers) {
  // ...numbers packs all the numbers into an array called numbers
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(5, 3, 7, 2);

restaurant.orderPizza("apple", "pear", "onion");
restaurant.orderPizza("apple");
