function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

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

function game() {
  let computerScore = 0;
  let playerScore = 0;

  for (i = 1; i <= 5; i++) {
    let playerSelection = prompt(`Round ${i} of 5: Choose rock, paper or scissors.`);
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

    console.log(result);
  }

  if (playerScore > computerScore) {
    console.log("You are the winner!");
  } else if (playerScore < computerScore) {
    console.log("The computer wins!");
  } else if (playerScore === computerScore) {
    console.log("The match is a draw!");
  }
}

game();