let pnum;
let pshape;
let score = 0;
let games = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
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

function setPlayerIcon(e) {
    pshape = e.target.textContent;
    pnum = e.target.id;

    const pimg = document.querySelector('#playericon');
    const psource = './pics/my' + pshape.toLowerCase() + '.png';
    pimg.setAttribute('src', psource);
}

function setCPUicon(cshape) {
    const cimg = document.querySelector('#cpuicon');
    const csource = './pics/cpu' + cshape.toLowerCase() + '.png';
    cimg.setAttribute('src', csource);
}

function playRound() {
    if (pshape == null) {
        return;
    }

    const cnum = getComputerChoice();
    const cshape = numToShape(cnum);

    setCPUicon(cshape);
    let outcome;

    if (pnum == cnum) {
        outcome = 'tie';
    } else if (pnum - cnum == 1 || pnum - cnum == -2) {
        // if the pnum is one above the cnum, player is winning.
        // if pnum is 0 (rock) and cnum is 2 (scissors), also win
        outcome = 'win';
    } else {
        // else, the cpu has won
        outcome = 'lose';
    }

    addScore(pshape, cshape, outcome);
}

function addScore(pshape, cshape, outcome) {
    const history = document.querySelector('.history');
    const scoreboard = document.querySelector('#score');

    if (games == 5) {
        games = 0;
        while (history.firstChild != null) {
            history.removeChild(history.firstChild);
        }
    }

    const newrecord = document.createElement('div');
    newrecord.classList.add('record');
    let text;

    switch (outcome) {
        case 'tie':
            text = `Both sides chose ${pshape}! It's a tie! (0 pts)`;
            break;
        case 'win':
            score += 1;
            text = `Your ${pshape} beats ${cshape}! You win the round! (+1 pt)`;
            break;
        case 'lose':
            score -= 1;
            text = `Your ${pshape} loses to ${cshape}! You lose the round!(-1 pt)`;
            break;
        default:
            break;
    }

    scoreboard.textContent = score;

    newrecord.textContent = text;
    history.appendChild(newrecord);

    games += 1;
    if (games == 5) {
        gameOver(history);
    }
}

function gameOver(history) {
    const final = document.createElement('div');
    let text;

    if (score == 0) {
        text = 'After 5 rounds, the winner is... Nobody!';
    } else if (score > 0) {
        text = 'After 5 rounds, the winner is... You! Congratulations!';
    } else {
        text = 'After 5 rounds, the winner is... The computer! Better luck next time!';
    }

    final.textContent = text;
    final.classList.add('final');
    history.appendChild(final);

    // setCPUicon('blank');
}

const choices = document.querySelectorAll('.choice');
choices.forEach(choice => choice.addEventListener('click', setPlayerIcon));
const gobutton = document.querySelector('.go');
gobutton.addEventListener('click', playRound);