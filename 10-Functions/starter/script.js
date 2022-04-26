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
*/
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
