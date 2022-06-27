document.querySelector("#generate").addEventListener("click", writePassword);

var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = ' !"#$%&()*+,-./:;<=>?@[]^_`{|}~' + "'";
var numericCharacters = "123456789";

function generatePassword(length, characters) {
  var password = "";
  for (var i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

function generateLength() {
  length = prompt("Password length between 8 & 128");
  length = Number(length);
  if (length < 8) {
    alert("Password too short");
    return "Number below 8";
  } else if (length > 128) {
    alert("Password too long");
    return "Number above 128";
  } else {
    return length;
  }
}

function generateCharcters() {
  var characterList = "";
  var text = "Would you like to include ";
  lowercase = confirm(text + "lowercase letters?");
  uppercase = confirm(text + "uppercase letters?");
  special = confirm(text + "special characters?");
  numeric = confirm(text + "numbers?");
  if (lowercase === true) {
    characterList += lowercaseCharacters;
  }
  if (uppercase === true) {
    characterList += uppercaseCharacters;
  }
  if (special === true) {
    characterList += specialCharacters;
  }
  if (numeric === true) {
    characterList += numericCharacters;
  }
  if (characterList === "") {
    alert("Minimum password requirements not met");
    return "No Characters Selected";
  } else {
    return characterList;
  }
}

function writePassword() {
  var characters = generateCharcters();
  if (characters !== "No Characters Selected") {
    var length = generateLength();
    if (length !== "Number above 128" && length !== "Number below 8") {
      var password = generatePassword(length, characters);
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
  }
}
