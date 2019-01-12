var random_number = randomNumber(1,100);


function clearGuess() {
  document.getElementById('guesst').value = ''
}

function resetGuess() {
  random_number = randomNumber(1,100);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max-min) + min );
}

function checkGuess() {
  if(document.getElementById('guessb').value == "Guess"){
    var current_guess = document.getElementById('guesst').value;
    if(random_number>current_guess){
      document.getElementById('guessp').innerHTML = "That is too low!"
    }
    else if(random_number<current_guess){
      document.getElementById('guessp').innerHTML = "That is too high!"
    }
    else {
      document.getElementById('guessp').innerHTML = "BOOM!"
    }
  }

}
