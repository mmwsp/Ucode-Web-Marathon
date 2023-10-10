// script.js
const uploadForm = document.getElementById('upload-form');
const tableContainer = document.getElementById('table-container');
const filterContainer = document.getElementById('filter-container');
const filterInput = document.getElementById('filter-input');
const filterButton = document.getElementById('filter-button');

uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(uploadForm);

  fetch('/upload', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      displayTable(data);
      filterContainer.style.display = 'block';
    })
    .catch((error) => console.error(error));
});

function displayTable(data) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  const headers = Object.keys(data[0]);

  const headerRow = document.createElement('tr');
  headers.forEach((header) => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  data.forEach((row) => {
    const tr = document.createElement('tr');
    headers.forEach((header) => {
      const td = document.createElement('td');
      td.textContent = row[header];
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  tableContainer.innerHTML = '';
  tableContainer.appendChild(table);
}

filterButton.addEventListener('click', () => {
  const filterText = filterInput.value.toLowerCase();
  const tableRows = document.querySelectorAll('tbody tr');

  tableRows.forEach((row) => {
    let isVisible = false;
    row.querySelectorAll('td').forEach((cell) => {
      if (cell.textContent.toLowerCase().includes(filterText)) {
        isVisible = true;
      }
    });

    if (isVisible) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});
