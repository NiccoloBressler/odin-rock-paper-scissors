function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}


function playRound(playerSelection, computerSelection) {
    
    if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return "You win! Rock beats scissors."
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return "You win! Paper beats rock."
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        return "You win! Scissors beats paper."
    } else if ((computerSelection === "rock") && (playerSelection === "scissors")) {
        return "You lose! Rock beats scissors."
    } else if ((computerSelection === "paper") && (playerSelection === "rock")) {
        return "You lose! Paper beats rock."
    } else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
        return "You lose! Scissors beats paper."
    } else if ((playerSelection) === (computerSelection)) {
        return "The game is a tie."
    }
}

function game() {
    for (var i = 0; i < 5; i++) {
        const playerInput = prompt("Enter your choice: ");
        const playerSelection = playerInput.toLowerCase();
        const computerSelection = computerPlay().toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();