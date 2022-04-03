"use strict";
// Strict mode prevents us to do certain things and allows some errors to be visible

//////////////////////////////////////////
// Functions
/*
function logger() {
  console.log(`My name is Dion`);
}
logger(); // Calling, running or invoking a function

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0); // fruitProcessor(5, 0) returns juice, and we capture the value into applejuice
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//////////////////////////////////////////
// Function Declarations vs Expressions

// Function Declarations
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991); // You can call the function before defining it for function declaration but not expression
console.log(age1);

// Function Expressions
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);

//////////////////////////////////////////
// Arrow Function
// A special form of function expression, a faster and shorter way to write

// Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);

// Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear; // Do not need to write return if is 1 line
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Dion"));

//////////////////////////////////////////
// Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apples pieces and ${orangePieces} oranges pieces`;
  return juice;
}

console.log(fruitProcessor(1, 10));

//////////////////////////////////////////
// Reviewing Functions

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement; // return statement immediately exits the function, so to reach console.log, it needs to be above the return statement
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Dion"));
console.log(yearsUntilRetirement(1950, "John"));

//////////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀


// A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
// "Koalas win (30 vs. 13)"

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(1, 1, 1);
const scoreKoalas = calcAverage(1, 1, 1);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`WE HAVE NO WINNER!`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);

//////////////////////////////////////////
// Introduction to Arrays

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
console.log(friends[0]);
console.log(friends.length); // Prints: 3
console.log(friends[friends.length - 1]); // Prints: Peter // The last value in the array

friends[2] = "Jay"; // Replacing Peter in the Array
console.log(friends);

const firstName = "Dion";
const dion = [firstName, "Ang", 2037 - 1998, "Trader", friends];
console.log(dion);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2019, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

//////////////////////////////////////////
// Basic Arary Operations(Methods)

const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push(`Jay`); // Use push to add to the back of the array
console.log(friends);
console.log(newLength);

friends.unshift("John"); // Use unshift to add to the start of the array
console.log(friends);

const popped = friends.pop(); // Removes last element of the array and returned that removed element
console.log(friends);
console.log(popped);

friends.shift(); // Removes the first element of the array and returned that removed element
console.log(friends);

console.log(friends.indexOf("Steven")); // Returns the index of the element 

//////////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀

//Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const bill = [125, 555, 44];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
console.log(tips);

const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
console.log(total);
*/
//////////////////////////////////////////
// Introduction to Obejcts

// Arrays
const dionArray = [
  "Dion",
  "Ang",
  2037 - 1991,
  "trader",
  ["Michael", "Peter", "Steven"],
];

// Object
// Objects are able to have properties, names for values
// For example, for the object below, the properties are firstName, lastName, age...
// Main difference in arrays and objects are that in arrays the order matters but not for objects

const dion = {
  firstName: "Dion",
  lastName: "Ang",
  age: 2037 - 1991,
  job: "trader",
  friends: ["Michael", "Peter", "Steven"],
};
