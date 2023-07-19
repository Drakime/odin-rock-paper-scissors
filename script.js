function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);

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
  userSelection = userSelection.toLowerCase();
  
  switch (userSelection) {
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