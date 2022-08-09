// Computer picks randomly
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



// Play a single round
function playRound(computerSelection, playerSelection) {

    // If computerPlay() picks rock
    if ( computerSelection === 'rock' ) {
        
        switch (playerSelection.toLowerCase()) {
            case 'rock':
                return 'Conk! Two rock\'s! Tied!';
            case 'paper':
                return 'Wrap you, rock! Player wins!';
            case 'scissors':
                return 'You rocked up my scissors! Computer wins!';
            default:
                return 'Gibberish! Computer Wins by default!';
        }
    // If computerPlay() picks paper
    } else if (computerSelection === 'paper') {

        switch (playerSelection.toLowerCase()) {
            case 'rock':
                return 'Your paper wrapped my rock up good! Computer wins!';
            case 'paper':
                return 'Two paper won\'t do much. Tied!';
            case 'scissors':
                return 'Snip Snap, cut you in a thousand pieces! Player wins!';
            default:
                return 'Gibberish! Computer Wins by default!';
        }
    // Else computerPlay() picks scissors
    } else {

        switch (playerSelection.toLowerCase()) {
            case 'rock':
                return 'I will, I will, rock you...r scissors! Player wins!';
            case 'paper':
                return 'your scissors cut me to pieces! Computer wins!';
            case 'scissors':
                return 'When fighting with scissors, no one wins! Tied!';
            default:
                return 'Gibberish! Computer Wins by default!';
        }
    }
}
// Play 5 rounds
function game() {
    let result;
    for (let i = 0; i < 5; i++) {
        // Player prompted to picks rock, paper or scissors
        let playerSelection = prompt( 'What will your hand be?')
        // Calls computerPlay() to pick randomly
        let computerSelection = computerPlay()
        result = playRound(computerSelection, playerSelection);
        console.log(result);
    }  
}