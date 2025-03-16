fetch('data2.csv')
.then(response => response.text())
.then(data2 => {
const rows = data2.split('\n');
const table = document.getElementById('csvTable2');

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
