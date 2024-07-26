// Variables
const choices = ['rock', 'paper', 'scissors'];
let userChoice = '';
let computerChoice = '';

// Function to get computer choice
const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

// Event listeners for user choice
document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

const playGame = (userChoice) => {
    computerChoice = getComputerChoice();
    displayResult(userChoice, computerChoice);
};

// Function to display the result
const displayResult = (user, computer) => {
    let resultText = '';
    if (user === computer) {
        resultText = 'It\'s a draw!';
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        resultText = 'You win!';
    } else {
        resultText = 'You lose!';
    }

    document.getElementById('result').innerText = `You chose ${user}, computer chose ${computer}. ${resultText}`;
};

document.getElementById('play-again').addEventListener('click', () => {
    window.location.reload();
});
