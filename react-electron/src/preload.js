const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    invoke: (event, ...args) => ipcRenderer.invoke(event, ...args),
    send: (event, ...args) => ipcRenderer.send(event, ...args),
    on: (event, listener) => ipcRenderer.on(event, listener),
    off: (event, listener) => ipcRenderer.off(event, listener),
  },
});
