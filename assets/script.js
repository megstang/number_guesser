var min = 1;
// set default min to 1
var max = 100;
// set default max to 1
var random_number = randomNumber(min,max);
// set default random_number between 1 and 100

function clearGuess() {
  document.getElementById('guesst').value = '';
  //get the element from the text input field and make it blank (empty string)
  enableClearButton();
  // this function disables the clear button because we just cleared the guess
}

function resetGuess() {
  random_number = randomNumber(1,100);
  // chooses a new random number for the new game
  feedback("clearfeedback", "");
  // clears feedback
  clearGuess();
  // clears input field
  enableResetButton();
  //reset button is disabled now that game is already reset
  resetRange(1,100);
  // range is calculated back to default
}

function randomNumber(min, max) {
  return Math.ceil(Math.random() * (max-min) + min );
  // random number calculation-- since math.random returns a number between 0 and 1, we need to multiply by a number in our range and add the min to make sure we start from the min. Ceil just rounds the number since its still a float up until that time.
}

function checkGuess() {
  var current_guess = parseInt(document.getElementById('guesst').value);
  // find and save the current guess that was put in the input field
  if(isNaN(current_guess)){
    //this is saying that if the current guess is not a number (using a javascript built in function) then do the following
    alert("Please input a number");
    // send a pop up alert that the user needs to enter a number
  }
  else if(current_guess < min || current_guess > max) {
    // if the current guess is out of range
    alert( "Please enter a number between " + min + " and " + max);
    // then send an alery that the number needs to be in between the specific min and max for that game
  }
  else if(random_number>current_guess){
    // if the current guess is less than the random number that was generated
    feedback(current_guess, "That is too low");
    // this function will return text that says "your last guess was -- that is too low"
  }
  else if(random_number<current_guess){
    // if the current guess is greater than the random number that was generated
    feedback(current_guess, "That is too high");
    // this function will return text that says "your last guess was -- that is too high"
  }
  else if( random_number == current_guess ){
    // if the guess is correct
    feedback(current_guess, "BOOM!");
    // return feedback that says ' your last guess was -- BOOM!'
    max += 10;
    // increase the maximum by ten
    if (min <= 10){min = 1;}
    else {min -= 10 ;}
    // decrease the minimum by 10 unless that makes it negative
    alert("You've won this round. To keep things interesting, we've changed your max to "+ max + " and your min to " + min+ ".");
    //alert the user that they won and that their min and max will change
    resetRange(min,max);
    //reset range to the new min and max
    random_number = randomNumber(min,max);
    //reset random number so that it is between the min and max
  }
  enableClearButton();
  //disable clear button since we're starting the game over
  document.getElementById('reset-button').disabled = false;
  //reset button is no longer disabled
}


function feedback(current_guess, feedback) {
  //take in the current guess and the feedback
  if(current_guess == "clearfeedback" && feedback == ""){
    document.getElementById('guessp').innerHTML = feedback;
    document.getElementById('current-guess').innerHTML = feedback;
    document.getElementById('feedback').innerHTML = feedback;
    //clear out all feedback responses
  }
  else {
    document.getElementById('guessp').innerHTML = "Your last guess was";
    document.getElementById('current-guess').innerHTML =   current_guess;
    document.getElementById('feedback').innerHTML = feedback;
    //input text that says "your last guess was 'guess' That is too (low/high/boom)."
  }
}

function enableClearButton() {
  if(document.getElementById('guesst').value == ''){
    // if the guess input is blank
    document.getElementById('clear-guess').disabled = true;
    //set the clear button to be disabled
  }
  else {
    document.getElementById('clear-guess').disabled = false;
    //if the guess input isnt clear, then enable the clear button
  }
}

function enableResetButton(){
  document.getElementById('reset-button').disabled = true;
  //when this method is called, it the reset button is disabled
}

function resetRange(minimum,maximum){
  min = minimum
  max = maximum
  //change the min and max to whatever is passed in
  document.getElementById('range-button').disabled = false;
  //disable the range button since it was already inputted
}

function setMaxAndMin(){
  if (document.getElementById('min').value && document.getElementById('max').value){
    //if there is a min and max value that is inputted
    min = parseInt(document.getElementById('min').value);
    max = parseInt(document.getElementById('max').value);
    //set min and max based off of new range
    document.getElementById('min').value = '';
    document.getElementById('max').value = '';
    //clear the input field for min and max
    random_number = randomNumber(min,max);
    //create a new random number for the game that is within the new min and max
    document.getElementById('range-button').disabled = true;
    //disable the range button since the range was just set
  }
}
