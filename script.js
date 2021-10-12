
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let computerArray = ["rock", "paper", "scissors"];
    return computerArray[
        Math.floor(Math.random() * 3)
    ]
};

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt("rock, paper or scissors?");

    if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return "You Win! Scissors paperpbeats Paper";
    }else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You Lose! Paper beats Rock";
    }else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You Lose! Scissors beats Paper";
    }else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a tie of papers!";
    }else if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a tie of rocks";
    } else {
        return "It's a tie of scissors";
    }
  };
  

  function game() {
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());

    if (playerScore > computerScore) {
        return `You have won with the score of ${playerScore} : ${computerScore}`;
    } else if(computerScore > playerScore) {
        return `You have lost with the score of ${playerScore} : ${computerScore}`;
    } else {
        return "You have tied";
    }
  }


console.log(game());