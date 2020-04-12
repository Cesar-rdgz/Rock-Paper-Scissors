function computerPlay() {
    let moves = ['rock', 'paper', 'scissors'];

    function randomMoves() {
        return moves[Math.floor(Math.random() * moves.length)];
    } 
    
    return randomMoves();
}

function playerMove() {
    let plyMove = prompt('rock, paper or scissors?');
    return plyMove.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    let result;
    switch(true){
        case playerSelection === computerSelection:
            result = 'tie';
            return result
            break;
        case playerSelection === 'rock' && computerSelection === 'scissors':
        case playerSelection === 'paper' && computerSelection === 'rock':
        case playerSelection === 'scissors' && computerSelection === 'paper':
            result = 'win';
            return result;
            break;
        case playerSelection === 'rock' && computerSelection === 'paper':
        case playerSelection === 'paper' && computerSelection === 'scissors':
        case playerSelection === 'scissors' && computerSelection === 'rock':
            result = 'lose'
            return result;
            break;
    }
}

function game(){
    let winGames = 0;
    let loseGames = 0;
    let tieGames = 0;
    let i;


    for (i = 0; i < 5; i++){
        let result = playRound(playerMove(), computerPlay());

        if (result === 'win'){
            winGames++;
            console.log(`You Win! this round`);
        }else if(result === 'lose'){
            loseGames++;
            console.log(`You Lose! this round`);
        }else{
            tieGames++;
            console.log('tie');
        }
    }

    if (winGames > loseGames && winGames > tieGames){
        console.log(`You are the winner
            win games: ${winGames}
            lose games: ${loseGames}
            tie games: ${tieGames}`);
    }else if(winGames < loseGames && loseGames > tieGames){
        console.log(`You lose this game
            win games: ${winGames}
            lose games: ${loseGames}
            tie games: ${tieGames}`);
    }else{
        console.log(`This Game it's a tie
            win games: ${winGames}
            lose games: ${loseGames}
            tie games: ${tieGames}`);
    } 


}

alert('Please open the console to play the game');
console.log('Welcome to rock, paper or scissors game, to start playing call game() function');

