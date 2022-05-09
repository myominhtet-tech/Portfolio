//quiz begins, no answers correct
var correct = 0;

// ask questions
var answer1 = prompt("Name a programming language that's also a gem");
if (answer1.toUpperCase() === 'RUBY') {
    correct += 1;
}

var answer2 = prompt("Name a programming language that's also a snake");
if (answer2.toUpperCase() === 'PYTHON') {
    correct += 1;
}

var answer3 = prompt("Name a programming language that's also a snake");
if (answer3.toUpperCase() === 'CSS') {
    correct += 1;
}
var answer4 = prompt("Name a programming language that's also a snake");
if (answer4.toUpperCase() === 'HTML') {
    correct += 1;
}
var answer5 = prompt("Name a programming language that's also a snake");
if (answer5.toUpperCase() === 'JAVASCRIPT') {
    correct += 1;
}

//output results
document.write("<p>You got " + correct + " out of 5 questions correct.</p>");

//output rank
if (correct === 5) {
    document.write("<p><strong>You earned a gold crown!</strong></p>");
} else if (correct >= 3) {
    document.write("<p><strong>You earned a silver crown.</strong></p>");

} else if (correct >= 1) {
    document.write("<p><strong>You earned a browzen crown.</strong></p>");
} else {
    document.write("<p><strong>No crown for you. You need to study.</strong></p>");
}