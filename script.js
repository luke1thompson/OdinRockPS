console.log('Testing Testing 321');
/*
    0 - Rock
    1 - Paper
    2 - Scissors
*/

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(player, computer) {
    ;
    pShape = numToShape(player);
    cShape = numToShape(computer);

    if (player == computer) {
        score += .5;
        return `Both sides play ${pShape}! It's a Tie!`
    } if (player - computer == 1 || player - computer == -2) {
        score += 1;
        return `You win! Your ${pShape} beats ${cShape}!`
    } else {
        return `You lose! Their ${cShape} beats your ${pShape}!`
    }
}

function numToShape(number) {
    if (number == 0) {
        return 'Rock';
    } else if (number == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function shapeToNum(shape) {
    shape = shape.toLowerCase();

    if (shape == 'rock') {
        return 0;
    } else if (shape == 'paper') {
        return 1;
    } else if (shape == 'scissors') {
        return 2;
    } else {
        return -1;
    }
}

function game() {

    for (let i = 1; i < 6; i++) {
        console.log(`Game ${i}: Choose a Shape`)

        playerChoice = prompt('Rock, Paper, or Scissors?', 'rock');
        let pNum = shapeToNum(playerChoice);
        if (pNum > 0) {
            console.log(playRound(pNum, getComputerChoice()));
        } else {
            console.log('Invalid input! you forfeit this round!');
        }
    }

    console.log(`You won ${score} out of 5 games! Better luck next time!`)
}

let playerChoice;
let score = 0;

game();
