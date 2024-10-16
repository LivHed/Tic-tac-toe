const { app, BrowserWindow } = require('electron');
//const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      //preload: path.join(__dirname, 'preload.js'), // comment out to see if it fix the error with a blank white electron app. 
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // For development: load React app running on localhost
  win.loadURL('http://localhost:3000');

  // Uncomment this line for production builds
  // win.loadFile(path.join(__dirname, '../build/index.html'));

  // enables the DevTools to check for console errors
  win.webContents.openDevTools(); 
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});