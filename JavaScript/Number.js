var secondPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerYear = 365;

var yourAge = prompt("How old are you? Please type with year number.");
var SecondsPerYear = secondPerMin * minsPerHour * hoursPerDay * daysPerYear;
var secondsAge = parseInt(SecondsPerYear) * parseInt(yourAge);
document.write('<h2>You are ' + secondsAge + ' seconds in your life.</h2>');