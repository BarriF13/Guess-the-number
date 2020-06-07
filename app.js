
// Game values
let min = 1,
    max = 10,
    winningNum = getRandNum(min, max),
    guessesLeft = 3;

// UI elements

const game = document.querySelector( '#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener

game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();

  }
});

// listen for guess input 

guessBtn.addEventListener('click' ,function(){
      let guess = parseInt(guessInput.value)

if(isNaN(guess) || guess < min || guess > max ){
  setMessage(`Please enter a number between ${min} and ${max}` , 'red');
}
// Check if won
if( guess === winningNum){
   // Game over 
   gameOver(true , `You won, ${winningNum} is the winner!`  ); 
} else {
   // Wrong Number 
   guessesLeft -= 1;
   if(guessesLeft === 0 ){
    gameOver( false , `You Lost, The correct number was ${winningNum}`);
   } else {
  // Change border color 
  guessInput.style.borderColor = 'red';
  // Clear Input
  guessInput.value ='';
  // Game continues -wrong 
    setMessage(`${guess} is not correct, guess again ${guessesLeft} guesses left`,'red');
}
}
}); 

// Set message
function setMessage(msg , color ){
  message.style.color =  color;
  message.textContent = msg;
}

// Game over 

function gameOver(won, msg){
  let color 
  won === true ? color = 'green' : color = 'red';

   // Disable input
   guessInput.disabled = true;
   // Set color 
   message.style.color = color;
   // Change border color 
   guessInput.style.borderColor = color;
   // Set message
   setMessage(msg);

   // Play again
   guessBtn.value = 'Play Again';
   guessBtn.className += 'play-again';

}
// Get winning number
function getRandNum( min, max){
  return Math.floor(Math.random() * (max-min+1)+min);
  
}