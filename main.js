//few constants declared to load essential elements from electron
const electron = require('electron');
const url = require('url');
const path = require('path');

//Things to be brought from electron
const{app, BrowserWindow, Menu} = electron;

//variable for main window
let mainWindow;

//listen for app to be ready
app.on('ready', function(){
    //Create new Window
    mainWindow = new BrowserWindow({});

    //load html into window (Basically it is a fancy way of doing file/directory/mainWindow.html)
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol:'file:',
        slashes:true
    }));

    //Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Insert Menu
    Menu.setApplicationMenu(mainMenu);
});

//Create a menu template
const mainMenuTemplate = [
    {
        label:'File',
        submenu:[
            {
                label:'Add Items'
            },
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin'? 'Command + Q':'Ctrl + Q',  //This line allows us to specify shortcut keys, as this must be OS specific hence we have to provide it. Darwin is for MacOS.
                click(){
                    //Using inbuilt method to quit from the app
                    app.quit();
                }
            }
        ]
    }
];