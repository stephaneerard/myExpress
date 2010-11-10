
//require express, the web framework
var express = require('express');

//create the app server and export it
var app = module.exports = express.createServer();

//load the config
require('./config/config')(module, app, express, __dirname);

//start the app server
app.start();