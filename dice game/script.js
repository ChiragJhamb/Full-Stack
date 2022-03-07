'use strict';
// players ke scores 
const player1 = document.querySelector('#score--0');
const player2 = document.querySelector('#score--1');

// This will have the current score of player 1 
const Player1Score = document.querySelector('#current--0');

// Player 2 score is stored here
const Player2Score = document.querySelector('#current--1');

// selecting the player classes 
const player1class = document.querySelector('.player--0');
const player2class = document.querySelector('.player--1');

// the dice image and the buttons
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

player1.textContent = 0;
player2.textContent = 0;
diceElement.classList.add('hidden');


// defining a current score in which we will keep saving the values unless we hit a 1.
// setting the current score , active player and total score for 2 players in array
var currentScore = 0;
var activePlayer = 0;

const scores = [0, 0];

let playing = true;

const switchPlayer = function () {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1class.classList.toggle('player--active');
    player2class.classList.toggle('player--active');
};



btnRoll.addEventListener('click', function () {

    if (playing) {


        // Generating a Random Dice Roll.
        const dice = Math.trunc(Math.random() * 6) + 1;

        //Display The dice

        // making the dice visible again
        diceElement.classList.remove('hidden');

        // Getting the dice image based on the number in the constant dice.
        diceElement.src = `dice-${dice}.png`;

        // Check if dice is 1 

        if (dice == 1) {
            switchPlayer();
        }
        else {
            currentScore = currentScore + dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

        }
    }
})

btnHold.addEventListener('click', function () {

    if (playing) {


        // add the current score to the active player whenever we click hold
        scores[activePlayer] = scores[activePlayer] + currentScore; // added that score to the array here.

        // now displaying that 
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // winner decide 

        if (scores[activePlayer] > 5) {
            playing = false;

            // hiding the dice again 
            diceElement.classList.add('hidden');
            // adding the winner css
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            //removing the active player css
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        else {
            // switching the player 
            switchPlayer();
        }

    }
})


btnNew.addEventListener('click', function () {
    playing = true;
    scores[0] = 0;
    scores[1] = 0;

    currentScore = 0;
    player1.textContent = 0;
    player2.textContent = 0;

    Player1Score.textContent = 0;
    Player2Score.textContent = 0;


    diceElement.classList.remove('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');




})
