'use strict';
// Random number that player have to guess
const randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.result-number').textContent = randomNumber;

// // Converting Score span text into a number and store it in to variable
// const convertScoreNumberSpanTextToNumber =
//   document.querySelector('.score').textContent;
// let scoreNumber = Number(convertScoreNumberSpanTextToNumber);

//  Better solution is to have variable that shows the exact data, and read it from the DOM
let scoreNumber = 20;

// add event listener to button Check!
document.querySelector('.check-number').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('input').value);

  // Creating logic of the game - if the number player input is correct or not
  if (!guessNumber) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guessNumber > randomNumber) {
    if (scoreNumber > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessNumber < randomNumber) {
    if (scoreNumber > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessNumber === randomNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  }
});
