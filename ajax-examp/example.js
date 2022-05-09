var $select = $('#people');

$.getJSON("examp.JSON", function(data) {
    $select.html('');
    $.each(data.person, function(key, val) {
        $select.append('<option id="' + val.id + '">' + val.name + '</option>');
    })
})