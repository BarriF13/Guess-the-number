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
// Check if won
if( guess === winningNum){
  
  // Disable input
  guessInput.disabled = true;
  // Change border color 
  guessInput.style.borderColor = 'green';
  setMessage(`You win, ${winningNum} is winner. ` , 'green');

} else {
   // Wrong Number 
   guessesLeft -= 1;

   if(guessesLeft === 0 ){
      // Disable input
  guessInput.disabled = true;
  // Change border color 
  guessInput.style.borderColor = 'pink';
  // Lost
    setMessage(`You Lost, The correct number was ${winningNum}` , 'pink');
} else {

  // Change border color 
    guessInput.style.borderColor = 'blue';

  // Clear Input
  guessInput.value ='';
  // Game continues -wrong 
    setMessage(`${guess} is not correct, guess again ${guessesLeft} guesses left`,'blue');
}
}
}); 

// Set message
function setMessage(msg , color ){
  message.style.color =  color;
  message.textContent = msg;
}
