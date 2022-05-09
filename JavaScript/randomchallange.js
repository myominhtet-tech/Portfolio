var input1 = prompt("Please Enter your starting number.");
var bottomNumber = parseInt(input1);
var input2 = prompt("Please Enter your next number.");
var topNumber = parseInt(input2);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + ".</p>";
document.write(message);