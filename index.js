let playerScore = 0;
let compScore = 0;

const res = document.getElementById('results');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);

function computerPlay() {
    const weapons = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random()*weapons.length);
    return weapons[index];
}

function playRound(e) {
    const playerSelect = e.currentTarget.innerText;
    /* I was getting an error in the above line for the longest
    time because my "currentTarget" was undefined. That is 
    because, while I was able to console.log it within this (playerPlay --old name)
    function, I was calling playerPlay in the playRound 
    function below. I guess the issue is that the event 
    was not in the scope of the playRound function since that
    is not the function attached with the eventListener. 

    So it doesn't matter if I store the value of the event 
    in this function and call this function in another function; 
    it won't work. 
    */
 
    const compSelect = computerPlay();
    
    if(compSelect == playerSelect) {
        res.innerText = `It's a tie, ${playerSelect} and ${compSelect} are the same.`;
    }

    else if(
        (compSelect == "rock" && playerSelect == "paper") || (compSelect == "paper" && playerSelect == "scissors") || (compSelect == "scissors" && playerSelect == "rock"))  {
            playerScore++;
            if (playerScore == 5) {
                endGame();
            }
            else {
                res.innerText = `You win, ${playerSelect} beats ${compSelect}! You have ${playerScore} points and your opponent has ${compScore} points`;    
            }
        }

    else if(
        (playerSelect == "rock" && compSelect == "paper") || (playerSelect == "paper" && compSelect == "scissors") || (playerSelect == "scissors" && compSelect == "rock"))  {
            compScore++;
            if (compScore == 5) {
                endGame();
            }
            else {
            res.innerText = `You lose, ${compSelect} beats ${playerSelect}! You have ${playerScore} points and your opponent has ${compScore} points`;
        }
    }   
}

// function playRound(compSelect, playerSelect) {
//     compSelect = computerPlay();
//     playerSelect = playerPlay();
    
//     if(compSelect == playerSelect) {
//         alert(`It's a tie! ${playerSelect} and ${compSelect} are the same.`);
//     }
//     else if(compSelect == "rock" && playerSelect == "paper")  {
//         alert(`You win! ${playerSelect} beats ${compSelect}`);
//     }
//     else if(compSelect == "paper" && playerSelect == "scissors") {
//         alert(`You win! ${playerSelect} beats ${compSelect}`);
//     }
//     else if(compSelect == "scissors" && playerSelect == "rock") {
//         alert(`You win! ${playerSelect} beats ${compSelect}`);
//     }
//     else {
//         alert(`You Lose! ${compSelect} beats ${playerSelect}`);
//     }
// } 

function endGame() {
    if (playerScore == 5) {
        res.innerText = "You win the game!"
    }

    else if (compScore == 5) {
        res.innerText = "Aw, you lost!"
    }
    
    playerScore = 0;
    compScore = 0;
} 



