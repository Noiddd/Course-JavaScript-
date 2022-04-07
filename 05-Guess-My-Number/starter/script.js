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
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".number").textContent = "?";

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); // Usually when we get a value from an input field, it will be a string and since we will be comparing it with a random number later on. Need to convert to number to compare with a number
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector(".message").textContent = "No Number!";
    displayMessage("No Number!");
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "CORRECT NUMBER!";
    displayMessage("CORRECT NUMBER!");
    document.querySelector("body").style.backgroundColor = "#60b347"; // Selecting the body element, does not require the . infront, since it is not a class. The change will be an inline style, meaning it will be in the html sheet. It does not change the css sheet
    document.querySelector(".number").style.width = "30rem"; // The change will be an inline style, meaning it will be in the html sheet. It does not change the css sheet
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     guess > secretNumber ? "Too high!" : "Too low!";
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //   document.querySelector(".message").textContent = "YOU LOST THE GAME! T.T";
      displayMessage("YOU LOST THE GAME! T.T");
      document.querySelector(".score").textContent = 0;
    }
  }
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Too high!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "YOU LOST THE GAME! T.T";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Too low!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "YOU LOST THE GAME! T.T";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});
///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  //   document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
