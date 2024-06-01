/* 
EventEmitter is a class which is in event module, MyEmitter inherits the features of EventEmitter, the object of MyEmitter which is emitter has access to the methods like on, emit, one. 
*/

const logEvents = require('./logEvents');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};
const emitter = new MyEmitter();

/* 
So, after 1.5 second, the 'message' event is emitted with the message, and the event listener captures it, calling the logEvents function with the provided message.
*/

setTimeout(() => {
  emitter.emit('message', 'Important message')
}, 1500)



emitter.on('message', message => logEvents(message));




