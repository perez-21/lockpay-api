const winston = require("winston");
const { LOG_LEVEL } = require("./shared/config");


const { combine, timestamp, json, simple } = winston.format;

const logger = winston.createLogger({
  level: LOG_LEVEL,
  format: combine(timestamp(), json(), simple()),
  transports: [new winston.transports.Console()],
});


module.exports = logger;