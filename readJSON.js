import myJSON from '/JSONfiles/motorists.json' assert {type:'json'};
console.log(myJSON);

for (var i = 0; i < myJSON.length; i++) {
    var tr;
    tr = $('<tr/>');
    tr.append("<td>" + myJSON[i].person.lastname + " " + myJSON[i].person.firstname + "</td>");
    tr.append("<td>" + myJSON[i].car.manufacturer + "</td>");
    tr.append("<td>" + myJSON[i].car.model + "</td>");
    tr.append("<td>" + myJSON[i].car.year + "</td>");
    $('#tableBrief').append(tr);
}

var row;
var idHuman;
const tbody = document.querySelector('#tableBrief tbody');
tbody.addEventListener('click', function (e) {
    const cell = e.target.closest('td');
    if (!cell) { return; } // Quit, not clicked on a cell
    //const row = cell.parentElement;
    row = e.target.closest('tr');
    idHuman = myJSON[row.rowIndex - 1].id;
    console.log(cell.innerHTML, row.rowIndex, cell.cellIndex, idHuman);
    var extendedInfo = myJSON.find((item => item.id === idHuman))
    console.log(extendedInfo);
    document.getElementById("person").innerHTML = extendedInfo.person.lastname + " " + extendedInfo.person.firstname;
    document.getElementById("manufacturer").innerHTML = extendedInfo.car.manufacturer;
    document.getElementById("model").innerHTML = extendedInfo.car.model;
    document.getElementById("year").innerHTML = extendedInfo.car.year;
    document.getElementById("type").innerHTML = extendedInfo.car.type;
    document.getElementById("color").bgColor = extendedInfo.car.color;
    document.getElementById("isConvertible").checked = extendedInfo.car.isConvertible;
    //if (extendedInfo.car.isConvertible == true) {
    //    document.getElementById("isConvertible").checked = 'checked';
    //}
    //document.getElementById("isConvertible").innerHTML = extendedInfo.car.isConvertible;
    document.getElementById("vin").innerHTML = extendedInfo.car.vin;
});

document.getElementById("isConvertible").disabled = true;