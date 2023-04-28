const { app, BrowserWindow, ipcMain, shell } = require("electron");
const path = require("path");
const ipc = ipcMain;

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    frame: false, // look
    title: "",
    alwaysOnTop: true,
    autoHideMenuBar: true,
    titleBarStyle: "hidden",
    width: 800,
    minWidth: 800,
    show: false,
    height: 500,
    minHeight: 500,
    maximizable: false,
    fullscreenable: false,
    maxHeight: 600,
    maxWidth: 600,
    icon: path.join(__dirname, "icons/icon.png"),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  var splash = new BrowserWindow({
    width: 400,
    height: 300,
    title: "",
    icon: path.join(__dirname, "icons/icon.png"),
    transparent: true,
    frame: false,
    alwaysOnTop: true,
  });
  splash.loadFile("views/splash.html");
  splash.center();
  setTimeout(function () {
    splash.close();
    mainWindow.show();
  }, 5000);
  mainWindow.loadFile("views/index.html");
  ipc.on("redirectionBrowser", () => {
    shell.openExternal("https://www.instagram.com/tricdi_art");
  });
  ipc.on("closeApp", () => {
    mainWindow.close();
  });
  ipc.on("minimizeApp", () => {
    mainWindow.minimize();
  });
}
// cuando la app este lista entonces llamar a la funcion createMainWindow
app.whenReady().then(createMainWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});
app.on("not-ready", () => {});
