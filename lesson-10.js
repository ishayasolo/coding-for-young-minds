// Generate a random number between 1 and 100
let secretNumber = Math.ceil(Math.random() * 100);
let attempts = 0;

function checkGuess() {
  // Get the user's guess
  let guess = parseInt(document.getElementById('guess').value);

  // Increase the number of attempts
  attempts++;

  // Check if the guess is correct
  if (guess === secretNumber) {
    document.getElementById('result').innerHTML =
      'Congratulations! You guessed the correct number in ' +
      attempts +
      ' attempts.';
  } else if (guess < secretNumber) {
    document.getElementById('result').innerHTML = 'Too low! Try again.';
  } else {
    document.getElementById('result').innerHTML = 'Too high! Try again.';
  }
}




