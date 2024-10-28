// Import necessary modules from Electron
const { app, BrowserWindow } = require('electron');
const path = require('path'); // Module to work with file and directory paths

function createWindow() {
  // Create the browser window
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Preload script for context isolation
      contextIsolation: true, // Security measure
      enableRemoteModule: false, // Disable the remote module
      nodeIntegration: false, // Ensure Node.js integration is disabled for security
    },
  });

  // Load the index.html file from the public directory
  mainWindow.loadFile(path.join(__dirname, 'public', 'index.html'));

  // Open the DevTools for debugging
  mainWindow.webContents.openDevTools();
}

// Handle app readiness
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Recreate the window when the app is activated (macOS)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
