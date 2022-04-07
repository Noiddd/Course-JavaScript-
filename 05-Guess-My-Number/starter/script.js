"use strict";
// Project #1: Guess my number!
/*
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
*/
///////////////////////////////////////
// Project #1: Guess my number!
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); // Usually when we get a value from an input field, it will be a string and since we will be comparing it with a random number later on. Need to convert to number to compare with a number
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "CORRECT NUMBER!";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "YOU LOST THE GAME! T.T";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "YOU LOST THE GAME! T.T";
      document.querySelector(".score").textContent = 0;
    }
  }
});
