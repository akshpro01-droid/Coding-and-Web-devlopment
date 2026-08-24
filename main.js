const path = require("path");
const { app, BrowserWindow } = require("electron");
function createWindow() {
    const win = new BrowserWindow({
            width: 1200,
            height: 800,

            webPreferences: {
                webviewTag: true
    }
    })

    win.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(() => {
    createWindow();
});