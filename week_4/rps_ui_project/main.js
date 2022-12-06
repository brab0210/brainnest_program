let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  let random_index = Math.floor(Math.random() * 3);
  let game_selection = ["rock", "paper", "scissors"];
  return game_selection[random_index];
}

function playerWin(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return true;
  } else {
    computerScore++;
    return false;
  }
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();

  if (playerSelection === computerSelection) return "It's a draw!";

  let result = playerWin(playerSelection, computerSelection);
  if (result) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

/* if (playerScore > computerScore) {
  return `The Player won the game || Player: ${playerScore} - Computer: ${computerScore}`;
} else if (playerScore < computerScore) {
  return `The Computer won the game || Player: ${playerScore} - Computer: ${computerScore}`;
} else {
  return `The computer and the player had a draw! || Player: ${playerScore} - Computer: ${computerScore}`;
} */
