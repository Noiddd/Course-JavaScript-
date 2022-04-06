"use strict";
// Project #1: Guess my number!

// .message for class and #message for id
// document.querySelector(".message") selects the message element
// texContent selects the text content
console.log(document.querySelector(".message").textContent);

///////////////////////////////////////
// Selecting and Manipulating Elements

document.querySelector(".message").textContent = "Correct Number!"; // Changing text content
console.log(document.querySelector(".message").textContent); // Print: Correct Number!

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 23;
