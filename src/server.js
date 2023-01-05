require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const configViewEngine = require('./config/viewEngine');
const mysql = require("mysql2");


const webRoutes = require('./routes/web');

const port = process.env.PORT;

//config
app.use(express.json()); //for json
app.use(express.urlencoded({extended:true})); //for form data

// config template engine
configViewEngine(app);

// router 
app.use('/',webRoutes);




app.listen(port,() => {
    console.log(`App listem port : ${port}`);
})

