const {app,BrowserWindow} = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadURL(`file://${__dirname}/dist/index.html`);

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
