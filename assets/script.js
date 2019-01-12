var random_number = randomNumber(1,100);


function clearGuess() {
  document.getElementById('guesst').value = ''
}

function resetGuess() {
  random_number = randomNumber(1,100);
  feedback("clearfeedback", "");
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max-min) + min );
}

function checkGuess() {
  if(document.getElementById('guessb').value == "Guess"){
    var current_guess = document.getElementById('guesst').value;
    if(random_number>current_guess){
      feedback(current_guess, "This is too low!")
    }
    else if(random_number<current_guess){
      feedback(current_guess, "This is too high!")
    }
    else if( random_number == current_guess ){
      feedback(current_guess, "BOOM!")
    }
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
