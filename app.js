let playerScore = 0;
let computerScore = 0;

function handlePlayerChoice() {
  const getPlayerChoice = prompt("Rock, Paper, or Scissors?");
  const playerChoice = `${getPlayerChoice[0].toUpperCase()}${getPlayerChoice
    .slice(1)
    .toLowerCase()}`;
  return playerChoice;
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const position = Math.floor(Math.random() * 3);
  return choices[position];
}

function playRound(playerSelection, computerSelection) {
  const win = `You Win! ${playerSelection} beats ${computerSelection}`;
  const lose = `You Lose! ${computerSelection} beats ${playerSelection}`;

  if (playerSelection === computerSelection) {
    return "It's a Draw.";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    computerScore++;
    return lose;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerScore++;
    return win;
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    console.log(playRound(handlePlayerChoice(), getComputerChoice()));
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log("Player wins!")
  } else if (playerScore < computerScore) {
    console.log("Computer wins!")
  }
}

game();
// Create function called getComputerChoice that selects a choice
// 1. Create an array variable that contains the choices Rock, Paper, and Scissors
// 2. Use random number generator to select one of those options

// Create a variable called playerSelection that takes input of player
// 1. Get text input from user
// 2. Converts text input so that it is not case sensitive and store it in a variable

// Create a function that plays one round of Rock Paper Scissors
// 1. Function should take 2 parameters: getComputerChoice and playerSelection
// 2. Compare user input and computer input based on logic of Rock Paper Scissors
// 3. Return string that declares win, lose, or draw
