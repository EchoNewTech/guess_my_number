'use strict';

let superNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function checkGuess() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    document.querySelector('body').style.background = 'linear-gradient(135deg, #6dd5ed, #2193b0)';

    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No number! 🚫';
        document.querySelector('body').style.background = 'linear-gradient(135deg, #ed6d6dff, #b02121ff)';

    // When player wins
    } else if (guess === superNumber) {
        document.querySelector('.message').textContent = 'Correct Number! 👏👏👏';
        document.querySelector('body').style.background = 'linear-gradient(135deg,rgba(113, 237, 109, 1)d, #2db021ff)';

        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = superNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    
    // When guess is wrong
    } else if (guess !==superNumber && score > 0) {

        // When guess is to high
        if (guess > superNumber) {
            document.querySelector('.message').textContent = 'Too high! ⏫';

        // When guess is to low
        } else {
            document.querySelector('.message').textContent = 'Too low! ⏬';
        }
        score--;
        document.querySelector('.score').textContent = score;
    } else if (score <= 0) {
        document.querySelector('.message').textContent = 'You lost the game! 💥';
        document.querySelector('body').style.background = 'linear-gradient(135deg, #ed6d6dff, #b02121ff)';

        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.score').textContent = 0;
        document.querySelector('.number').textContent = superNumber;
    }
}
// check button
document.querySelector('.check').addEventListener('click', checkGuess);
//Enter in input
document.querySelector('.guess').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    superNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.background = 'linear-gradient(135deg, #6dd5ed, #2193b0)';
    document.querySelector('.number').style.width = '15rem';
});