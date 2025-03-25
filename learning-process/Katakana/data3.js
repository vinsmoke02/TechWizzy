fetch('data3.csv')
.then(response => response.text())
.then(data3 => {
const rows = data3.split('\n');
const table = document.getElementById('csvTable3');

rows.forEach((row, index) => {
    const cells = row.split(',');
    const rowElement = document.createElement('tr');

    cells.forEach(cell => {
    const cellElement = index === 0 ? document.createElement('th') : document.createElement('td');
    cellElement.textContent = cell;
    rowElement.appendChild(cellElement);
    });

    table.appendChild(rowElement);
});
});
reader.readAsText(file);

function goBack() {
    window.history.back(); // Navigates to the previous page
}
