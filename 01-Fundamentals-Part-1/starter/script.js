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
*/

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
