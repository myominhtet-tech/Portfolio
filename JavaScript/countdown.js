var questions = 3;

var questionsleft = '[' + questions + 'questions left]';
var adjective = prompt('Please type an adjective' + questionsleft);
questions -= 1;
questionsleft = '[' + questions + 'questions left]';
var verb = prompt('Please type an verb' + questionsleft);
questions -= 1;
questionsleft = '[' + questions + 'questions left]';
var sentence = prompt('Please type an sentence' + questionsleft);