const {app,BrowserWindow} = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadURL(`file://${__dirname}/dist/anion/index.html`);
  win.maximize();
  win.openDevTools();

  win.on('closed',function() {
    win = null;
  })
}

app.on('ready',createWindow);

app.on('window-all-closed',function() {
  if(process.platform !== 'darwin') {
    app.quit();
  }
});

/*
Storing data on the local computer.  app.getPath() will return the user's app data folder that
matches the OS the app is running on.
*/
