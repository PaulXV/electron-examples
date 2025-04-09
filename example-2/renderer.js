const { ipcRenderer } = require('electron');

const button = document.getElementById('data');
button.addEventListener('click', () => {
    const data = { message: 'Hello from the button!' };
    ipcRenderer.send('data', data);
});

ipcRenderer.on('response', (event, data) => {
    console.log(data.response); // Logs 'success' from the main process
    alert(data.response); // Alert the response
});