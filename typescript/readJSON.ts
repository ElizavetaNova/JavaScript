
import data from '../JSONfiles/motorists.json' assert { type: 'json' };

const tableBrieftbody: HTMLTableElement = <HTMLTableElement>document.getElementById("tableBrief_tbody");

const personCell: HTMLTableCellElement = <HTMLTableCellElement>document.getElementById("person");
const manufacturerCell: HTMLTableCellElement = <HTMLTableCellElement>document.getElementById("manufacturer");
const modelCell: HTMLTableCellElement = <HTMLTableCellElement>document.getElementById("model");
const yearCell: HTMLTableCellElement = <HTMLTableCellElement>document.getElementById("year");
const typeCell: HTMLTableCellElement = <HTMLTableCellElement>document.getElementById("type");
const colorCell: HTMLTableCellElement = <HTMLTableCellElement>document.getElementById("color");
const isConvertibleCell: HTMLInputElement = <HTMLInputElement>document.getElementById("isConvertible");
const vinCell: HTMLTableCellElement = <HTMLTableCellElement>document.getElementById("vin");

const buttonDelete: HTMLButtonElement = <HTMLButtonElement>document.getElementById('delete-btn');

const hidenBlock: HTMLElement = <HTMLElement>document.getElementById("main__detail");
hidenBlock.hidden = true;

let idHuman: string;

createTableBrief();

tableBrieftbody.addEventListener('click', (event: Event) => {
    const target: HTMLTableRowElement = <HTMLTableRowElement>event.target;
    let tar = event?.target as HTMLElement;
    
    const row: HTMLTableRowElement = <HTMLTableRowElement>target.closest('tr');
    idHuman = data[row.rowIndex - 1].id;
    const extendedInfo = data.filter(item => item.id === idHuman)
    console.log(extendedInfo);
    extendedInfo.forEach(item => {
        personCell.textContent = item.person.firstname + " " + item.person.lastname;
        manufacturerCell.textContent = item.car.manufacturer;
        modelCell.textContent = item.car.model;
        yearCell.textContent = item.car.year.toString();
        typeCell.textContent = item.car.model;
        colorCell.bgColor = item.car.color;
        isConvertibleCell.checked = item.car.isConvertible;
        vinCell.textContent = item.car.vin;
    })
    hidenBlock.hidden = false;   
});
buttonDelete.addEventListener('click', event => {
    let numberOfdata = 0;
    data.forEach(item => {
        if (item.id == idHuman) {
            numberOfdata = data.indexOf(item);
        }
    });

    data.splice(numberOfdata, 1);
    hidenBlock.hidden = true;
    const tr: HTMLTableRowElement = <HTMLTableRowElement>document.createElement('tr');
    while (tableBrieftbody.rows[0]) {
        tableBrieftbody.deleteRow(0);
    }
    createTableBrief();
});

function createTableBrief(): void {
    data.forEach(member => {
        const tr: HTMLTableRowElement = document.createElement('tr');
        tr.innerHTML = `<td>${member.person.firstname} ${member.person.lastname}</td>
                      <td>${member.car.manufacturer}</td>
                      <td>${member.car.model}</td>
                      <td>${member.car.year}</td>`
        tableBrieftbody.appendChild(tr);
    });
}

