const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myText = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
});