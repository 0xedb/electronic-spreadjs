
 const {app, BrowserWindow, ipcMain} = require('electron');
 
 let win; 
 
 let createWindow = () => {
     win = new BrowserWindow({
         title: 'Electronic SpreadJs',
         width: 1500,
         height: 1000
     });
 
     win.on('closed', () => {
         win = null;
     });
 
     win.loadFile('index.html');
     win.webContents.openDevTools();
 
 };
 app.on('ready', createWindow); 