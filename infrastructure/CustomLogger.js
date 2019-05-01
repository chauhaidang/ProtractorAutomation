let winston = require('winston');
let logger = winston.createLogger({
    level: 'info',
    //Combine several format into one
    format: winston.format.combine(
        //format with time stamp, we also need to re-format it to a simple pattern
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),

        //Simple format without time stamp
        winston.format.simple(),

        //Then custom for how log will looks like in console or file
        winston.format.printf(function({timestamp,level,message}){
            return `${timestamp} [LOGGER] ${level.toUpperCase()}: ${message}`;
        }),
    ),
    colorize: true, //Enable color in log
    transports: [
        //Define console transport here
        new winston.transports.Console()
    ]
});
module.exports = logger;