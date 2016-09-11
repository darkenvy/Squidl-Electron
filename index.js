'use strict';
const electron = require('electron');
let { app, BrowserWindow } = electron;
const fs = require('fs');
const path = require('path');
app.on('ready', function () {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    mainWindow.loadURL('file://' + __dirname + "/html/index.html");
    let p = path.join(__dirname, '..');
    // fs.readdir(p, 'utf8', function(err, data) {
    //   if (err) return console.log(err);
    //   console.log(data);
    // })
});
