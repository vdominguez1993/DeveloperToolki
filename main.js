const {app, BrowserWindow} = require('electron')
const path = require('path')

app.disableHardwareAcceleration()

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow()

  mainWindow.maximize()

  mainWindow.loadFile('index.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
