import { createLogger, format, transports } from 'winston'
const { combine, timestamp, label, prettyPrint } = format;
export let logger = createLogger({
        level: 'info',
        format: format.combine(
            //format with time stamp, we also need to re-format it to a simple pattern
            format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }),

            //Simple format without time stamp
            format.simple(),

            //Then custom for how log will looks like in console or file
            format.printf(function ({ timestamp, level, message }) {
                return `${timestamp} [LOGGER] ${level.toUpperCase()}: ${message}`;
            }),
        ),
        colorize: true, //Enable color in log
        transports: [
            //Define console transport here
            new transports.Console()
        ]
    });
