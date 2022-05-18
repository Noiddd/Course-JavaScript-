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


//////////////////////////////////////////////////////////////
// Prototypal Inheritance on Built-In Object

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

console.log(jonas.__proto__.__proto__); // Object.prototype (top of the prototype chain)
console.log(jonas.__proto__.__proto__.__proto__); // Null

console.dir(Person.prototype.constructor);

const arr = [2, 6, 4, 34, 2, 23, 6]; // new Array === []
console.log(arr.__proto__ === Array.prototype); // true

// Since all arrays inherits the prototype property from Array
// Adding a new method to the prototype property of the Array constructor will add to all arrays
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); // Prints: [2, 6, 4, 34, 23]


///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

console.log(bmw, mercedes);

bmw.accelerate();
bmw.brake();

///////////////////////////////////////
// ES6 Classes
// classes are still functions
// 1. Classes are NOT hoisted, means cannot used them before declaration
// 2. Classes are first-class citizens, means can pass them into functions and return from functions
// 3. Classes are executed in strict mode

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge(); // Prinst: 41
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype); // Prints: true

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet(); // Prints: Hey Jesica

///////////////////////////////////////
// Setters and Getters

// setters and getters, sets and gets a value

const walter = new PersonCl("Walter", 1965);

const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements); //Prints: [200, 530, 120, 300, 50]

///////////////////////////////////////
// Static Methods
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Not inherited
Person.hey = function () {
  console.log("Hey there");
  console.log(this);
};

Person.hey();

const jonas = new Person("Jonas", 1991);

// jonas.hey(); // Error

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance method, all instances can have access to them
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log("Hey THERE");
    console.log(this);
  }
}

PersonCl.hey();

///////////////////////////////////////////////////////
// Object.create
// There is still the idea of prototype inheritance, but there is no prototype properties, constuctor functions or new operator involve
// Can use object.create to manually set the prototype to any other object that we want

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); // steven is an empty new object that is linked to the prototype in PersonProto
console.log(steven.__proto__ === PersonProto); // Prints: true

steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();

*/
///////////////////////////////////////
// Coding Challenge #2

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀


class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(num) {
    this.speed = num * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
// Since object.create will return an empty object, it has to be written first before any methods
// In this case before introduce
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcAge();

console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true

Student.prototype.constructor = Student; // setting the constructor to Student, if not it would be Person
console.dir(Student.prototype.constructor); // Student object

*/

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// JS will use the first accelerate in the chain, which is this instead of the Car one
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV("Tesla", 120, 23);

tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
