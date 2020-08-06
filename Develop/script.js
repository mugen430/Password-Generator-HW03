function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getSpecialCharacter() {
  var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
  return symbol[Math.floor(Math.random() * symbol.length)];
}
//======================================================
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//======================================================
function yesResponse(response) {
  if (
    response !== null &&
    response.toLowerCase() !== "n" &&
    response.toLowerCase() !== "no" &&
    response !== ""
  ) {
    return true;
  } else return false;
}
//======================================================
function criteria() {
  var lengthCriteria = prompt(
    "Would you like to include length as a criteria? (Y/N)"
  );
  var length = null;
  if (yesResponse(lengthCriteria)) {
    length = prompt(
      "What length should the password be? (Should be between 8 and 128)"
    );
  } else {
    length = Math.floor(Math.random() * (128 - 8 + 1) + 8);
  }
  var types = {
    lowercase: prompt("Include lowercase letters? (Y/N)"),
    uppercase: prompt("Include uppercase letters? (Y/N)"),
    numeric: prompt("Include numbers? (Y/N)"),
    specialChars: prompt("Include special characters? (Y/N)"),
  };
  var criteria = { length: length, types: types };
  return criteria;
}
//======================================================
function generatePassword() {
  var password = "";
  var validCriteria = criteria();
  const validFuncs = [];
  if (yesResponse(validCriteria.types.lowercase)) {
    validFuncs.push(getRandomLowerCase);
  }
  if (yesResponse(validCriteria.types.uppercase)) {
    validFuncs.push(getRandomUpperCase);
  }
  if (yesResponse(validCriteria.types.numeric)) {
    validFuncs.push(getRandomNumber);
  }
  if (yesResponse(validCriteria.types.specialChars)) {
    validFuncs.push(getSpecialCharacter);
  }
  if (!validFuncs) alert("At least one type is required!");
  else {
    for (var i = 0; i < validCriteria.length; i++) {
      var randomInt = randomIntFromInterval(0, validFuncs.length - 1);
      password = password.concat(validFuncs[randomInt]());
    }
  }
  return password;
}
//======================================================
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
