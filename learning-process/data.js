fetch('data.csv')
.then(response => response.text())
.then(data => {
const rows = data.split('\n');
const table = document.getElementById('csvTable');

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
