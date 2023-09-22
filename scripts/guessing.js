const form = document.querySelector('.guess');
const previous = document.querySelector('#previousGuesses');
const result = document.querySelector('#result');
const guessInput = document.querySelector('#guessInput');
let randomNumber = Math.floor(Math.random() * 100) + 1;
guessInput.value = '';
let i = Number(0);
previous.textContent = 'Previous Guesses:  ';
result.setAttribute('class', '');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const result = document.querySelector('#result');
    const guessInput = document.querySelector('#guessInput');
    const guessPattern = /^[0-9]{0,3}$/;
    let userGuess = Number(guessInput.value);
    guessInput.value = '';
    console.log(randomNumber);
    result.setAttribute('class', '');
    
    if (guessPattern.test(userGuess)) {

        if (userGuess > randomNumber && i < 9) {
            result.setAttribute('class', 'tooBig');
            result.textContent = 'WRONG, that number is too big';

        } else if (userGuess < randomNumber && i < 9) {
            result.setAttribute('class', 'tooSmall');
            result.textContent = 'WRONG, that number is too small';

        } else if (userGuess === randomNumber) {
            result.setAttribute('class', 'justRight');
            result.textContent = 'Congratulations! You got it right!';
            gameOver();

        } else {
            result.setAttribute('class', 'tooMany');
            result.textContent = 'Too many attempts! GAME OVER!';
            gameOver();

        }

        previous.textContent += userGuess + ', ';
        i++;

    } else {
        result.textContent = 'please enter a number between 1 and 100';
    }
});

function gameOver() {
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Start a new game';
    document.body.appendChild(resetButton);
    resetButton.setAttribute('class', 'button')

    resetButton.focus();

    guessInput.disabled = true;
    resetButton.addEventListener('click', function (e) {
        e.preventDefault();
        resetButton.parentNode.removeChild(resetButton);
        reset();
    });

}


function reset() {
    guessInput.disabled = false;
    result.setAttribute('class', '');
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessInput.value = '';
    i = Number(0);
    previous.textContent = 'Previous Guesses:  ';
    result.textContent = '';

}
