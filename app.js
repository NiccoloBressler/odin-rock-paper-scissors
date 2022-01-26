const results = document.querySelector('#results');
const playerScoreResult = document.querySelector('#playerScore');
const computerScoreResult = document.querySelector('#computerScore');
const options = document.querySelector('#options');

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {

    if ((playerScore == 5) || (computerScore == 5)) {
        if (playerScore == 5) {
            results.textContent = "You have already won the game!";
        } else {
            results.textContent = "You have already lost the game.";
        }
    } else {
        if ((playerSelection === "rock") && (computerSelection === "scissors")) {
            results.textContent = "You win, " + playerSelection + " beats " + computerSelection + ".";
            playerScore++;
    
        } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
            results.textContent = "You win, " + playerSelection + " beats " + computerSelection + ".";
            playerScore++;
    
        } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
            results.textContent = "You win, " + playerSelection + " beats " + computerSelection + ".";
            playerScore++;
    
        } else if ((computerSelection === "rock") && (playerSelection === "scissors")) {
            results.textContent = "You lose, " + computerSelection + " beats " + playerSelection + ".";
            computerScore++;
    
        } else if ((computerSelection === "paper") && (playerSelection === "rock")) {
            results.textContent = "You lose, " + computerSelection + " beats " + playerSelection + ".";
            computerScore++;
    
        } else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
            results.textContent = "You lose, " + computerSelection + " beats " + playerSelection + ".";
            computerScore++;
    
        } else if ((playerSelection) === (computerSelection)) {
            results.textContent = "The round is a tie.";
        }
    }

    playerScoreResult.textContent = playerScore;
    computerScoreResult.textContent = computerScore;

}

const rock = document.getElementById('rock');
rock.onclick = () => playRound('rock', computerPlay());

const paper = document.getElementById('paper');
paper.onclick = () => playRound('paper', computerPlay());

const scissors = document.getElementById('scissors');
scissors.onclick = () => playRound('scissors', computerPlay());