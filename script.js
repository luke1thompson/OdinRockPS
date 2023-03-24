console.log('script.juicy loaded');

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// inputs are both numbers, so that the win/loss logic is easy to implement
function playRound (e) {
    const computer = getComputerChoice();
    const player = e.target.id;
    console.log(`Player chooses ${player} and CPU chooses ${computer}`);

    if (player == computer) {
        // if the player and computer choose the same value, tie

        console.log(`Both sides play ${player}! It's a Tie! (1/2 pt)`);
    } if (player - computer == 1 || player - computer == -2) {
        // if the player number is one above the computer, they are winning.
        // if player has 0 (rock) and computer 2 (scissors), also win

        console.log(`You win! Your ${player} beats ${computer}!`);
    } else {
        // else, the computer has won
        console.log(`You lose! Their ${player} beats your ${computer}!`);
    }
}

const buttons = document.querySelectorAll('.choice');
buttons.forEach(button => button.addEventListener('click', playRound));

// function numToShape(number) {
//     if (number == 0) {
//         return 'Rock';
//     } else if (number == 1) {
//         return 'Paper';
//     } else {
//         return 'Scissors';
//     }
// }

// function shapeToNum(shape) {
//     shape = shape.toLowerCase();

//     if (shape == 'rock') {
//         return 0;
//     } else if (shape == 'paper') {
//         return 1;
//     } else if (shape == 'scissors') {
//         return 2;
//     } else {
//         return -1;
//     }
// }
