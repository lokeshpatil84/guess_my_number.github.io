"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct secreatnumber";
// document.querySelector(".number").textContent = 13;

// document.querySelector(".guess").value = 23;
// console.log((document.querySelector(".guess").value = 23));

let number = Math.trunc(Math.random() * 20 + 1);
console.log(number);

let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "no number";
  } else if (guess == number) {
    document.querySelector(".message").textContent = "Correct number";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > number) {
    document.querySelector(".message").textContent = "high number";
    score--;
    if (score > 0) {
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you loose a game";
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (guess < number) {
    document.querySelector(".message").textContent = "low number";
    score--;
    if (score > 0) {
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you loose a game";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "start guessing...";

    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
  });
});
