var characterLength = 8;
var choiceArr = [];

var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowerCharArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCharArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharArr = ["!", "@", "#", "$", "%", "^", "&","*","(", ")", "_", "-", "=", "+"]


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

    if(correctPrompts) {
      var password = generatePassword();
    

      passwordText.value = password;
    }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
      var randomCharacter = Math.floor(Math.random() * choiceArr.length)
      password = password + choiceArr[randomCharacter];
    }
    return password;
}

function getPrompts() {
  characterLength = parseInt(prompt("How long do you want you password to be?"));

  if (characterLength < 8 || characterLength > 128) {
    alert("Please enter correct length.");
    return false;
  }
  if(confirm("Would you like to include lower case character(s)?")) {
    choiceArr = choiceArr.concat(lowerCharArr);
  }
  if(confirm("Would you like to include upper case character(s)?")) {
    choiceArr = choiceArr.concat(upperCharArr);
  }
  if(confirm("Would you like to include number(s)?")) {
      choiceArr = choiceArr.concat(numberArr);
  }
      if(confirm("Would you like to include special character(s)?")) {
        choiceArr = choiceArr.concat(specialCharArr);
  }
  return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
