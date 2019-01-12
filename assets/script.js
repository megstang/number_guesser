var min = 1
var max = 100
var random_number = randomNumber(min,max);

function clearGuess() {
  document.getElementById('guesst').value = '';
  enableClearButton();
}

function resetGuess() {
  random_number = randomNumber(1,100);
  feedback("clearfeedback", "");
  clearGuess();
  enableResetButton();
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max-min) + min );
}

function checkGuess() {
  if(document.getElementById('guessb').value == "Guess"){
    var current_guess = document.getElementById('guesst').value;
    if(isNaN(current_guess)){
      alert("Please input a number")
    }
    else if(current_guess < min || current_guess > max) {
      alert( "Please enter a number between " + min + " and " + max)
    }
    else if(random_number>current_guess){
      feedback(current_guess, "This is too low!")
    }
    else if(random_number<current_guess){
      feedback(current_guess, "This is too high!")
    }
    else if( random_number == current_guess ){
      feedback(current_guess, "BOOM!")
    }
    enableClearButton();
    document.getElementById('reset-button').disabled = false;
  }
}

function feedback(current_guess, feedback) {
  if(current_guess == "clearfeedback" && feedback == ""){
    document.getElementById('guessp').innerHTML = feedback;
  }
  else {
    document.getElementById('guessp').innerHTML = "Your last guess was " +  current_guess + ' ' + feedback;
  }
}

function enableClearButton() {
  if(document.getElementById('guesst').value == ''){
    document.getElementById('clear-guess').disabled = true;
  }
  else {
    document.getElementById('clear-guess').disabled = false;
  }
}

function enableResetButton(){
  document.getElementById('reset-button').disabled = true;
}
