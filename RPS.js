let round = 0;
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
        log.unshift(`<p>Round: ${round+1}\nBoth chose ${player.toUpperCase()}\nRound!</p>`);       
        return 
    }
    if ((computer === 'rock' && player === 'scissors') ||
        (computer === 'scissors' && player === 'paper') ||
        (computer === 'paper' && player === 'rock')) {
        log.unshift(`<p>Round: ${round+1}\n${computer.toUpperCase()} beats ${player.toUpperCase()}\nComputer Win!</p>`);
        return computerScore +=1;
    } else {
        log.unshift(`<p>Round: ${round+1}\n${player.toUpperCase()} beats ${computer.toUpperCase()}\nYou Win!</p>`);
        return playerScore += 1;
    }
}

function declareResult() {
    document.querySelector('#playerScore').textContent = playerScore;
    document.querySelector('#computerScore').textContent = computerScore;
    result.innerHTML = log.toString().replace(/,/g,'');
}

function declareWiner(gameResult) {
    if ((gameResult === 'Player win') || 
        (gameResult === 'Computer win') ||
        (gameResult === 'Dead heat')) {
        let lastRound = log[0];        
        result.innerHTML = `<p>Game result: \n${gameResult}!</p><p>${lastRound}</p>`;
        round = 0;
        log =[];
        playerScore = 0;
        computerScore = 0;
    }
}

function gameResult() {
    if ((playerScore > computerScore)&&(round === 5)) {
        console.log('Game result: \nPlayer win');
        return 'Player win'
    } else if ((playerScore < computerScore)&&(round === 5)) {
        console.log('Game result: \nComputer win');
        return 'Computer win'
    } else if ((playerScore === computerScore)&&(round === 5)) {
        console.log('Game result: \nDead heat')
        return 'Dead heat'
    } else {
        return
    }
} 

function game(playerSelection) {    
    roundResult(playerSelection,computerSelection());
    round += 1;
    declareResult();
    declareWiner(gameResult());
}


// game()


// Object.keys(score).forEach(key => {
//     score[key] = 0
// });