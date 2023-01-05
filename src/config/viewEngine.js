const path = require("path");
const express = require('express');

const configViewEngine = (app) => {
    console.log("check __dirname",__dirname);
    app.set("views", path.join('./src', "views"));
    app.set("view engine", "ejs");

    //TODO::config static file
    app.use(express.static(path.join('./src', "public")));
};

module.exports = configViewEngine;