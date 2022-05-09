var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I am thinking of a number between 1 and 6.What it is?');
if (parseInt(guess) === randomNumber) {
    document.write('<p>You guess the number!</p>');

} else {
    document.write('<p>Sorry the number was ' + randomNumber + '</p>');
}