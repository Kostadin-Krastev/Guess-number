'use strict';
// Random number that player have to guess
let randomNumber = Math.trunc(Math.random() * 20) + 1;

// // Converting Score span text into a number and store it in to variable
// const convertScoreNumberSpanTextToNumber =
//   document.querySelector('.score').textContent;
// let scoreNumber = Number(convertScoreNumberSpanTextToNumber);

//  Better solution is to have variable that shows the exact data, and read it from the DOM
let scoreNumber = 20;

// variable for the highscore
let highscore = 0;

// storing the messages of the game
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// storing the score number of the game
const displayScoreNumber = function (score) {
  document.querySelector('.score').textContent = score;
};

// add event listener to button Check!
document.querySelector('.check-number').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('input').value);

  // Creating logic of the game - if the number player input is correct or not
  if (!guessNumber) {
    // When there is no input
    displayMessage('⛔ No number!');

    // When the guess number is not correct
  } else if (guessNumber !== randomNumber) {
    if (scoreNumber > 1) {
      displayMessage(
        guessNumber > randomNumber ? '📈 Too high!' : '📉 Too low!'
      );
      scoreNumber--;
      displayScoreNumber(scoreNumber);
      // When player lost
    } else {
      displayMessage('💥 You lost the game!');
      displayScoreNumber(0);
    }

    // When player wins
  } else if (guessNumber === randomNumber) {
    displayMessage('🎉 Correct Number!');
    displayScoreNumber(randomNumber);
    // Changing background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Changing the with of the div for the Result number
    document.querySelector('.result-number').style.width = '30rem';
    // Add the result to the high score
    if (scoreNumber > highscore) {
      highscore = scoreNumber;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

// Restart the game
document.querySelector('.start-again').addEventListener('click', function () {
  // Restoring initial values of the score
  scoreNumber = 20;
  document.querySelector('.score').textContent = scoreNumber;

  // Restoring initial value of the Secret number
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('?');

  // Restoring initial value of the message
  displayMessage('Start guessing...');

  // Clearing the value of the input field
  document.querySelector('.input-guess-number').value = '';

  // Restoring the background-color and number width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.result-number').style.width = '15rem';
});
