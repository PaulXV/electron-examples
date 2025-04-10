const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('window:minimize', async () => {
  mainWindow.minimize()
})

ipcMain.on('window:maximize', async () => {
  if (mainWindow.isMaximized()) {
    mainWindow.unmaximize()
  } else {
    mainWindow.maximize()
  }
})

ipcMain.on('window:close', async () => {
  mainWindow.close()
});