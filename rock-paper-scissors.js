function getComputerChoice() {  // Returns random choice out of rock, paper, or scissors.
    let choice = Math.floor(Math.random() * 3)
    const options = ["rock", "paper", "scissors"]
    return options[choice]
}

function playRound(playerSelection, computerSelection) {  // Plays one round of rock-paper-scissors.
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "rock") {
            return "Tie! You both chose Rock"
        } if (computerSelection === "paper") {
            return "You lose! Paper beats Rock"
        } if (computerSelection === "scissors") {
            return "You win! Rock beats Scissors"
        }
    } if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats Rock"
        } if (computerSelection === "paper") {
            return "Tie! You both chose Paper"
        } if (computerSelection === "scissors") {
            return "You lose! Scissors beats Paper"
        }   
    } if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors"
        } if (computerSelection === "paper") {
            return "You win! Scissors beats Paper"
        } if (computerSelection === "scissors") {
            return "Tie! You both chose Scissors"
        } 
    }
}

function playGame(rounds = 5) {  // Loop for playing rounds of rock-paper-scissors.
    for (let i = 0; i < rounds; i++) {
        let playerSelection = prompt("Choose rock, paper, or scissors!")
        let computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    }
}

playGame()