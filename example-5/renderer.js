const { ipcRenderer } = require('electron');

const minimizeBtn = document.getElementById('minimizeBtn');
const maximiseBtn = document.getElementById('maximizeBtn');
const closeBtn = document.getElementById('closeBtn');

minimizeBtn.addEventListener('click', () => {
    ipcRenderer.send('window:minimize');
});

maximiseBtn.addEventListener('click', () => {
    ipcRenderer.send('window:maximize');
});

closeBtn.addEventListener('click', () => {
    ipcRenderer.send('window:close');
});