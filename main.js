const {app,BrowserWindow} = require('electron');
const path = require('path');
const Store = require('./store.js');

const store = new Store({
  configName: 'user-data',
  defaults: {
    windowBounds: {
      width: 800,
      height: 600,
      fullscreen: false
    }
  }
});

let win;

function createWindow() {
 let {width,height,fullscreen} = store.get('windowBounds');

  win = new BrowserWindow({width,height});

  win.loadURL(`file://${__dirname}/dist/anion/index.html`);

  if(fullscreen) {
    win.maximize();
  }

  //win.openDevTools();

  win.on('closed',function() {
    win = null;
  });

  win.on('resize',() => {
    let {width,height} = win.getBounds();
    store.set('windowBounds',{width,height,fullscreen});
  });

  win.on('maximize',() => {
    fullscreen = true;
    store.set('windowBounds',{width,height,fullscreen});
  });

  win.on('unmaximize',() => {
    fullscreen = false;
    store.set('windowBounds',{width,height,fullscreen});
  });
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
