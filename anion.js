// Includes ////////////////////////////////////////////////////////////////////
const {app,BrowserWindow,ipcMain} = require('electron');
const Store = require('electron-store');
const pjson = require('./package.json');

// Class Definitions ///////////////////////////////////////////////////////////

// anionMainProcess ------------------------------------------------------------
// This class represents the main process for the Anion electron app.  This
// process will handle writing preference files to the user's 'appData' folder
// and other back-end type coding.
class anionMainProcess {
  constructor() {}
}

// unit ------------------------------------------------------------------------
// This class represents a generic unit for the battle engine
class unit {
  constructor(name) {
    this.name = name;
    this.mobile = true;
  }
}

// starship --------------------------------------------------------------------
class starship extends unit {
  constructor(name,size,ftl) {
    super(name);
    this.size = size;
    this.ftl = ftl;
  }
}

// gunboat ---------------------------------------------------------------------
class gunboat extends unit {
  constructor(name,size) {
    super(name);
    this.size = size;
  }
}

// fighter ---------------------------------------------------------------------
class fighter extends unit {
  constructor(name,size) {
    super(name);
    this.size = size;
  }
}

// base ------------------------------------------------------------------------
class base extends unit {
  constructor(name,size) {
    super(name);
    this.mobile = false;
    this.size = size;
  }
}

// Module Exports //////////////////////////////////////////////////////////////
exports.main = anionMainProcess;
exports.units = {starship,gunboat,fighter,base};

// Function Literals ///////////////////////////////////////////////////////////
