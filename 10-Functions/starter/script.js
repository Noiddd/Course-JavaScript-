"use strict";
/*
// Defalut Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // Setting default values
  // numPassengers = numPassengers || 1; // When using ||, whenever there is a falsy value, it will return the first truthy
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);
createBooking("LH123", undefined, 1000); // Setting default

/////////////////////////////////////////////////////////////////////
// How Passing Arguments Works: Value vs Reference
const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 24739479284) {
    alert("Check in");
  } else {
    alert("Wrong passport");
  }
};

checkIn(flight, jonas);
console.log(flight); // Prints: LH234 // When passing a primitive type into a function, it is just copied original is not editied
console.log(jonas); // Prints: {name: "Mr.Jonas Schmedtmann" passport: 24739479284} // When passing a object into a function, original will be edited

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(jonas);
checkIn(flight, jonas);

/////////////////////////////////////////////////////////////////////
// Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transfermed by: ${fn.name}`);
};

transformer("Javascript is the best!", upperFirstWord);

transformer("Javascript is the best!", oneWord);

// JS uses callback functions all the time
const hello = function (name) {
  console.log(`HELLO ${name}`);
};

document.body.addEventListener("click", hello);

["dion", "jon", "edward"].forEach(hello);

/////////////////////////////////////////////////////////////////////
// Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet("Hey");
greeterHey("Jonas"); // Prints: Hey Jonas
greeterHey("Steven"); // Prints: Hey Steven

greet("Hello")("Dion"); // Prints: Hello Dion

const greetingArrow = (greeting) => (name) =>
  console.log(`${greeting} ${name}`);

greetingArrow("Ni hao")("Jon");

/////////////////////////////////////////////////////////////////////
// The call and apply Methods
// Used these to specify the this key word

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flights: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Dion Ang");
lufthansa.book(635, "John Smith");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(23, "Sarah Williams");

// .call
// .call sets the this keyword to eurowings, whatever the first argument of the call method is
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");

const swiss = {
  airline: "Swiss Airlines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

// .apply (Not the most modern way)
// Difference between .call and .apply is that .apply does not recieve a list of arguments after the first argument
// Instead it takes in an array
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

// Much simplier way of using .apply
book.call(swiss, ...flightData);

/////////////////////////////////////////////////////////////////////
// The bind Method
// Also allow to manually set the this kayword for any function call
// Difference is that bind does not immediately call the function, instead it returns a new function where the this keyword is bound
// It is set to whatever value we pass into bind

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flights: `${this.iataCode}${flightNum}`, name });
  },
};

const book = lufthansa.book;

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const bookEW = book.bind(eurowings); // bind the this keyword to eurowings and saved it into BookEW to be used later
const bookLH = book.bind(lufthansa);
bookEW(23, "Steven Williams");

// Partial application
// It means that part of the arguments of the original function are already set
const bookEW23 = book.bind(eurowings, 23); // able to bind arguments of the function as well
bookEW23("Dion");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlanes.bind(lufthansa)); // withour the .bind method the this keyword points to the button

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// first argument is the this keyword, since there is no this key word, null is used
// setting the rate value to 0.23
// It create a more specific function, addVAT, from a more general function, addTax
const addVAT = addTax.bind(null, 0.23); // addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/
/////////////////////////////////////////////////////////////////////
// Coding Challenge 1
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );

    // Using short circuiting
    // Since using &&, will stop evaluating when falsy
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
// [5, 2, 3]
// [(1, 5, 3, 9, 6, 1)];
