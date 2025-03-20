const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('logging', (arg)=>{
    console.log('Logging message', arg);
})

emitter.emit('logging', {data: 'message', url: 'http://', name: 'John Doe'}); 