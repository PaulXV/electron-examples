const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')

const URL = "https://swapi.dev/api/"

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
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

ipcMain.on('get-people', async () => {
  let res = await fetch(URL + "people/")
  res = await res.json()
  if (res.error) {
    console.error(res.error)
    return
  }
  mainWindow.webContents.send('response-people', {response: res.results})
})