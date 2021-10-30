// Assignment code here
var numbers = "0123456789".split("");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var symbols = "!@#$%^&*?=+-><(){}[]_/\~".split("");
var passwordLength = "";
var userChoice = [];
var password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var passwordLength = prompt("How long would you like your password to be? It can be between 8 and 128 characters!");
      if (passwordLength < 8 || passwordLength > 128) {
                alert("Please choose enter a number between 8 and 128");
            var passwordLength = prompt("How many characters would you like in your password?");
            return passwordLength;
      }   

          
          alert("Your password will be " + passwordLength + " characters long");
       

          var numbersLength = confirm("Include numbers?");
          if (numbersLength === true) {
            userChoice = userChoice.concat(numbers)
          }
         
          var upperCaseLength = confirm("Include UPPERCASE letters?");
          if (upperCaseLength === true) {
            userChoice = userChoice.concat(upperCase)
          }
         
          var lowerCaseLength = confirm("Include lowercase letters?");
          if (lowerCaseLength === true) {
            userChoice = userChoice.concat(lowerCase)
          }
      
          var symbolsLength = confirm("Include symbols?");
          if (symbolsLength === true) {
            userChoice = userChoice.concat(symbols)
          }
  
    else {
      console.log('fail');
      alert("Please Select 1 value")
      location.reload();
     
      
    }

  
  
  
    for (var i = 0; i < passwordLength; i++) {
      var randomPassword = Math.floor(Math.random() * userChoice.length)
      password += userChoice[randomPassword]
    }
  
    return password;
  }




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);