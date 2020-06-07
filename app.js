/* 
Game features :
- Guess between a min and max
- Certain amount of guesses
- Notify remaining guesses
- player can play again

*/

// Game values
let min = 2,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI elements

const game = document.querySelector( 'game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// listen for guess input 

guessBtn.addEventListener('click' ,function(){
      let guess = parseInt(guessInput.value)

if(isNaN(guess) || guess < min || guess > max ){
  setMessage(`Please enter a number between ${min} and ${max}` , 'red');
}
}); 

// Set message
function setMessage(msg , color ){
  message.style.color =  color;
  message.textContent = msg;
}
