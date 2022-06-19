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
var hidenBlock = document.getElementById("main__detail");
hidenBlock.hidden = true;
var idHuman;
createTableBrief();
tableBrieftbody.addEventListener('click', function (event) {
    var target = event.target;
    var tar = event === null || event === void 0 ? void 0 : event.target;
    var row = target.closest('tr');
    idHuman = data[row.rowIndex - 1].id;
    var extendedInfo = data.filter(function (item) { return item.id === idHuman; });
    console.log(extendedInfo);
    extendedInfo.forEach(function (item) {
        personCell.textContent = item.person.firstname + " " + item.person.lastname;
        manufacturerCell.textContent = item.car.manufacturer;
        modelCell.textContent = item.car.model;
        yearCell.textContent = item.car.year.toString();
        typeCell.textContent = item.car.model;
        colorCell.bgColor = item.car.color;
        isConvertibleCell.checked = item.car.isConvertible;
        vinCell.textContent = item.car.vin;
    });
    hidenBlock.hidden = false;
});
buttonDelete.addEventListener('click', function (event) {
    var numberOfdata = 0;
    data.forEach(function (item) {
        if (item.id == idHuman) {
            numberOfdata = data.indexOf(item);
        }
    });
    data.splice(numberOfdata, 1);
    hidenBlock.hidden = true;
    var tr = document.createElement('tr');
    while (tableBrieftbody.rows[0]) {
        tableBrieftbody.deleteRow(0);
    }
    createTableBrief();
});
function createTableBrief() {
    data.forEach(function (member) {
        var tr = document.createElement('tr');
        tr.innerHTML = "<td>".concat(member.person.firstname, " ").concat(member.person.lastname, "</td>\n                      <td>").concat(member.car.manufacturer, "</td>\n                      <td>").concat(member.car.model, "</td>\n                      <td>").concat(member.car.year, "</td>");
        tableBrieftbody.appendChild(tr);
    });
}
