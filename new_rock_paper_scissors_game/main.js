let playerScore = document.querySelector('.player_score');
let computerScore = document.querySelector('.computer_score');
let phrase = document.querySelector('.phrase');
let counterPlayer = 0;
let counterComputer = 0;

function computerPlay() {
    let moves = ["rock", "paper", "scissors"];

    function randomMoves() {
        return moves[Math.floor(Math.random() * moves.length)];
    } 
    
    return randomMoves();
}

document.body.addEventListener("click", e => {
	e.preventDefault();
	switch (true) {
		case e.target.id === computerPlay():
			phrase.innerHTML = "";
            phrase.appendChild(document.createTextNode('tie'));
            break;
        case e.target.id === "rock" && computerPlay() === "scissors":
        case e.target.id === "paper" && computerPlay() === "rock":
        case e.target.id === "scissors" && computerPlay() === "paper":
			phrase.innerHTML = "";
            phrase.appendChild(document.createTextNode('You Win!'));
			counterPlayer++;
			playerScore.innerHTML = "";
			playerScore.appendChild(document.createTextNode(counterPlayer));
            break;
        case e.target.id === "rock" && computerPlay() === "paper":
        case e.target.id === "paper" && computerPlay() === "scissors":
        case e.target.id === "scissors" && computerPlay() === "rock":
            phrase.innerHTML = "";
            phrase.appendChild(document.createTextNode('You Lose!'));
			counterComputer++;
			computerScore.innerHTML = "";
			computerScore.appendChild(document.createTextNode(counterComputer));
            break; 
	}
	
	e.currentTime = 0;
	
	if (counterPlayer >= 5 || counterComputer >= 5 && counterPlayer > counterComputer) {
		phrase.innerHTML = "";
		phrase.appendChild(document.createTextNode('you win! you beat the computer'));
		setTimeout( () => {location.reload()}, 3000);
		counterComputer.innerHTML = counterComputer;
	}else if (counterPlayer >= 5 || counterComputer >= 5 && counterPlayer < counterComputer) {
		phrase.innerHTML = "";
		phrase.appendChild(document.createTextNode('you lose! try harder next time'));
		setTimeout( () => {location.reload()}, 3000);
	}
});