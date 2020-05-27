const events= require('events');


//create eventEmitter class 

class emitterClass extends events{}

//init object 
const myEmitter = new  emitterClass();

//event listener
myEmitter.on ('event', ()=>{
    console.log('Event fired!!!!');

})

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');

