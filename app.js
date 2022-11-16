const choices = ["Rock", "Paper", "Scissors"];
const getPlayerChoice = prompt("Rock, Paper, or Scissors?")
const playerChoice = `${getPlayerChoice[0].toUpperCase()}${getPlayerChoice.slice(1).toLowerCase()}`


function getComputerChoice() {
    const position = Math.floor(Math.random() * 3);
    return choices[position];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw"
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "Lose"
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "Win"
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "Lose"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "Win"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "Lose"
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "Win"
    } 
}

console.log(playRound(playerChoice, getComputerChoice()))

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
