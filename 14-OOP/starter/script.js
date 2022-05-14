"use strict";
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside of a constructor function
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

// Difference between a constructor function and a regular function is that we call the constructor with a new
const jonas = new Person("Jonas", 1991);
console.log(jonas);

// When a constructor function is called, these happen:
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} lnked to prototype
// 4. function automatic return {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(matilda, jack);

const jay = "jay";

console.log(jonas instanceof Person); // Prints: true
console.log(jay instanceof Person); // Prits : false
*/

//////////////////////////////////////////////////////////////\
// Prototypes
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside of a constructor function
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const jonas = new Person("Jonas", 1991);
jonas.calcAge(); // jonas will have access to calcAge

// prototype of jonas is the prototype property of the constructor function, Person
// Person.prototype is the prototype of Jonas
// Person.prototype is not the prototype of Person
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species); // Prints: Homo Sapiens
console.log(jonas.__proto__.species); // Prints: Homo Sapiens

console.log(jonas.hasOwnProperty("firstName")); // true
console.log(jonas.hasOwnProperty("species")); // false
