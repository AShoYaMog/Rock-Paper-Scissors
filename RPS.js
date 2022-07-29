let playersScore = [0,0];
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
        alert('Round')        
        return 'Round';
    } 
    if ((computer === 'rock' && player === 'scissors') ||
        (computer === 'scissors' && player === 'paper') ||
        (computer === 'paper' && player === 'rock')) {
        alert(`Computer chose ${computer} and You chose ${player} \nComputer Win`);
        return playersScore[1] +=1;
    } else {
        alert(`You chose ${player} and Computer chose ${computer} \nYou Win`) 
        return playersScore[0] +=1;
    }
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
    alert(playersScore)    
}


// game()