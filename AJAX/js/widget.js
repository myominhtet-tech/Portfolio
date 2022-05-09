var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {

        var employees = JSON.parse(xhr.responseText);
        var statusHTML = '<ul class="bulleted">';
        for (var i = 0; i < employees.length; i += 1) {
            if (employees[i].inoffice === true) {
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="out">';
            }
            statusHTML += employees[1].name;
            statusHTML += '</li>';
        }
        statusHTML = '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
};
xhr.open('GET', 'data/employees.json');
xhr.send();


// next



$(document).ready(function() {

    $.getJSON('./../AJAX/data/employee.json', function(response) {
        var statusHTML = '<ul class="bulleted">';
        $.each(response, function(index, employee) {
            if (employee.inoffice === true) {
                statusHTML += '<li class="in">';

            } else {
                statusHTML += '<li class="out"';
            }
            statusHTML += employee.name + '</li>';

        });
        statusHTML += '</ul>';
        $('#employeeList').html(statusHTML);
    });

    $.getJSON('../data/rooms.json', function(response) {
        var statusHTML = '<ul class="rooms">';
        $.each(response, function(index, room) {
            if (room.avaiable === true) {
                statusHTML += '<li class="empty">';

            } else {
                statusHTML += '<li class="full"';
            }
            statusHTML += room.room + '</li>';

        });
        statusHTML += '</ul>';
        $('#roomList').html(statusHTML);
    });
});