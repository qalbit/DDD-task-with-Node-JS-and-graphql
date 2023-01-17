
var cron = require('node-cron');

const emmitEvent = (message) => {
    task = cron.schedule('* * * * * *', () => {
        console.log(message);
    });
    
    task.start();
    
    setTimeout(() => {
        task.stop();
    }, 1000);
} 

module.exports = emmitEvent;