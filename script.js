const form = document.querySelector('#input-form');
const inputName = document.querySelector('#name');
const inputDate = document.querySelector('#date');
const inputAmount = document.querySelector('#amount');
const addExpenseBtn = document.querySelector('#submit');
const summaryTable = document.querySelector('tbody');

function clearInput() {
    inputName.value = '';
    inputDate.value = '';
    inputAmount.value = '';
    inputName.focus();
}

function formatAmount(amount) {
    amount = +amount;
    let realAmount = amount.toFixed(2);
    return `$${realAmount}`;
}

function getData() {
    let data = {
        name: inputName.value,
        date: inputDate.value,
        amount: inputAmount.value
    }
    clearInput();
    return data;
}

function removeItem(evt) {
    evt.target.parentElement.parentElement.remove();
}

function createTableRow(data) {
    let tableRow = document.createElement('tr');

    let tableName = document.createElement('td');
    tableName.innerHTML = data.name;
    
    let tableDate = document.createElement('td');
    tableDate.innerHTML = data.date;
    
    let tableAmount = document.createElement('td');
    tableAmount.innerHTML = formatAmount(data.amount);

    let deleteContainer = document.createElement('td');
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'X';
    deleteBtn.addEventListener('click', removeItem);
    deleteContainer.appendChild(deleteBtn);

    tableRow.appendChild(tableName);
    tableRow.appendChild(tableDate);
    tableRow.appendChild(tableAmount);
    tableRow.appendChild(deleteContainer);

    return tableRow;
}

function addToList(evt) {
    evt.preventDefault();

    // let elements = Array.from(evt.target.elements);
    // console.log(elements);

    let data = getData();
    let tableRow = createTableRow(data);
    summaryTable.appendChild(tableRow);
}

form.addEventListener('submit', addToList);
