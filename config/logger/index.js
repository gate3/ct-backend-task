const winston = require('winston');

class Logger {
    constructor ({ serviceName }) {
        const transports = [
            //
            // - Write to all logs with level `info` and below to `combined.log`
            // - Write all logs error (and below) to `error.log`.
            //
            new winston.transports.File({ filename: 'error.log', level: 'error' }),
            new winston.transports.File({ filename: 'combined.log' })
        ];

        const logger = winston.createLogger({
            level: 'info',
            format: winston.format.json(),
            defaultMeta: { service: serviceName },
            transports,
            exitOnError: false
        });

        logger.add(new winston.transports.Console({
            format: winston.format.simple()
        }))

        logger.stream = {
            write: function (message, encoding) {
                // use the 'info' log level so the output will be picked up by both transports (file and console)
                logger.info(`${new Date()} - ${message}`)
            }
        }

        this.logger = logger
    }
}

module.exports = Logger;
