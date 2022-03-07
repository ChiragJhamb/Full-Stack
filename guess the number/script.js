'use strict';


/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.score').textContent = 25;

document.querySelector('.number').textContent = 13;


document.querySelector('.guess').value = 23;

score

console.log(document.querySelector('.guess').value);
*/

var secretnumber = Math.trunc(Math.random() * 20) + 1;

var score = 20;
var highscore = 0;

const displaymessage = function (message) {
    document.querySelector('.message').textContent = message;
};


document.querySelector('.check').addEventListener('click', function () {
    var guessnum = Number(document.querySelector('.guess').value);



    // WHEN THERE IS NO INPUT 

    if (!guessnum) {
        displaymessage('Invalid Input 👽');
    }

    // WHEN THE USER GUESSES THE CORRECT NUMBER 

    if (guessnum == secretnumber) {
        displaymessage('CORRECT 🤗');

        document.querySelector('.number').textContent = secretnumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '45rem'
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }

    if (guessnum != secretnumber) {
        if (score > 1) {
            displaymessage(guessnum > secretnumber ? 'TOO HIGH 💩' : 'TOO LOW 💩');
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }
        else {
            displaymessage('You Lost Sir');
            document.querySelector('.score').textContent = 0;
        }

    }

    // WHEN THE USER INPUT IS GREATER THAN THE CORRECT ANSWER
    /*
        if (guessnum > secretnumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'TOO HIGH 💩';
                score = score - 1;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = 'You Lost Sir';
                document.querySelector('.score').textContent = 0;
            }
        }
    
        // WHEN THE USER INPUT IS SMALLER THAN THE CORRECT ANSWER
    
        if (guessnum < secretnumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'TOO LOW 💩';
                score = score - 1;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = 'You Lost Sir';
                document.querySelector('.score').textContent = 0;
            }
        }
        */

});



document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    secretnumber = Math.trunc(Math.random() * 20) + 1;

    displaymessage('start guessing');

    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'


})
