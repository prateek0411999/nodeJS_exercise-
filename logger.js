const events= require('events');
const uuid =require('uuid');
//create random ids everytime
console.log(uuid.v4());

class logger extends events{
    log(msg)
    {
        this.emit('message',{id: uuid.v4(), msg : msg})
    }
}
//module.exports= logger;
const Logger =require('./logger');

const logger = new Logger();
logger.on('message',(data)=>{
    console.log(`called listener : ${data}` )
})
logger.log('Hello world');