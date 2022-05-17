// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var upper = "ABCDEFGHIJKLMNOPQRST";
  var lower = "abcdefghijklmnopqrst"
  var special = "!@#$%^&*()_+"
  var numbers = "1234567890"
  var plength = parseInt(prompt("Enter password length"))
  if(plength < 8 || plength > 126 || isNaN(plength)){
    return "404 error"
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
