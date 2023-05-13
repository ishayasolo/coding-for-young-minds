// NUMBER GUESSING GAME

// import the readline module
const readline = require('readline');

// initialize the line input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const randomNumber = Math.ceil(Math.random() * 100)
let attempts = 0;

function launchGame() {
	rl.question('Guess a number between 1 and 100: ', function(answer) {
		const userGuess = Number(answer);

		if (isNaN(userGuess)) {
			console.log('Please enter a valid number');
			launchGame();
		} else {
			attempts++;

			if (userGuess === randomNumber) {
				console.log(`Congratulations!, you guessed the number correctly in ${attempts} attempts`);
				rl.close();
			} else if (userGuess < randomNumber) {
				console.log('too low, try again!');
				launchGame();
			} else {
				console.log('too high, try again!');
				launchGame();
			}
		}
	});
};

launchGame();
