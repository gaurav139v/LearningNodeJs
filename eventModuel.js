const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('an event occurred!');
});

// the above method called when event occured.
myEmitter.emit('waterfull');