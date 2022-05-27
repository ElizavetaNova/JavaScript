
import myJSON from '/JSONfiles/motorists.json' assert { type: 'json' };


$('.main-detail').hide(0);

myJSON.forEach(item => {
    const tr = $('<tr/>');
    tr.append(`<td>${item.person.lastname} ${item.person.firstname}</td>`);
    tr.append(`<td>${item.car.manufacturer}</td>`);
    tr.append(`<td>${item.car.model}</td>`);
    tr.append(`<td>${item.car.year}</td>`);
    $('#tableBrief').append(tr);
})

$('#tableBrief tbody').click(function (e) {
    const target = e.target;
    const row = target.closest('tr');
    const idHuman = myJSON[row.rowIndex - 1].id;
    const extendedInfo = myJSON.find(item => item.id === idHuman)

    $('#person').text(extendedInfo.person.lastname + " " + extendedInfo.person.firstname);
    $('#manufacturer').text(extendedInfo.car.manufacturer);
    $('#model').text(extendedInfo.car.model);
    $('#year').text(extendedInfo.car.year);
    $('#type').text(extendedInfo.car.type);
    $('#color').css('background-color', extendedInfo.car.color);
    $('#isConvertible').prop('checked', extendedInfo.car.isConvertible);
    $('#vin').text(extendedInfo.car.vin);
    $('.main-detail').show(0);
});