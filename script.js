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
    return "404 error - Please enter valid length beterrn 8 and 126"
  }
  var validCharacters =""
  var validUpper = confirm("Uppercase ?")
  var validlower = confirm("Lowercase ?")
  var validspecial = confirm("special ?")
  var validnumbers = confirm("number ?")
  if(!validUpper && !validlower && !validnumbers && !validspecial) {
    return "404 error - Please choose min 1 option"
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
