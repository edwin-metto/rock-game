const choices = ["rock", "paper", "scissors"];
const playerdisplay = document.getElementById('playerdisplay');
const computerdisplay = document.getElementById('computerdisplay');
const resultdisplay = document.getElementById('resultdisplay');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');

let playerWins = 0;
let computerWins = 0;

function playGame(playerchoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerchoice === computerChoice) {
        result = "It's a tie!";
    } else {
        switch (playerchoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" : "You lose!";
                if (result === "You win!") playerWins++;
                else computerWins++;
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win!" : "You lose!";
                if (result === "You win!") playerWins++;
                else computerWins++;
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win!" : "You lose!";
                if (result === "You win!") playerWins++;
                else computerWins++;
                break;
        }
    }

    playerdisplay.textContent = `Player: ${playerchoice}`;
    computerdisplay.textContent = `Computer: ${computerChoice}`;
    resultdisplay.textContent = result;
    updateScores();
}

function updateScores() {
    playerScoreDisplay.textContent = `Player Wins: ${playerWins}`;
    computerScoreDisplay.textContent = `Computer Wins: ${computerWins}`;
}

function resetGame() {
    playerdisplay.textContent = "Player:";
    computerdisplay.textContent = "Computer:";
    resultdisplay.textContent = "";
    playerWins = 0;
    computerWins = 0;
    updateScores();
}
