const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  receiveData: (callback) => {
    ipcRenderer.on('data', (event, data) => {
      callback(data);
    });
  }
});