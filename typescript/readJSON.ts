
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

const hiddenBlock: HTMLElement = <HTMLElement>document.getElementById("main__detail");
hiddenBlock.hidden = true;

interface DataType {
    id: string;
    person: {
        firstname: string;
        lastname: string;
    };
    car: {
        manufacturer: string;
        model: string;
        type: string;
        vin: string;
        year: number;
        color: string;
        isConvertible: boolean;
    };
}

let idHuman: string;

createTableBrief();

tableBrieftbody.addEventListener('click', (event: Event) => {
    const tableRowTarget: HTMLTableRowElement = <HTMLTableRowElement>event.target;
    
    const row: HTMLTableRowElement = <HTMLTableRowElement>tableRowTarget.closest('tr');
    idHuman = data[row.rowIndex - 1].id;
    const extendedInfo: DataType = <DataType>data.find((driver: DataType) => driver.id === idHuman)

    personCell.textContent = extendedInfo.person.firstname + " " + extendedInfo.person.lastname;
    manufacturerCell.textContent = extendedInfo.car.manufacturer;
    modelCell.textContent = extendedInfo.car.model;
    yearCell.textContent = extendedInfo.car.year.toString();
    typeCell.textContent = extendedInfo.car.model;
    colorCell.style.background = extendedInfo.car.color;
    isConvertibleCell.checked = extendedInfo.car.isConvertible;
    vinCell.textContent = extendedInfo.car.vin;

    hiddenBlock.hidden = false;   
});
buttonDelete.addEventListener('click', () => {
    const numberOfData: number = data.findIndex((driver: DataType) => driver.id === idHuman);
    tableBrieftbody.deleteRow(numberOfData);
    data.splice(numberOfData, 1);
    hiddenBlock.hidden = true;
});

function createTableBrief(): void {
    data.forEach((member: DataType) => {
        const tr: HTMLTableRowElement = document.createElement('tr');
        tr.innerHTML = `<td>${member.person.firstname} ${member.person.lastname}</td>
                      <td>${member.car.manufacturer}</td>
                      <td>${member.car.model}</td>
                      <td>${member.car.year}</td>`
        tableBrieftbody.appendChild(tr);
    });
}
