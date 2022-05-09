const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

//for add background color in link
 $odd. css('backgroundColor', 'lightblue');

 $secureLinks.addClass('secure'); 
 $pdfs.addClass('pdf');