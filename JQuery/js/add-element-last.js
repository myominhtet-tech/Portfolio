//Create the "reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>');
//Append to web page
$('.spoiler').prepend($button);


//Hide the spoiler text
$('.spoiler span').hide();
//Menu the button is pressed
$('.spoiler button').click(function() {
    //Show the spoiler text

    $('.spoiler span').show();

    //Hide the "Reveal Spoiler" button

    $('.spoiler button').hide();
});