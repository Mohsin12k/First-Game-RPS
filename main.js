const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');

let playerScore = 0;
let computerScore = 0;
result = '';
const choices = ['rock', 'paper', 'scissor'];

const playGame = (playerChoice) => {
    const computerSelection = Math.floor(Math.random()*choices.length);
    const computerChoice = choices[computerSelection];

    if(computerChoice === playerChoice)
    {
        result = "It's A Tie Game.... Try Again!"
    }
    else {
        switch(playerChoice)
        {
            case 'rock':
                result = (computerChoice === 'scissor') ? "YOU WIN!" : "YOU LOSE!";
                break;
            case 'paper':
                result = (computerChoice === 'rock') ? "YOU WIN!" : "YOU LOSE!";
                break;
            case 'scissor':
                result = (computerChoice === 'paper') ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `Player Select: ${playerChoice}`;
    computerDisplay.textContent = `Computer Select: ${computerChoice}`;
    resultDisplay.textContent = result;


    switch(result)
    {
        case "YOU WIN!":
            resultDisplay.classList.add('greenText');
            resultDisplay.classList.remove('redText', 'goldText');
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add('redText');
            resultDisplay.classList.remove('greenText', 'goldText');
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "It's A Tie Game.... Try Again!":
            resultDisplay.classList.add('goldText');
            resultDisplay.classList.remove('greenText', 'redText');
            break;
    }
}