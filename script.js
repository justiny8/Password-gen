// Assignment code here
var generateBtn = document.querySelector("#generate");

//Global character options
var upperLetters = ('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
var lowerLetters = ('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
var specialChars = ('!','@','#','$','%','^','&','*','(',')','<','>','?');
var numbers = ('1','2','3','4','5','6','7','8','9');

//generate random password based upon criterias via series of prompts
function generatePassword() {
  var password = "";

//Password Length
  var confirmLength = prompt("Choose Character for password");
  while(confirmLength <= 8 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters.");
    confirmLength = (prompt("How many characters do you want your password to include?"));
  };

//Variables for selected character types
  var upperCase = confirm("Click 'OK' to include uppercased characters in your password.")
  var lowerCase = confirm("Click 'OK' to include lowercased characters in your password.")
  var specialCase = confirm("Click 'OK' to include special characters in your password.")
  var numberCase = confirm("Click 'OK' to include numbers in your password.")

//Confirm character types
  if (upperCase === false && lowerCase === false && specialCase === false && numberCase === false) {
    window.alert("Please select at least ONE character type");
  
  upperCase = window.confirm("Click to inlcude upper cased letters in your password.");
  lowerCase = window.confirm("Click to include lower cased lettters in your password.");
  specialCase = window.confirm("Click to include special characters in your password.");
  numberCase = window.confirm("Click to confirm numbers in your password.");
  };


//Running criteria

  var randomLetter;
  var chars = [];

  if (upperCase) {
    chars = chars.concat(upperLetters);
  }
  if (lowerCase) {
    chars = chars.concat(lowerLetters);
  }
  if (specialCase) {
    chars = chars.concat(specialChars);
  }
  if (numberCase) {
    chars = chars.concat(numbers);
  }

  //randomizing letters
  for (var i = 0; i <= confirmLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    randomLetter = chars[randomNumber];
    // password += chars.substring(randomNumber, randomNumber +1);

    password = password + randomLetter;
  }
  return password;
};

// document.getElementById("password").value = password;

// Get references to the #generate element


// Write password to the #password input
function writePassword() {
var newPassword = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = newPassword;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
