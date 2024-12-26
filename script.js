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
    // When there is no input
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guessNumber > randomNumber) {
    // Scenario when the guess number is too high
    if (scoreNumber > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
      // When player lost
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessNumber < randomNumber) {
    if (scoreNumber > 1) {
      // Scenario when the guess number is too low
      document.querySelector('.message').textContent = '📉 Too low!';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
      // When player lost
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    // When player wins
  } else if (guessNumber === randomNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    // Changing background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Changing the with of the div for the Result number
    document.querySelector('.result-number').style.width = '30rem';
  }
});

// Restart the game
document.querySelector('.start-again').addEventListener('click', function () {
  // Restoring initial values of the score
  document.querySelector('.score').textContent = scoreNumber; //does not work
  // Restoring initial value of the Secret number
  /*TODO */
  // Restoring initial value of the message
  document.querySelector('.message').requestFullscreen();
  // Restoring the background-color
  document.querySelector('body').style.backgroundColor = '#222';
});
