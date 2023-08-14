// Initialise variables
let computerScore;
let playerScore;
let choiceListener = new AbortController(); // used to remove button event listener

// Create references to elements
const resultDisplay = document.querySelector('.result-display');
let playerScoreDisplay = document.querySelector('.player-score');
let computerScoreDisplay = document.querySelector('.computer-score');
const resetButton = document.getElementById("reset-button");

function initialiseGame() {
  computerScore = 0;
  playerScore = 0;

  resultDisplay.textContent = "";
  playerScoreDisplay.textContent = `${playerScore}`;
  computerScoreDisplay.textContent = `${computerScore}`;

  addChoiceButtonEventListener();
  addResetButtonEventListener();
}

function addChoiceButtonEventListener() {
  const choices = document.querySelectorAll('.option-button');

  // we use the .forEach method to iterate through each button
  choices.forEach((choice) => {

    // and for each one we add a 'click' listener
    choice.addEventListener('click', () => {
      updateScores(choice.dataset.value);
    },
      { signal: choiceListener.signal }
    );
  });
}

function addResetButtonEventListener() {
  resetButton.addEventListener('click', resetGame);
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "paper") {
        return "You Lose! Paper beats Rock!";
      } else if (computerSelection === "scissors") {
        return "You Win! Rock beats Scissors!";
      } else if (computerSelection === "rock") {
        return "It's a draw!";
      }
    case "paper":
      if (computerSelection === "rock") {
        return "You Win! Paper beats Rock!";
      } else if (computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper!";
      } else if (computerSelection === "paper") {
        return "It's a draw!";
      }
    case "scissors":
      if (computerSelection === "rock") {
        return "You Lose! Rock beats Scissors!";
      } else if (computerSelection === "paper") {
        return "You Win! Scissors beats Paper!";
      } else if (computerSelection === "scissors") {
        return "It's a draw!";
      }
    default:
      return "Invalid option.";
  }
}

function evaluateWinner(result) {
  if (result.includes("Win")) {
    return 1;
  } else if (result.includes("Lose")) {
    return 2;
  } else if (result.includes("draw")) {
    return 3;
  } else {
    return;
  }
}

function game(playerSelection) {
  let result = playRound(playerSelection, getComputerChoice())
  let evaluation = evaluateWinner(result);

  switch (evaluation) {
    case 1:
      playerScore += 1;
      break;
    case 2:
      computerScore += 1;
      break;
    default:
      break;
  }

  if (playerScore === 5 || computerScore === 5) {
    choiceListener.abort();
    resetButton.style.display = "block";

    if (playerScore > computerScore) {
      return "You are the winner!";
    } else if (playerScore < computerScore) {
      return "The computer wins!";
    } else if (playerScore === computerScore) {
      return "The match is a draw!";
    }
  }

  return result;
}

function updateScores(value) {
  let result = game(value);
  resultDisplay.textContent = result;

  playerScoreDisplay.textContent = `${playerScore}`;
  computerScoreDisplay.textContent = `${computerScore}`;
}

function resetGame() {
  // New instance of AbortController() is required as previous instance is not in
  // state for reuse.
  choiceListener = new AbortController();

  initialiseGame();
  resetButton.style.display = "none";
}

// Initialises the game to default when the DOM is loaded
document.addEventListener('DOMContentLoaded', initialiseGame);