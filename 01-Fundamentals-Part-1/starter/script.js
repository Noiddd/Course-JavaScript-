/*let js = "amazing";
if (js === "amazing") alert("Javasript is FUN!");
console.log(40 + 8 + 23 - 10);

console.log("Jonas"); // Jonas is a value
console.log(23); // 23 is a value

let firstName = "Jonas"; // firstName is a variable
console.log(firstName); // Prints: "Jonas"

// There are only 2 types of values in Javascript,
// An Objects
let me = {
  name: "Jonas",
};

// Or a Primitive values
// There are 7 primitive value types
// Number, string, boolean, null, undefined, symbols and bigint
let lasttName = "Ang";
let age = 30;

console.log(typeof null);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

const firstName = "Dion";
const lastName = "Ang";
console.log(firstName + " " + lastName);

//Assignment operator
let x = 10 + 5;
x += 10; // 15 + 10 = 25
console.log(x);

// Comparison operator
console.log(ageJonas > ageSarah);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2; // Grouping comes first
console.log(ageJonas, ageSarah, averageAge);

// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀


// BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

let markBMI = massMark / (heightMark * heightMark);
let johnBMI = massJohn / (heightJohn * heightJohn);
console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Hello world
this is a multi line
para`);

const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving!`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearsLeft} years`);
}

let century;
const birthYear = 2005;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

*/

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀

const massMark = 1;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

let markBMI = massMark / (heightMark * heightMark);
let johnBMI = massJohn / (heightJohn * heightJohn);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI, ${markBMI}, is higher than John's BMI, ${johnBMI}`);
} else {
  console.log(`Mark's BMI, ${markBMI}, is lower than John's BMI, ${johnBMI}`);
}


///////////////////////////////////////
// Type conversion and Coercion
// Javascript can only convert to String, Number and Boolean

// Type conversion
const inputYear = `1991`;
console.log(Number(inputYear) + 18, inputYear);

console.log(String(23), 23);

// Type coercion
// The plus operator converts the number to a string
// The minus operator converts strings to numbers
console.log(`I'am ` + 23 + ` years old`);
console.log(`23` - `10` - 3); // Prints: 10


///////////////////////////////////////
// Truthy and Falsy Values
// 5 falsy values: 0, " ", undefined, null, NaN
// All of these 5 values will be converted to false, when converting to a boolean
// Everything else will be converted to true

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({})); // Empty object
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Dont spend it all");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log(`YAY height is defined`);
} else {
  console.log(`Height is undefined `);
}

///////////////////////////////////////
// Equality Operators: == vs ===
// === is a strict equals operator
// == allows for type coercion
const age = 18;
if (age === 18) console.log(`You just became an adult (strict)`);
if (age == 18) console.log(`You just became an adult(loose)`);

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log(`Cool! 23 is an amazing number`);
} else if (favourite === 7) {
  console.log(`7 is also a cool number!`);
} else {
  console.log(`Number is not a cool number`);
}

if (favourite !== 23) console.log(`Number is not 23`);


///////////////////////////////////////
// Logical Operator

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); // False
console.log(hasDriversLicense || hasGoodVision); // True
console.log(!hasDriversLicense); // false

if (hasDriversLicense && hasGoodVision) {
  console.log(`Sarah is able to drive!`);
} else {
  console.log(`Someone else should drive!`);
}

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

const averageDolphins = (1 + 2 + 3) / 3;
const averageKoalas = (2 + 2 + 2) / 3;
console.log(averageDolphins, averageKoalas);

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log(`Winners are the Dolphins!`);
} else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
  console.log(`Winners are the Koalas!`);
} else if (
  averageDolphins === averageKoalas &&
  averageDolphins >= 100 &&
  averageKoalas >= 100
) {
  console.log(`We have a draw!`);
} else {
  console.log(`No one wins the game!`);
}
