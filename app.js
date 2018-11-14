// Follow: 1
// const log = require('./logger');

// log("Hello Welcome!!");

// Follow: 2
//const logger = require('./logger');

//logger.log("Hello Welcome!!");

// Node Path Module:

const path = require('path');

var pathObj = path.parse(__filename);

//console.log(pathObj);

// Node OS Module:

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log(" Total Memory: "+ totalMemory);

// Template String in ES6

// console.log(` Free Memory: ${totalMemory}`);

const fs = require('fs');

const files = fs.readdirSync('./');

//console.log(files);

// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });

const EventsEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => {
    console.log("Listener called", arg);
});

logger.log("New message");

// emitter.on('messageLogged', function (arg) {
//     console.log("Listener called", arg);
// });

// // Raise an event
// emitter.emit('messageLogged', { id: 1, url: 'http://'});

// Raise: Logging (data: message)
