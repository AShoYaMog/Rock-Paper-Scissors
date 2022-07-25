


function playerSelection() {
   return prompt("Choose rock paper or scissors").toLowerCase();
}

function computerSelection() {
    const RPS = ["rock","paper","scissors"];
    return RPS[Math.floor(Math.random()*RPS.length)]

}

alert(playerSelection())
alert(computerSelection())