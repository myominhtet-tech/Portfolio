const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

//for add background color in link
 $odd. css('backgroundColor', 'lightblue');

 $secureLinks.addClass('secure'); 
 $pdfs.addClass('pdf');

 $pdfs.on('click', function  (event) {
      //check if checkbox has been checked
      //if zero checkboxs are checked
      if($(':checked' )).length === 0) {
      //prevent download of document
      event.preventDefault(); 
      //alert the user
      alert('Please check the box to allow PDF downloads.'); 
      } 
      //else allow the download
 }); 