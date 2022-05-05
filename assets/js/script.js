// Assignment code here

function generatePassword() {
  var pwdChar = prompt("Enter A to only use upper and lower case letters. '\n' Enter 1 to include numbers. '\n' Enter ! to include special characters.");
  console.log(pwdChar);
  var charList = "abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (pwdChar === "1") {
    var charList = "abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  }

  else if (pwdChar === "!") {
    var charList = "abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
  }
  else {
    var charList = "abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  var pwdLength = 8;
  var password = "";
  var lengthSelect = prompt("Please select a number between 8 and 128.")
  console.log(lengthSelect)

  if (lengthSelect >= 8 && lengthSelect <= 129) {
    for (var i = 0; i < lengthSelect; i++) {
      var randomNumber = Math.floor(Math.random() * charList.length);
      password += charList.substring(randomNumber, randomNumber + 1);
    }
  }
  else {
    for (var i = 0; i < pwdLength; i++) {
      var randomNumber = Math.floor(Math.random() * charList.length);
      password += charList.substring(randomNumber, randomNumber + 1);
    }
  }
  console.log(pwdLength);
  console.log(password);
  window.password = password
}
console.log(window.password)
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = window.password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
