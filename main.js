const { app, BrowserWindow } = require('electron');
const fs = require('fs');

function createWindow() {
  const win = new BrowserWindow({
  fullscreen: true,
  webPreferences: {
    preload: __dirname + '/preload.js',
    webviewTag: true   // ✅ required for webview
  }
});

  const data = JSON.parse(fs.readFileSync('config.json'));

  // Send JSON to frontend
  win.loadFile('index.html').then(() => {
    win.webContents.send('data', data);
  });
}

app.whenReady().then(createWindow);