if(process.env.NODE_ENV != "production")
    {
        require('dotenv').config();
    }

const mongoose = require('mongoose');

async function dbConnect(){
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Successfully Connected to Database");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnect;