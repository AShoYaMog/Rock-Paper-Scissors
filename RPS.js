let playersScore = [0,0];
let Selection = document.querySelector('#btn')


function playerSelection() {
    Selection.addEventListener('click', () => {
        return selection.value;        
    });
    game()
}

function computerSelection() {
    const RPS = ["rock","paper","scissors"];
    return RPS[Math.floor(Math.random()*RPS.length)]

}

function playRound(player,computer) {
    if (computer == player) {
        alert('Round')        
        return 'Round';
    } else if (
        (computer == 'rock' && player == 'scissors')||
        (computer == 'scissors' && player == 'paper')||
        (computer == 'paper' && player == 'rock')) {
        alert(`Computer chose ${computer} and You chose ${player} \nComputer Win`);
        return 'Computer Win';
    } else {
        alert(`You chose ${player} and Computer chose ${computer} \nYou Win`) 
        return 'player win';
    }
}

function score(playRound) {   
    if (playRound == 'Computer Win') {
       return playersScore[1] = ++playersScore[1];
    } else if (playRound == 'player win') {
       return playersScore[0] = ++playersScore[0];
    } else {
        console.log('blet');
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

function game() {
    let i = 0
    while ((i < 5)&&((playersScore[0]||playersScore[1])<3)) {
        score(playRound(playerSelection(),computerSelection()));
        alert(`Round: ${(i+1)}\nPlayer score: ${playersScore[0]}\nComputer score: ${playersScore[1]}`);
        i++;
    }
    gameResult();
    playersScore = [0,0];
}


// game()