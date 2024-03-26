function getComputerChoice() {  // Returns random choice out of rock, paper, or scissors
    let choice = Math.floor(Math.random() * 3)
    const options = ["rock", "paper", "scissors"]
    return options[choice]
}

function playRound(playerSelection, computerSelection) {  // Plays one round of rock-paper-scissors
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

const buttonContainer = document.querySelector("#buttonContainer");  // Creates buttons for rock, paper, and scissors
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "ROCK";
paper.textContent = "PAPER";
scissors.textContent = "SCISSORS";

buttonContainer.appendChild(rock);
buttonContainer.appendChild(paper);
buttonContainer.appendChild(scissors);

const results = document.querySelector("#results"); // Creates container for game results shown in the webpage
let roundResult = document.createElement("p");
let gameResult = document.createElement("h2");
results.appendChild(roundResult);
results.appendChild(gameResult);
let playerScore = document.createElement("p");
let computerScore = document.createElement("p");
results.appendChild(playerScore);
results.appendChild(computerScore);

let playerSelection = "";  // Default values before the game is played
let playerPoints = 0;
let computerPoints = 0;

rock.addEventListener("click", () => {
    playerSelection = "rock";
    playGame()
});
paper.addEventListener("click", () => {
    playerSelection = "paper";
    playGame()
});
scissors.addEventListener("click", () => {
    playerSelection = "scissors";
    playGame()
});

function playGame() {  // Plays one round of rps and updates all the necessary variables etc.
    let computerSelection = getComputerChoice()

    roundResult.textContent = playRound(playerSelection, computerSelection)  // Prints each rounds result on the webpage

    if (pointCounter(playRound(playerSelection, computerSelection)) === "win") {  // Adds points depending of the result
        playerPoints++
    } else if (pointCounter(playRound(playerSelection, computerSelection)) === "lose") {
        computerPoints++
    }
    playerScore.textContent = `Your points: ${playerPoints}`;
    computerScore.textContent = `Computers points: ${computerPoints}`;
    endResult(playerPoints, computerPoints);
}

function pointCounter(string) {  // Counts points from each round
    if (string.includes("You win!")) {
        return "win"
    } else if (string.includes("You lose!")) {
        return "lose"
    } return
}

function endResult(playerPoints, computerPoints) { // Compares the points and returns the end result
    if (playerPoints == 5) {
        gameResult.textContent = "You won the whole game!";
    } else if (computerPoints == 5) {
        gameResult.textContent = "You lost the whole game!";
    }
}