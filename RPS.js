let round = 0;
let playerScoreDisplay = document.querySelector('#playerScore');
let computerScoreDisplay = document.querySelector('#computerScore');
let playerScore = 0;
let computerScore = 0;
let log = [];
const result = document.querySelector('.result');
const playerSelection = document.querySelectorAll('.rps');

playerSelection.forEach(function(button){
    button.addEventListener('click',event => {
        game(event.target.value);
    })
});

function computerSelection() {
    const RPS = ["rock","paper","scissors"];
    return RPS[Math.floor(Math.random()*RPS.length)]
}

function roundResult(player,computer) {
    if (computer === player) {
        result.textContent =`Round: ${round}\nBoth chose ${player.toUpperCase()}\nRound!`;       
        return 'Round!';
    } else if ((computer === 'rock' && player === 'scissors') ||
        (computer === 'scissors' && player === 'paper') ||
        (computer === 'paper' && player === 'rock')) {
        result.textContent = `Round: ${round}\n${computer.toUpperCase()} beats ${player.toUpperCase()}\nComputer Win!`;
        return computerScore +=1;
    } else {
        result.textContent = `Round: ${round}\n${player.toUpperCase()} beats ${computer.toUpperCase()}\nYou Win!`;
        return playerScore += 1;
    }
}
function dravResult() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function gameResult() {
    if (playersScore[0] > playersScore[1]) {
        alert('Game result \nPlayer win');
    } else if (playersScore[0] < playersScore[1]) {
        alert('Game result: \nComputer win');
    } else {
        alert('Game result: \nDead heat')
    }
} 

function game(playerSelection) {    
    roundResult(playerSelection,computerSelection());
    round += 1;
    dravResult()
}


// game()


// Object.keys(score).forEach(key => {
//     score[key] = 0
// });