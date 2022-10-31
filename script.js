// Assignment Code
var generateBtn = document.querySelector("#generate");


var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%&*^(){}[]/\+=";
var chosenCharacters = "";

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);
function generatePassword(){
  var result = "";
var length = prompt("How many characters would you like your passsword to contain?");
  return generatePassword()
  }
  if(length<8 || length> 128)
   
  return generatePassword()

  var includeUpper = confirm("Include upper case letters?");
  var includeLower = confirm("Include lower case letters?");
  var includeNumbers = confirm("Include numbers?");
  var includepecial = confirm("Include special characters?");

    
   { return generatePassword()
  }

  if(includeUpper){
    chosenCharacters += upper
  }
  if(includeLower){
    chosenCharacters += lower
  }

  if(includeNumbers) {
    chosenCharacters += numbers
  }

  if(includeSpecial) {
    chosenCharacters += special
  }

