
let playerScore = 0;
let computerScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const computerNo = document.querySelector("#computerNo");
const playerNo = document.querySelector("#playerNo");
const winner = document.querySelector("#winner")


function computerPlay() {
    let computerArray = ["rock", "paper", "scissors"];
    return computerArray[
        Math.floor(Math.random() * 3)
    ]
};

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();


    if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++
        if (playerScore === 5 || computerScore === 5) {
            winner.textContent = game();
        }
        playerNo.textContent = `Player Score: ${playerScore}`;
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++
        if (playerScore === 5 || computerScore === 5) {
            winner.textContent = game();
        }
        playerNo.textContent = `Player Score: ${playerScore}`;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++
        if (playerScore === 5 || computerScore === 5) {
            winner.textContent = game();
        }
        playerNo.textContent = `Player Score: ${playerScore}`;
        return "You Win! Scissors paper beats Paper";
    }else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++
        if (playerScore === 5 || computerScore === 5) {
            winner.textContent = game();
        }
        computerNo.textContent = `Computer Score: ${computerScore}`;
        return "You Lose! Paper beats Rock";
    }else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++
        if (playerScore === 5 || computerScore === 5) {
            winner.textContent = game();
        }
        computerNo.textContent = `Computer Score: ${computerScore}`;
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++
        if (playerScore === 5 || computerScore === 5) {
            winner.textContent = game();
        }
        computerNo.textContent = `Computer Score: ${computerScore}`;
        return "You Lose! Scissors beats Paper";
    }else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a tie of papers!";
    }else if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a tie of rocks";
    } else {
        return "It's a tie of scissors";
    }
  };

rock.addEventListener('click', () => {
    if (playerScore === 5 || computerScore === 5) {
        
    } else {
        result.textContent = playRound("rock");
    }
});
  
paper.addEventListener('click', () => {
    if (playerScore === 5 || computerScore === 5) {
        
    } else {
        result.textContent = playRound("rock");
    }
});
  
scissors.addEventListener('click', () => {
    if (playerScore === 5 || computerScore === 5) {
        
    } else {
        result.textContent = playRound("rock");
    }
});
  

  function game() {

    if (playerScore > computerScore) {
        return `You have won with the score of ${playerScore} : ${computerScore}`;
    } else if(computerScore > playerScore) {
        return `You have lost with the score of ${playerScore} : ${computerScore}`;
    } else {
        return "You have tied";
    }
  }

