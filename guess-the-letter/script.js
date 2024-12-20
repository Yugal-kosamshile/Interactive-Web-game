const words = ["apple", "javascript", "programming", "computer", "internet", "developer", "website"];
let word = words[Math.floor(Math.random() * words.length)];
let guessedWord = "_".repeat(word.length);  // No spaces
let attemptsLeft = 8;

document.getElementById("wordToGuess").textContent = guessedWord;

function checkLetter() {
    const guessInput = document.getElementById("guessInput");
    const guessResult = document.getElementById("guessResult");
    const guessedLetter = guessInput.value.toLowerCase();

    if (guessedLetter.length !== 1 || !/[a-z]/i.test(guessedLetter)) {
        guessResult.textContent = "Please enter a valid single letter.";
        return;
    }

    let updatedWord = guessedWord.split("");  // Split into an array of characters
    let isCorrect = false;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === guessedLetter && updatedWord[i] === "_") {
            updatedWord[i] = guessedLetter;
            isCorrect = true;
        }
    }

    guessedWord = updatedWord.join("");  // Rejoin without spaces
    document.getElementById("wordToGuess").textContent = guessedWord;

    if (isCorrect) {
        guessResult.textContent = "Correct guess!";
        if (!guessedWord.includes("_")) {
            guessResult.textContent = "Congratulations! You guessed the word.";
            disableGame();
        }
    } else {
        attemptsLeft--;
        updateAttemptsLeft();  // Update the attempts left count properly
        guessResult.textContent = "Incorrect guess.";
        if (attemptsLeft === 0) {
            guessResult.textContent = `Game over! The word was: ${word}`;
            disableGame();
        }
    }

    guessInput.value = "";
}

function updateAttemptsLeft() {
    // Ensure attemptsLeft is correctly passed as a number to textContent
    document.getElementById("attemptsLeft").textContent = `Attempts left: ${attemptsLeft}`;
}

function disableGame() {
    document.getElementById("guessInput").disabled = true;
    document.querySelector("button").disabled = true;
}

updateAttemptsLeft();  // Initial attempts left display
