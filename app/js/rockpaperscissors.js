////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `getInput()`.
//return /* Your Expression */;

function getPlayerMove(move) {
    while(move != 'rock' && move != 'paper' && move != 'scissors') {
        move = getInput();
    }
    return move;
}

// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
//return /* Your Expression */;

function getComputerMove(move) {
    while(move != 'rock' && move != 'paper' && move != 'scissors') {
        move = randomPlay();
    }
    return move;
}

// Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
// Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
// The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
/* YOUR CODE HERE */

function getWinner(playerMove,computerMove) {
    var winner;
    if(playerMove === 'rock' && computerMove === 'scissors' || playerMove === 'scissors' && computerMove === 'paper' || playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player';
    }else if(playerMove === 'rock' && computerMove === 'paper' || playerMove === 'scissors' && computerMove === 'rock' || playerMove === 'paper' && computerMove === 'scissors') {
        winner = 'computer';
    }else{
        return 'tie';
    }
    return winner;
}

// Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
/* YOUR CODE HERE */

function playToFive() {
    alert("Let's play Rock, Paper, Scissors");
    var playerWins = 0, computerWins = 0, match;
    while(playerWins < 5 && computerWins < 5) {
        alert('Rock, paper, or scissors?');
        match = getWinner(getPlayerMove(getInput()), getComputerMove(randomPlay()));
        if(match === 'player') {
            playerWins += 1;
            console.log('You won!!!');
            console.log('The score is now You: ' + playerWins + ' Computer: ' + computerWins);
        }else if(match === 'computer') {
            computerWins += 1;
            console.log('You lost...');
            console.log('The score is now You: ' + playerWins + ' Computer: ' + computerWins);
        }else if(match === 'tie') {
            console.log('That match was a tie');
        }
    }
    return [playerWins, computerWins];
}

//Extra Challenge

function playTo(x) {
    alert("Let's play Rock, Paper, Scissors");
    var playerWins = 0, computerWins = 0, match;
    while(playerWins < x && computerWins < x) {
        alert('Rock, paper, or scissors?');
        match = getWinner(getPlayerMove(getInput()), getComputerMove(randomPlay()));
        if(match === 'player') {
            playerWins += 1;
            console.log('You won!!!');
            console.log('The score is now You: ' + playerWins + ' Computer: ' + computerWins);
        }else if(match === 'computer') {
            computerWins += 1;
            console.log('You lost...');
            console.log('The score is now You: ' + playerWins + ' Computer: ' + computerWins);
        }else if(match === 'tie') {
            console.log('That match was a tie');
        }
    }
    return [playerWins, computerWins];
}
