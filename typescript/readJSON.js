import data from '../JSONfiles/motorists.json' assert { type: 'json' };
var tableBrieftbody = document.getElementById("tableBrief_tbody");
var personCell = document.getElementById("person");
var manufacturerCell = document.getElementById("manufacturer");
var modelCell = document.getElementById("model");
var yearCell = document.getElementById("year");
var typeCell = document.getElementById("type");
var colorCell = document.getElementById("color");
var isConvertibleCell = document.getElementById("isConvertible");
var vinCell = document.getElementById("vin");
var buttonDelete = document.getElementById('delete-btn');
var hiddenBlock = document.getElementById("main__detail");
hiddenBlock.hidden = true;
var idHuman;
createTableBrief();
tableBrieftbody.addEventListener('click', function (event) {
    var tableRowTarget = event.target;
    var row = tableRowTarget.closest('tr');
    idHuman = data[row.rowIndex - 1].id;
    var extendedInfo = data.find(function (driver) { return driver.id === idHuman; });
    personCell.textContent = extendedInfo.person.firstname + " " + extendedInfo.person.lastname;
    manufacturerCell.textContent = extendedInfo.car.manufacturer;
    modelCell.textContent = extendedInfo.car.model;
    yearCell.textContent = extendedInfo.car.year.toString();
    typeCell.textContent = extendedInfo.car.model;
    colorCell.bgColor = extendedInfo.car.color;
    isConvertibleCell.checked = extendedInfo.car.isConvertible;
    vinCell.textContent = extendedInfo.car.vin;
    hiddenBlock.hidden = false;
});
buttonDelete.addEventListener('click', function (event) {
    var numberOfData = data.findIndex(function (driver) { return driver.id === idHuman; });
    tableBrieftbody.deleteRow(numberOfData);
    data.splice(numberOfData, 1);
    hiddenBlock.hidden = true;
});
function createTableBrief() {
    data.forEach(function (member) {
        var tr = document.createElement('tr');
        tr.innerHTML = "<td>".concat(member.person.firstname, " ").concat(member.person.lastname, "</td>\n                      <td>").concat(member.car.manufacturer, "</td>\n                      <td>").concat(member.car.model, "</td>\n                      <td>").concat(member.car.year, "</td>");
        tableBrieftbody.appendChild(tr);
    });
}
