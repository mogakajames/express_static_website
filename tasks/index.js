const express = require('express');
const path = require('path')

//initializing the app
const app = express();

//setting a static folder
//this will handle the responses of all routes in the static folder and return the
//respective pages when hit
//ALL ROUTES ARE HANDLED IN THIS PUBLIC FOLDER, BEING A SKELETON FILE, IT SHOULD SHOW THE CONCEMPT
//app.get('/', (req, res) => {
    //route for specific pages#example, for now we'll work with static folder since we are not fecthing data from db
    //res.sendFile(path.join(__dirname, 'public/index.html'));
//});
app.use(express.static(path.join(__dirname, 'public')));

//setting port for server to listen to
//here, environment is set for deployment purposes but 
//to run the site on localhost, listen on Port 5000
const PORT = process.env.PORT || 5000;


//app is listening at port 5000 confirmed by console log message.
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));