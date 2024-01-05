const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1260,
    height: 540
  })
  const url = isDev ? 'http://localhost:4000' : `file://${path.join(__dirname, '../build/index.html')}`

  mainWindow.loadURL(url)
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
