$('.spoiler').on('click', 'button', function(event) {
    //Show the spoiler text
    console.log(event.target);
    $('.spoiler span').show();

    //Hide the "Reveal Spoiler" button

    $(event.target).hide();
});


//Create the "reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>');
//Append to web page
$('.spoiler').prepend($button);


//Hide the spoiler text
$('.spoiler span').hide();