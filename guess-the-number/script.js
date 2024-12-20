// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessField').value);
    const guessResult = document.getElementById('guessResult');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        guessResult.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        guessResult.textContent = `🎉 Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`;
        document.getElementById('guessField').disabled = true;
        document.querySelector('button').disabled = true;
    } else if (userGuess < randomNumber) {
        guessResult.textContent = '📉 Too low! Try a higher number.';
    } else {
        guessResult.textContent = '📈 Too high! Try a lower number.';
    }
}
