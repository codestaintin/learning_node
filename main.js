// Import Event module
const events = require('events');
 // Create event emiiter object
let eventEmitter = new events.EventEmitter();

// create an event handler
let connectHandler = function connected() {
  console.log('Connection Succesful');
  // Fire the data_recieved event
  eventEmitter.emit('data_recieved');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
// Bind the data_recieved event with the anonymous function
eventEmitter.on('data_recieved', function(){
  console.log('data recieved Succesfully');
});
//Fire the connection event
eventEmitter.emit('connection');
console.log('Program Ended');
