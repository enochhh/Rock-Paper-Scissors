function computerPlay() {
    const weapons = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random()*weapons.length);
    console.log(weapons.length)
    return weapons[index];
}

function playerPlay() {
    let playerChoice = prompt("Pick one of the following weapons: rock, paper, or scissors! ");
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
        return playerChoice;
    }
    else {
        playerChoice = prompt("Invalid choice. Pick one of the following weapons: rock, paper, or scissors! ");
        playerChoice = playerChoice.toLowerCase();
        return playerChoice;
    }    
}

function playRound(compSelect, playerSelect) {
    compSelect = computerPlay();
    playerSelect = playerPlay();
    if(compSelect == playerSelect) {
        alert(`It's a tie! ${playerSelect} and ${compSelect} are the same.`);
    }
    else if(compSelect == "rock" && playerSelect == "paper")  {
        alert(`You win! ${playerSelect} beats ${compSelect}`);
    }
    else if(compSelect == "paper" && playerSelect == "scissors") {
        alert(`You win! ${playerSelect} beats ${compSelect}`);
    }
    else if(compSelect == "scissors" && playerSelect == "rock") {
        alert(`You win! ${playerSelect} beats ${compSelect}`);
    }
    else {
        alert(`You Lose! ${compSelect} beats ${playerSelect}`);
    }
} 


function game() {
    for (i = 0; i < 5; i++) {
        playRound();
    }
}

game();