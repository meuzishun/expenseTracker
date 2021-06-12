const form = document.querySelector('#form');
const table = document.querySelector('tbody');
const clearBtn = document.querySelector('#clear');

function clearInputs(evt) {
    let host = evt.target.parentElement;
    console.log(host);
}

function removeRow(evt) {
    evt.target.parentElement.parentElement.remove();
}

function createHTML(input) {
    let row = document.createElement('tr');
    for (const key in input) {
        let cell = document.createElement('td');
        cell.innerHTML = input[key];
        row.appendChild(cell);
    }
    let deleteCell = document.createElement('td');
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'X';
    deleteBtn.addEventListener('click', removeRow);
    deleteCell.appendChild(deleteBtn);
    row.appendChild(deleteCell);
    table.appendChild(row);
}

function getData(data) {
    let inputs = {
        name: data.name.value,
        date: data.date.value,
        amount: data.amount.value
    }
    createHTML(inputs);
}

function addItem(evt) {
    evt.preventDefault();
    getData(evt.target.children);
    clearInputs(evt);
}

form.addEventListener('submit', addItem)