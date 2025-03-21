const EventEmitter = require('events');
const emitter = new EventEmitter();
const calculator = require('./calculator/index');

emitter.on('logging', (arg)=>{
    console.log('Logging message', arg);
})

emitter.emit('logging', {data: 'message', url: 'http://', name: 'John Doe'}); 

console.log(__dirname)
console.log(__filename)

console.log(calculator.sum(1, 2));
console.log(calculator.subtract(1, 2));

console.log(calculator.multiply(1, 2));
console.log(calculator.divide(1, 2));
console.log(calculator.modulus(1, 2));
console.log(calculator.sqrt(9));
console.log(calculator.sin(90));
console.log(calculator.cos(1));
console.log(calculator.tan(1));
