const { ipcRenderer } = require('electron');

const button = document.getElementById('api-btn');
const tbody = document.getElementById('api-list');

button.addEventListener('click', async () => {
    ipcRenderer.send('get-people');
});

ipcRenderer.on('response-people', (event, { response: people }) => {
    const tbody = document.getElementById('api-list');
    tbody.innerHTML = '';

    people.forEach((person, index) => {
        const row = document.createElement('tr');
        row.className = `hover:bg-blue-50 transition duration-150 ${
          index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
        }`;

        row.innerHTML = `
            <td class="px-6 py-3">${person.name}</td>
            <td class="px-6 py-3">${person.birth_year}</td>
            <td class="px-6 py-3">${person.height}</td>
            <td class="px-6 py-3">${person.mass}</td>
        `;
        tbody.appendChild(row);
    });
});