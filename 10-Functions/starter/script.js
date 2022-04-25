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
*/
