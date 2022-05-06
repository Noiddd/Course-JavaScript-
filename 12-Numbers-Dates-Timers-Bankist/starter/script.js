"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2022-05-03T23:36:17.929Z",
    "2022-05-04T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();

    // return `${day}/${month}/${year}`;

    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers

let currentAccount;

// // Fake always logged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

// Experimenting API
// const now = new Date();
// const options = {
//   hour: "numeric",
//   minute: "numeric",
//   day: "numeric",
//   month: "long",
//   year: "numeric",
//   weekday: "long",
// };

// const locale = navigator.language;
// console.log(locale);

// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time

    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      // weekday: "long",
    };

    // const locale = navigator.language; // using the locale from the browser

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);

    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/*
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// Converting and Checking Numbers

// In javascript, all numbers are represented internally as floating point numbers, always as decimals
console.log(23 === 23.0); // Prints: true

// Base 10 (0-9)
// Binary base 2 (0 and 1)
console.log(0.1 + 0.2); // Prints: 0.30000000000000004 // This is an error in JS

// Converting to numbers
console.log(Number("23")); // Prints: 23
console.log(+"23"); // Prints: 23

// Parsing
// parseInt()
// get rids of symbols that are not a number
// string need to start with a number
// accepts a second argument as the base we are using
console.log(Number.parseInt("30px", 10)); // Prints: 30
console.log(Number.parseInt("e23", 10)); // Prints: NaN

// parseFloat()
// use parseFloat to read decimals
console.log(Number.parseInt("    2.5rem   ")); // Prints: 2
console.log(Number.parseFloat(" 2.5rem   ")); // Prints: 2.5

// check if value is NaN
// isNaN()
console.log(Number.isNaN(20)); // Prints: false
console.log(Number.isNaN("20")); // Prints: false
console.log(Number.isNaN(+"20X")); // Prints: true
console.log(Number.isNaN(20 / 0)); // Prints: false // it returns infinity

// best way of checking if value is a number
// isFinite()
console.log(Number.isFinite(20)); // Prints: true
console.log(Number.isFinite("20")); // Prints: false
console.log(Number.isFinite(+"20X")); // Prints: false
console.log(Number.isFinite(20 / 0)); // Prints: false // it returns infinity

// checking for integer
// isInteger()
console.log(Number.isInteger(20)); // Prints: true
console.log(Number.isInteger("20")); // Prints: false
console.log(Number.isInteger(+"20X")); // Prints: false
console.log(Number.isInteger(20 / 0)); // Prints: false // it returns infinity

/////////////////////////////////////////////////

// Math and Rounding

console.log(Math.sqrt(25)); // Prints: 5 // squareroot
console.log(25 ** (1 / 2)); // Prints: 5 // squareroot
console.log(8 ** (1 / 3)); // Prints: 2 // cuberoot

console.log(Math.max(5, 18, 23, 11, 2)); // Prints: 23 // returns the max value
console.log(Math.max(5, 18, "23", 11, 2)); // Prints: 23 // reads strings as well
console.log(Math.max(5, 18, "23px", 11, 2)); // Prints: NaN // does not do praseing

console.log(Math.min(5, 18, 23, 11, 2)); // Prints: 2 // returns the min value

// calculating radius of a circle with 10px
console.log(Math.PI * Number.parseFloat("10px") ** 2);

console.log(Math.random()); // return random number between 0 - 1
console.log(Math.trunc(Math.random() * 6) + 1); // random dice roll

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(1, 5));

// Rounding Integers
console.log(Math.trunc(23.3)); // Prints: 23

console.log(Math.round(23.9)); // Prints: 24 // round to the nearest integer
console.log(Math.round(23.3)); // Prints: 23

console.log(Math.ceil(23.3)); // Prints: 24 // round up
console.log(Math.ceil(23.9)); // Prints: 24

console.log(Math.floor(23.3)); // Prints: 23 // round down
console.log(Math.floor(23.3)); // Prints: 23 // does the same with Math.trunc(), when dealing with positive numbers

console.log(Math.trunc(-23.3)); // Prints: -23 // Math.trunc() keeps the -
console.log(Math.floor(-23.3)); // Prints: -24 // works in all situation, positive and negative

// Rounding decimals
console.log((2.7).toFixed(0)); // Prints 3 // .toFixed() returns a string
console.log((2.7).toFixed(3)); // Prints 2.700
console.log((2.345).toFixed(2)); // Prints 2.35
console.log(+(2.345).toFixed(2)); // Prints 2.35 // returns a number, since + is added infront

/////////////////////////////////////////////////

// The Remainder Operator

// it returns the remainder of the division
console.log(5 % 2); // Print: 1
console.log(8 % 3); // Prints: 2

// Checking if value is even or odd
// when divided 2 and return 0, value is even since there is not remainder
console.log(6 % 2); // Prints:0
console.log(7 % 2); // Prints 1

const isEven = (n) => n % 2 === 0;
console.log(isEven(8)); // Prints: true
console.log(isEven(23)); // Prints: false
console.log(isEven(514)); // Prints: true

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    // even rows
    if (i % 2 === 0) row.style.backgroundColor = "orangered";

    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = "blue";
  });
});

/////////////////////////////////////////////////

// Numeric Separators

// 287,460,000,000
// _ is used for better readability
// _ is used instead of .
// _ can only be placed inbetween numbers
const diameter = 28_745_000_000_000;
console.log(diameter); // Prints: 28745000000000

const priceCents = 345_99;
console.log(priceCents); // Prints: 34599

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

console.log(Number("23_000"));
console.log(parseInt("230_000"));

/////////////////////////////////////////////////

// Working with BigInt

// Numbers are represented internally as 64 bits
// That means there are 64 1s or 0s to represent any given number
// Of these 64, only 53 are used to actually store the digits themselves. The rest are used to store the decimal points and the signs
// If there are only 53 bits to strore a number, that means there is a limit of how big a number can be

// This is the biggest number Javascript can safely represent
// Any number larger than this is considered not safe, it cannot be represented accurately
console.log(2 ** 53 - 1); // Prints: 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // Prints: 9007199254740991
console.log(2 ** 53 + 1); // Prints: 9007199254740992 // Not correct

console.log(4532532412363491273918273491n);
console.log(BigInt(4532532412363491273918273491));

// Operations
console.log(10000n + 10000n); // Prints: 20000n

const huge = 232134123712987489124n;
const num = 23;
console.log(huge * BigInt(num)); // it shows an error without the BigInt

// Exceptions
console.log(20n > 15); // Prints: true // this works

/////////////////////////////////////////////////

// Creating Dates

// 4 ways of creating a date
const now = new Date();
console.log(now); // Prints: Thu May 05 2022 10:08:20 GMT+0800 (Singapore Standard Time) // current date and time

console.log(new Date("May 05 2022 10:07:19")); // Prints: Thu May 05 2022 10:07:19 GMT+0800 (Singapore Standard Time)
console.log(new Date("December 24, 2015")); // Prints: Thu Dec 24 2015 00:00:00 GMT+0800 (Singapore Standard Time)

// "2019-11-18T21:31:17.178Z",
// this format is ok since it was JS that created it
console.log(new Date(account1.movementsDates[0])); // Prints: Tue Nov 19 2019 05:31:17 GMT+0800 (Singapore Standard Time)

// the month is zero based, 10 is november
console.log(new Date(2037, 10, 19, 15, 23, 5)); // Prints: Thu Nov 19 2037 15:23:05 GMT+0800 (Singapore Standard Time)

// JS auto corrects the dates
console.log(new Date(2037, 10, 31)); // Prints: Tue Dec 01 2037 00:00:00 GMT+0800 (Singapore Standard Time)

console.log(new Date(0)); // Prints: Thu Jan 01 1970 07:30:00 GMT+0730 (Singapore Standard Time)

// 3 days after the beginning time
// the sum of the calculation is called the timestamp
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Prints: Sun Jan 04 1970 07:30:00 GMT+0730 (Singapore Standard Time)

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future); // Prints: Thu Nov 19 2037 15:23:00 GMT+0800 (Singapore Standard Time)
console.log(future.getFullYear()); // Prints: 2037
console.log(future.getMonth()); // Prints: 10 // month is zero based
console.log(future.getDate()); // Prints: 19
console.log(future.getDay()); // Prints: 4 // its the day of the week not the month, 0 is sun
console.log(future.getHours()); // Prints: 15
console.log(future.getMinutes()); // Prints: 23
console.log(future.getSeconds()); // Prints: 0
console.log(future.toISOString()); // Prints: 2037-11-19T07:23:00.000Z // convert a date object to a string to store somewhere
console.log(future.getTime()); // Prints: 2142228180000 // timestamp, its the mili second that have passed since jan 1 1970

console.log(new Date(2142228180000)); // Prints: Thu Nov 19 2037 15:23:00 GMT+0800 (Singapore Standard Time)
console.log(Date.now()); // Prints: 1651717519373 // current timestamp

future.setFullYear(2040); // changing year
console.log(future); // Prints: Mon Nov 19 2040 15:23:00 GMT+0800 (Singapore Standard Time)


/////////////////////////////////////////////////
// Operations with Dates

// calculating difference between 2 dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(
  new Date(2037, 3, 4),
  new Date(2037, 3, 14, 10, 8)
);
console.log(days1);

/////////////////////////////////////////////////
// Internationalizing NUmbers (Intl)

const num = 3884764.23;

const options = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
  usdGrouping: false,
};

console.log("US: ", new Intl.NumberFormat("en-US", options).format(num)); // Prints:
console.log("Germany: ", new Intl.NumberFormat("de-DE", options).format(num)); // Prints:
console.log("Syria: ", new Intl.NumberFormat("ar-SY", options).format(num)); // Prints:

console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
); // Prints:

/////////////////////////////////////////////////
// Timers: setTimeout and setInterval

const ingredients = ["olives", "spinach"];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
); // Prints after 3 seconds

console.log("Waiting..."); // This prints first, while waiting for 3 seconds

// clearTimeout is used to stop timer
if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

// setTimeout
// call every interval based on what is specified
setInterval(function () {
  const hours = new Date().getHours();
  const min = new Date().getMinutes();
  const second = new Date().getSeconds();
  console.log(`${hours}:${min}:${second}`);
}, 1000);
*/
/////////////////////////////////////////////////
