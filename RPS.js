


function playerSelection() {
   return prompt("Choose rock paper or scissors").toLowerCase();
}

function computerSelection() {
    const RPS = ["rock","paper","scissors"];
    return RPS[Math.floor(Math.random()*RPS.length)]

}

function playRound(player,computer) {
    player = playerSelection();
    computer = computerSelection();
    if (computer == player) {
        alert('Round')
    } else if (
        (computer == 'rock' && player == 'scissors')||
        (computer == 'scissors' && player == 'paper')||
        (computer == 'paper' && player == 'rock')) {
            alert('Computer Win')
    } else {
        alert('player win')
    }
}


playRound()