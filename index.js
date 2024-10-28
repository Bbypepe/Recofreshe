// index.js
const { app, BrowserWindow } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: `${__dirname}/preload.js`,
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });

  mainWindow.loadURL(`file://${__dirname}/stream-recorder-app/public/index.html`);
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
