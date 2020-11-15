let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultP = document.querySelector('.result > p');
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorDiv = document.getElementById('s');

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWord(letter) {
	if(letter === 'r') return 'rock';
	if(letter === 'p') return 'paper';
	return 'scissors'
}

function win(user, computer){
	userScore++;
	userScoreSpan.textContent = userScore;
	computerScoreSpan.textContent = computerScore;
	resultP.textContent = `${convertToWord(user)} beats ${convertToWord(computer)} you win`;
}

function lose(user, computer){
	computerScore++;
	userScoreSpan.textContent = userScore;
	computerScoreSpan.textContent = computerScore;
	resultP.textContent = `${convertToWord(computer)} beats ${convertToWord(user)} you loses`;
}

function draw(user, computer){
	userScoreSpan.textContent = userScore;
	computerScoreSpan.textContent = computerScore;
	resultP.textContent = `${convertToWord(user)} and ${convertToWord(computer)} are the same, it's a draw.`;
}

function game(userChoice){
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case "pr":
		case "rs":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "pp":
		case "rr":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rockDiv.addEventListener('click', () => {
		game('r');
	});

	paperDiv.addEventListener('click', () => {
		game('p');
	});

	scissorDiv.addEventListener('click', () => {
		game('s');
	});
}


main();