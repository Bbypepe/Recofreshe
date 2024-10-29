// Import necessary modules from Electron
const { app, BrowserWindow } = require('electron');
const path = require('path'); // Module to work with file and directory paths

// Function to create the main window
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Preload script for context isolation
      contextIsolation: true, // Security measure to isolate context
      enableRemoteModule: false, // Disable the remote module for security
      nodeIntegration: false, // Disable Node.js integration for security
      // Consider adding the following options for enhanced security:
      // sandbox: true, // Enable sandboxing for additional security
      // allowRunningInsecureContent: false, // Block running insecure content
    },
  });

  // Load the index.html file from the public directory
  mainWindow.loadFile(path.join(__dirname, 'public', 'index.html')).catch((error) => {
    console.error('Failed to load index.html:', error); // Log errors during loading
  });

  // Open the DevTools for debugging
  mainWindow.webContents.openDevTools();
}

// Handle app readiness and create the main window
app.whenReady().then(createWindow).catch((error) => {
  console.error('Failed to create the application window:', error); // Log errors during window creation
});

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
