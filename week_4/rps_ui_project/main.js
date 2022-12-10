let computerCount = 0;
let playerCount = 0;
let roundCount = 1;
let sum = 0;

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
    playerCount++;
    return true;
  } else {
    computerCount++;
    return false;
  }
}

function playRound(playerSelection) {
  roundCount++;
  sum = playerCount + computerCount;
  let computerSelection = computerPlay();

  if (playerSelection === computerSelection) return "It's a draw!";

  let result = playerWin(playerSelection, computerSelection);
  if (result) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

// DOM Manipulation

let roundCounter = document.querySelector("#roundCount");
let h3Round = document.querySelector("h3");
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
let buttons = document.querySelectorAll("button");
let pScores = document.querySelectorAll(".game-scores");
let result = document.querySelector(".result");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    h3Round.style.display = "block";
    roundCounter.textContent = roundCount;
    pScores.forEach((p) => (p.style.display = "block"));
    result.textContent = playRound(btn.id);
    playerScore.textContent = playerCount;
    computerScore.textContent = computerCount;
    if (result.textContent.includes("win")) {
      result.style.color = "green";
    } else if (result.textContent.includes("lose")) {
      result.style.color = "red";
    } else {
      result.style.color = "#929090";
    }

    if (sum == 4) {
      setTimeout(() => {
        result.style.fontSize = "52px";
        if (playerCount > computerCount) {
          result.textContent = "The Player has won the game!";
        } else {
          result.textContent = "The Computer has won the game!";
        }
      }, 1500);

      setTimeout(() => {
        alert("The rounds has finished, If you want play again!");
      }, 2000);
      computerCount = 0;
      playerCount = 0;
      roundCount = 1;
    }
  });
});
