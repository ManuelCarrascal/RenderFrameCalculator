const { ipcRenderer } = require("electron");
var shell = require("electron").shell;
const ipc = ipcRenderer;
const closebtn = document.querySelector("#closeApp");
const minimizebtn = document.querySelector("#minusApp");
const LOGOREDIRRECTION = document.querySelector("#logoWindowApp");

LOGOREDIRRECTION.addEventListener("click", () => {
  ipc.send("redirectionBrowser");
});
closebtn.addEventListener("click", () => {
  ipc.send("closeApp");
});
minimizebtn.addEventListener("click", () => {
  ipc.send("minimizeApp");
});
