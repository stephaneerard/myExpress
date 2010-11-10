/**
 * This file is part of the myExpress extension of expressjs
 * 
 * @package myExpress
 * @author Stéphane Erard <stephane.erard@gmail.com>
 */

//require express, the web framework
var express = require('express');

//create the app server and export it
var app = module.exports = express.createServer();

//load extensions
require('./extensions/extensions')(app, express, __dirname, module);

//load the config
require('./config/config')(module, app, express, __dirname);

//start the app server
app.start();