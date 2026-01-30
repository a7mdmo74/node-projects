import readline from "node:readline";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function ask(question: string): Promise<string> {
	return new Promise((resolve) => rl.question(question, resolve));
}

async function startGame() {
	console.log("Welcome to the Number Guessing Game!");
	console.log("I'm thinking of a number between 1 and 100.");

	console.log("Please select the difficulty level:");
	console.log("1. Easy (10 chances)");
	console.log("2. Medium (5 chances)");
	console.log("3. Hard (3 chances)");

	const difficultyChoice = await ask("Enter your choice: ");

	let attempts = 0;

	switch (difficultyChoice.trim()) {
		case "1":
			attempts = 10;
			break;
		case "2":
			attempts = 5;
			break;
		case "3":
			attempts = 3;
			break;
		default:
			console.log("Invalid choice. Defaulting to Medium (5 chances).");
			attempts = 5;
	}

	console.log(`Great! You have selected ${attempts} chances.`);
	console.log("Let's start the game!");

	const targetNumber = Math.floor(Math.random() * 100) + 1;
	let tries = 0;

	while (tries < attempts) {
		const guessStr = await ask("Enter your guess: ");
		const guess = Number.parseInt(guessStr.trim());

		if (Number.isNaN(guess) || guess < 1 || guess > 100) {
			console.log("Please enter a valid number between 1 and 100.");
			continue;
		}

		tries++;

		if (guess === targetNumber) {
			console.log(
				`Congratulations! You guessed the correct number in ${tries} attempts.`,
			);
			rl.close();
			return;
		}

		if (guess < targetNumber) {
			console.log(`Incorrect! The number is greater than ${guess}.`);
		} else {
			console.log(`Incorrect! The number is less than ${guess}.`);
		}

		const remaining = attempts - tries;
		console.log(`You have ${remaining} attempts left.`);
	}

	console.log(
		`Game Over! You've used all your chances. The number was ${targetNumber}.`,
	);
	rl.close();
}

startGame();
