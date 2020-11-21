

writePassword = function(generate) {

  var userPW = document.getElementById("pw").value;
if(userPW.length < 8){

  document.getElementById("Minimum length").innerHTML = "Must be at least 8 characters long.";
  document.getElementById("Minimum length").style.color = "red";
  return false;;

} 

else if (userPW.length > 20){

  document.getElementById("Maximum length").innerHTML = "Cannot be more than 20 characters long.";
  document.getElementById("Maximum length").style.color = "red";
  return false;

}



else if (userPW.search(/[0-9]/)== -1){
  document.getElementById("number").style.color = "red";
  }

else if (userPW.search(/[a-z]/)== -1){

  document.getElementById("lowercase").innerHTML = "Must contain a lowercase letter.";
  document.getElementById("lowercase").style.color = "red";
  return false;

}

else if (userPW.search(/[A-Z]/)== -1){

  document.getElementById("uppercase").innerHTML = "Must contain an uppercase letter.";
  document.getElementById("uppercase").style.color = "red";
  return false;

}

else if (userPW.search(/[ `\!\@\#\%\^\^\&\$\(\)\*\-\=\+\?\.\>\,]/)== -1){

  document.getElementById("special").innerHTML = "Must contain a symbol.";
  document.getElementById("special").style.color = "red";
  return false;

}

document.getElementById("#Status").innerHTML = "This is a valid Password";
document.getElementById("#Status").style.color = "green";
document.getElementById("#Status").style.textAlign ="center";

}



/*function display {
var userInput =prompt("Enter yoout new Password");
{}

}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  document.getElementById("#password").innerHTML=userInput;

    var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/