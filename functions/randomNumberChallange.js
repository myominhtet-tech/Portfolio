function getRandomNumber(lower, upper) {
    if (isNaN(lower) || isNaN(upper)) {
        throw new Error('Both arguments must be numbers.');
    }
    var random = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    return random;
}

console.log(getRandomNumber(1, 6));
console.log(getRandomNumber(1, 100));
console.log(getRandomNumber(200, 500));
console.log(getRandomNumber(1000, 20000));
console.log(getRandomNumber(50, 100));