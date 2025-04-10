const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  
  mainWindow.loadFile('index.html');
  
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

ipcMain.on('open-tk-window', async (event, arg) => {
  const { python } = require('pythonia');
  
  try {
    const tk = await python('tkinter');
    const root = await tk.Tk();
    const label = await tk.Label$(root, { text: 'Hello World from Electron!' });
    await label.pack();
    await root.mainloop();
    await python.exit();
  } catch (err) {
    console.error("Errore durante l'esecuzione del codice Python:", err);
  }
})