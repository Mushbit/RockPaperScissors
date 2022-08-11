const score = document.querySelector('div')
const text = document.querySelector('#text');
let compPoint = 0;
let playerPoint = 0;
score.textContent = `Computer: 0 Player: 0`;
let buttons = document.querySelectorAll('button');

function updateScore(compPoint, playerPoint) {
    score.textContent=`Computer: ${compPoint} Player: ${playerPoint}`;
}

buttons.forEach((button) => {

    button.addEventListener('click', (e) => {
        console.log(e.target.id)
        let computerSelection = computerPlay()
        let result = playRound(computerSelection, e.target.id)

        let para = document.createElement('p');
        para.textContent = result;
        text.appendChild(para);
        score.textContent = `Computer: ${compPoint}
        Player: ${playerPoint}`;

        if (compPoint === 5) {
            alert('Computer wins!');
            compPoint = 0;
            playerPoint = 0;
            updateScore(0, 0)
            let paras = document.querySelectorAll('p');
            paras.forEach((Element) => {
                text.removeChild(Element);
            })
        } else if (playerPoint === 5) {
            alert('Computer wins!');
            compPoint = 0;
            playerPoint = 0;
            updateScore(0, 0)
            let paras = document.querySelectorAll('p');
            paras.forEach((Element) => {
                text.removeChild(Element);
            })
        }
    })
})






function computerPlay() {

    switch ( Math.floor( Math.random() * 3 ) + 1 ) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
        default:
            return console.log( 'Somethings not right...' );
    }
}



function playRound(computerSelection, playerSelection) {

    if ( computerSelection === 'rock' ) {
        
        switch (playerSelection) {
            case 'rock': {
                return 'Conk! Two rock\'s! Tied!';
            };
            case 'paper': {
                playerPoint++;
                return 'Wrap you, rock! Player wins!';
            };
            case 'scissors': {
                compPoint++;
                return 'You rocked up my scissors! Computer wins!';
            };
            default: {
                return 'Gibberish! Computer Wins by default!'
            };
        }

    } else if (computerSelection === 'paper') {

        switch (playerSelection) {
            case 'rock': {
                compPoint++
                return 'Your paper wrapped my rock up good! Computer wins!'
            };
            case 'paper': {
                return 'Two paper won\'t do much. Tied!'
            };
            case 'scissors': {
                playerPoint++;
                return 'Snip Snap, cut you in a thousand pieces! Player wins!'
            };
            default: {
                return 'Gibberish! Computer Wins by default!'
            };
        }

    } else {

        switch (playerSelection) {
            case 'rock': {
                playerPoint++;
                return 'I will, I will, rock you...r scissors! Player wins!'
            };
            case 'paper': {
                compPoint++
                return 'your scissors cut me to pieces! Computer wins!'
            };
            case 'scissors': {
                return 'When fighting with scissors, no one wins! Tied!'
            };
            default: {
                return 'Gibberish! Computer Wins by default!'
            };
        }
    }
}