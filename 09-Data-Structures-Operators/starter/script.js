"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  // Adding objects into objects
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ time = "20:00", address, starterIndex = 1, mainIndex = 0 }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}. Will be delivered to ${address} at ${time} `
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is the pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
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

//////////////////////////////////////////
// Short Circuiting (&& and ||)

// Logical operator can return any data type and use any data type
// Short circuiting for the || operator means that if the first value is a truthy value, it will immediately return that value

// || operator
// Immediately return the first truthy value or last value if all are falsy
console.log(3 || "Dion");
console.log("" || "Dion"); // Prints: Dion // since "" is a falsy value
console.log(true || 0); // Prints: true
console.log(undefined || null); // Prints: null // even tho null is a falsy value since undefined is also a falsy
console.log(undefined || 0 || "" || "Hello" || 23 || null); // Prints: Hello // sicne it is the first truthy value

// Instead of doing this
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1); // Prints: 10

// Do this
const guest2 = restaurant.numGuest || 10;
console.log(guest2); // Prints: 10 // Since restaurant.numGuest is undefined

// && operator
// Immediately return the first falsy value or last value if all are truthy
console.log(0 && "Dion"); // Prints 0
console.log(7 && "Dion"); // Prints: Dion // since 7 is a truthy, evaluation continues and returns Dion
console.log("Hello" && 23 && null && "Dion"); // Prints: null // since it is the first falsey value

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

//////////////////////////////////////////
// The Nullish Coalescing Operator (??)

restaurant.numGuest = 0;
const guest = restaurant.numGuest || 10;
console.log(guest); // Prints: 10 // Even tho we want 0, it prints 10 since 0 is a falsy value

// ?? works with nullish values
// Nullish: null and undefined (NOT inclding 0 or "")
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect); // Prints: 0

//////////////////////////////////////////
// Logical Assignment Operators

const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// rest2.numGuests = rest2.numGuests || 10; // return the first truthy value, return rest1.numGuests if it exists if not than 10
// rest1.numGuests = rest1.numGuests || 10;
// rest1.numGuests ||= 10; // This is same as above line
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10; // Null or undefined only
rest2.numGuests ??= 10;

// rest2.owner = rest2.owner && "<ANONYMOUS>"; // return first falsy value or last value if all is truthy
// rest1.owner = rest1.owner && "<ANONYMOUS>"; // return first falsy value or last value if all is truthy

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);
*/
//////////////////////////////////////////

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const subPlayers = ["Thiago", "Coutinho", "Perisic"];
const players1Final = [...players1, ...subPlayers];
console.log(players1Final);

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, team2, draw);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

// 7.
team1 < team2 && console.log("Team 1 is more likely to win");
team2 < team1 && console.log("Team 2 is more likely to win");

//////////////////////////////////////////
// Looping Arrays: The for-of Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu.entries()]);

//////////////////////////////////////////
// Optional Chaining (?.)
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open); // Prints: undefined // Only if mon exist then the open property will be read, exist meaning not null or undefined
console.log(restaurant.openingHours?.mon?.open); // Prints: undefined

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderPlant?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{ name: "Jonas", email: "hello@jonas.io" }];
console.log(users[0]?.name ?? "User array empty");

//////////////////////////////////////////
// Looping Objects: Objects Keys, Values and Entries

//Property NAMES
const properties = Object.keys(openingHours);
console.log(properties); // ['thu', 'fri', 'sat'] // array of the property names

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀


const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [i, players] of game.scored.entries()) {
  console.log(`Goals ${i + 1}: ${players}`);
}
console.log(game.scored.entries());

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

/////////////////////////////////////////
// Sets
// It is a collection of unique values, it can never have any duplicates
// Differs from arrays in that the order of the values does not matter and all values are unique
// No way of retriving values from a Set, since all values are unique, all we can do is to see if value is in the Set
// If you need to store a value and retrieve it, best use an Array

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet); // Prints: []

console.log(new Set("Jonas"));

console.log(ordersSet.size); // Similar to .length
console.log(ordersSet.has("Pizza")); // Prints: true // Similar to the .includes
console.log(ordersSet.has("Bread")); // Prints: false
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
// ordersSet.clear(); // Delete all values of the Set
console.log(ordersSet);

// Looping is possible since it is an itterable
for (const order of ordersSet) {
  console.log(order);
}

// Main use case for Sets is to remove duplicate values in an Array
// Example:
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const staffUnique = [...new Set(staff)]; // Able to spread since a Set is a iterable // unpacking into an Array
console.log(staffUnique);
console.log(new Set(staff).size);
console.log(new Set("didisnasndos").size);

/////////////////////////////////////////
// Maps: Fundamentals
// It is a data structure that we can use to map values to keys
// Key differences between maps and objects are that in maps, the keys can be any type
// Object keys are always strings, map keys can be anything

const rest = new Map();
rest.set("name", "Classico Italiano"); // Add elements to map using .set
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal")); // .set not only update the map, it also returns the updated map

// Since it returns it, we can chain the .set method
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");
console.log(rest);

// We read data from the map using the .get method

console.log(rest.get("name")); // Prints: Classico Italiano
console.log(rest.get(true)); // Prints: We are open :D

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close"))); // Prints: We are open :D

console.log(rest.has("categories")); // Prints: true // Use.has to see if element is in map
rest.delete(2); // delete elements
console.log(rest.size);
//
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr));
*/
/////////////////////////////////////////
// Maps: Iteration
// Instead of using .set to add elements into the map, use an array instead
// First value will be the key and second the property
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quis app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt("Your answer"));
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
