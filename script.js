'use strict';
// add event listener to button Check!
document.querySelector('.check-number').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('input').value);
  console.log(guessNumber, typeof guessNumber);

  if (!guessNumber) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
});

// Code for learning and testing
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.result-number').textContent = 14;
// document.querySelector('.score').textContent = 10;

// document.querySelector('input').value = 23;
// console.log(document.querySelector('input').value);

// Just a test for my ONMAG.bg project
// document.querySelector('input').placeholder = 'Some new text for testing';
