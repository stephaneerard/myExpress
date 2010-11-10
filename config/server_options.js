/**
 * This file is part of the myExpress extension of expressjs
 * 
 * @package myExpress
 * @author Stéphane Erard <stephane.erard@gmail.com>
 */

/**
 * This file let you specify the options (command-line arguments) of your application server
 */

module.exports = [
                  ['-p', '--port NUMBER', 'The port number to listen to'],
                  ['-e', '--env STRING', 'The environment to load'],
                  ['-n', '--name STRING', 'The name of the application server'],
                 ];