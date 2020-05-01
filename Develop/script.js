// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {

  //Initializing VARS
  var p1 = "";
  var isValidNumber = false;

  while(isValidNumber === false){
    p1 = Number(prompt("How many characters?"));
    if (typeof(p1)=== "number" && isNaN(p1)===false && p1 >= 8 && p1 <= 128){
      isValidNumber = true;
    }
  }

  var options = [];
  var atLeastOne = false;

  //Run until at least one selected
  while(atLeastOne === false){

    var p2 = confirm("Special characters?");
    var p3 = confirm("Upper case?");
    var p4 = confirm("Lower case?");
    var p5 = confirm("numeric");

    //Instantiate Arrays
    var a1 = "!@#$%^&*()_+".split('');
    var a2 = "qwertyuiopasdfghjklzxcvbnm".split(''); 
    var a3 = "QWERTYUIOPLKJHGFDSAZXCVBNM".split('');
    var a4 = "0123456789".split('');

    if(p2){
      Array.prototype.push.apply(options, a1);
    }
    if(p3){
      Array.prototype.push.apply(options, a3);
    }
    if(p4){
      Array.prototype.push.apply(options, a2);
    }
    if(p5){
      Array.prototype.push.apply(options, a4);
    }
    //Is at least one option confirmed?
    atLeastOne = p2 || p3 || p4 || p5;
  }

  //Loop
  var result = "";
  for (var i=0; i<p1; i++){
    //Random # for options array
    result += options[Math.floor(Math.random()* options.length)];
  }
  return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
