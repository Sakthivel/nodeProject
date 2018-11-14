const EventsEmitter = require('events');

var url = "http://mylogger.io/log";

class Logger extends EventsEmitter{

    log(message) {
        // send an http request
        console.log(message);

        // Raise an event
        this.emit('messageLogged', {
            id: 1,
            url: 'http://'
        });
    }

}

 // module.exports = log;  // Follow: 1
 // module.exports.log = log; // Follow: 2

 module.exports = Logger;