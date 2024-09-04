if(process.env.NODE_ENV != "production")
{
    require('dotenv').config();
}

const express = require('express');
const dbConnect = require('./config/Dbconnection.js');
const bodyparser = require('body-parser');
const userController = require('./controller/userController.js');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyparser.json());
dbConnect();

// Auth
app.post('/register', userController.registerCreation);
app.get('/register', userController.registerGet);
app.post('/login', userController.login);

app.listen(process.env.PORT);