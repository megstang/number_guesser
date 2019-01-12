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
  resetRange(1,100);
}

function randomNumber(min, max) {
  return Math.ceil(Math.random() * (max-min) + min );
}

function checkGuess() {
  var current_guess = parseInt(document.getElementById('guesst').value);
  if(isNaN(current_guess)){
    alert("Please input a number");
  }
  else if(current_guess < min || current_guess > max) {
    alert( "Please enter a number between " + min + " and " + max);
  }
  else if(random_number>current_guess){
    feedback(current_guess, "That is too low");
  }
  else if(random_number<current_guess){
    feedback(current_guess, "That is too high");
  }
  else if( random_number == current_guess ){
    feedback(current_guess, "BOOM!");
    max += 10;
    if (min <= 10){min = 1;}
    else {min -= 10 ;}
    alert("You've won this round. To keep things interesting, we've changed your max to "+ max + " and your min to " + min+ ".");
    resetRange(min,max)
    random_number = randomNumber(min,max);
  }
  enableClearButton();
  document.getElementById('reset-button').disabled = false;
}


function feedback(current_guess, feedback) {
  if(current_guess == "clearfeedback" && feedback == ""){
    document.getElementById('guessp').innerHTML = feedback;
    document.getElementById('current-guess').innerHTML = feedback;
    document.getElementById('feedback').innerHTML = feedback;
  }
  else {
    document.getElementById('guessp').innerHTML = "Your last guess was";
    document.getElementById('current-guess').innerHTML =   current_guess;
    document.getElementById('feedback').innerHTML = feedback;
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

function resetRange(minimum,maximum){
  min = minimum
  max = maximum
  document.getElementById('range-button').disabled = false;
}

function setMaxAndMin(){
  if (document.getElementById('min').value && document.getElementById('max').value){
    min = parseInt(document.getElementById('min').value);
    max = parseInt(document.getElementById('max').value);
    document.getElementById('min').value = '';
    document.getElementById('max').value = '';
    random_number = randomNumber(min,max);
    document.getElementById('range-button').disabled = true;
  }
}
