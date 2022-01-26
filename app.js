let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    
    if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        console.log("You win! Rock beats scissors.");
        playerScore++;
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        console.log("You win! Paper beats rock.");
        playerScore++;
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        console.log("You win! Scissors beats paper.");
        playerScore++;
    } else if ((computerSelection === "rock") && (playerSelection === "scissors")) {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    } else if ((computerSelection === "paper") && (playerSelection === "rock")) {
        console.log("You lose! Paper beats rock.");
        computerScore++;
    } else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    } else if ((playerSelection) === (computerSelection)) {
        console.log("The game is a tie.");
    }
}

const rock = document.getElementById('rock');
rock.onclick = () => playRound('rock', computerPlay());

const paper = document.getElementById('paper');
paper.onclick = () => playRound('paper', computerPlay());

const scissors = document.getElementById('scissors');
scissors.onclick = () => playRound('scissors', computerPlay());

function game() {
    // for (var i = 0; i < 5; i++) {
    //     const playerInput = prompt("Enter your choice: ");
    //     const playerSelection = playerInput.toLowerCase();
    //     const computerSelection = computerPlay().toLowerCase();
    //     console.log(playRound(playerSelection, computerSelection));
    // }
}

// game();