"use strict";

import electron from "electron";
import { app, protocol, BrowserWindow, ipcMain, Menu } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension, { VUEJS_DEVTOOLS } from "electron-devtools-installer";
import Store from "electron-store";
const isDevelopment = process.env.NODE_ENV !== "production";
const store = new Store();

//global references
let imageWindow;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

async function createWindow() {
  var mwX = 0;
  var mwY = 0;
  var mwWidth = 1920;
  var mwHeight = 1080;

  if (app.commandLine.hasSwitch("station")){
    if (app.commandLine.hasSwitch("station")){
      store.set("station", app.commandLine.getSwitchValue("station"));
    }
  }

  if (app.commandLine.hasSwitch("monitor")) {
    var monitor = app.commandLine.getSwitchValue("monitor");
    if (monitor == "2") {
      let displays = electron.screen.getAllDisplays();
      let externalDisplay = displays.find((display) => {
        return display.bounds.x !== 0 || display.bounds.y !== 0;
      });

      if (externalDisplay) {
        mwX = 1920 + 60;
        mwY = 0;
      }
    }
  }

  // Create the browser window.
  const win = new BrowserWindow({
    x: mwX,
    y: mwY,
    width: mwWidth,
    height: mwHeight,
    fullscreen: true,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      webSecurity: false,
    },
  });

  const image = new BrowserWindow({
    width: 400,
    height: 400,
    parent: win,
    show: false,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  Menu.setApplicationMenu(null);
  win.setMenu(null);
  // win.maximize();

  // win.webContents.setWindowOpenHandler(() => {
  //   return {
  //     action: "allow",
  //     overrideBrowserWindowOptions: {
  //       frame: false,
  //       // fullscreenable: false,
  //       // backgroundColor: "black",
  //       webPreferences: {
  //         webSecurity: false,
  //         nodeIntegration: true,
  //         contextIsolation: false,
  //         enableRemoteModule: true,
  //       },
  //     },
  //   };
  // });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    // await image.loadURL(process.env.WEBPACK_DEV_SERVER_URL + "/#/image");
    // if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }

  image.on("close", (e) => {
    e.preventDefault();
    image.hide();
  });

  imageWindow = image;
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS);
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();
  // console.log(app.commandLine.getSwitchValue("station"));ö
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
ipcMain.on("toggle-image", (event, arg) => {
  imageWindow.show();
  console.log("image->", arg);
  imageWindow.webContents.send("image", arg);
});
