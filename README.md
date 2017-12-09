
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


Welcome to your Node.js project on Cloud9 IDE!

This chat example showcases how to use `socket.io` with a static `express` server.

## Running the server

1) Open `server.js` and start the app by clicking on the "Run" button in the top menu.

2) Alternatively you can launch the app from the Terminal:

    $ node server.js

Once the server is running, open the project in the shape of 'https://projectname-username.c9users.io/'. As you enter your name, watch the Users list (on the left) update. Once you press Enter or Send, the message is shared with all connected clients.

Setup and Support

Platforms Used
    We started out trying to implement a Canvas development environment on an Ubuntu server running in a virtual machine but that was unsuccessful.
    We then tried to implement a linux instance on Amazon AWS that was also unsuccessful.
    We finally wound up using Cloud9 to code and run our project.
    We are using a Google Firebase real time database to store the application data.
What languages we used
    We started out with a react client running on a node js server
    We transitioned to an angular client running on a node js server
How to Access code
    The code is in a github repository named Active-Learning-Classroom at: https://github.com/jalnor/Active-Learning-Classroom.git 
Access database (These instructions based on web app setup)
    You will need to create a firebase project. To do this you will need to navigate to: https://firebase.google.com/
    Once you sign in using Google credentials you can click on the Go To Console link in the top right next to your avatar. In the center of the console you will see a box for creating a new project that also has a link to view a project demo in it. 
    Once you create a project and name it (this is where you will select your type of project), then you can click to open it. On the left side will be a navigation pane. 
    Under the Develop tab, click on Authentication and then in the top right of the screen you will find a Web Setup link. 
    Click on that link and a pop up box will open with the credentials needed for your web application. There is a copy button provided in the pop up box, click on it. 
    Paste code in code for project where you see the blank template on the index.js page. 
Setup Cloud9 Environment (These instructions are based on the original Cloud9 platform)
    You will need to create an account with cloud9 at: https://c9.io (Important Note: This has changed and now is AWS Cloud 9!)
    Once you login you can create a new workspace. 
    There are numerous platforms provided as boxes at the bottom of the create workspace screen. 
    Create a name for your project and give it a brief description.
    Select the Node JS workspace and click Create Workspace.
    Once you are in the work space you can replace the client folder with the code from the github repository.
    You will also need to add the the JSON key file to the firebase app under the the main folder. Instructions for creating the JSON key file can be found under the firebase documentation at: https://firebase.google.com/docs/web/setup.	
Start the server (Cloud9)
    When in the workspace on cloud9, right click on the server.js file and select run. A new tab will open on the bottom next to the terminal that will display the status of the server and any error messages associated with it.
File structure explanation
Client Folder
    CSS
    Index.css = styles for the main chat page.
    Login.css = styles for the login.
    Img - Used for storing our images like the login background.
    JS - Used to store all JS files that were used during this project.
    angular .min.js - used for binding the data to the UI.
    Index.js - used in both pages as one file. Otherwise we would have duplicate methods in the index and login js files.
    Routes.js - used to route the traffic based on the response and request that we received from the server.js file.
    Index.html - chat application functionality
    Login.html - basic layout for the login page.
Node Modules - stores all modules for the server to work.
Activeclass_key.json - holds the 
Package.json - References the dependencies of the project and the versions of the dependencies. 
Readme.md - stores the instructions for getting the application running. 
Server.js - used for starting and running the main server instance. 
