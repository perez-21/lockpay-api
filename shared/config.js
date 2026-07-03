require("dotenv").config();

const PORT = process.env.PORT || 3000;
const LOG_LEVEL = process.env.LOG_LEVEL || 'info';
const DEBUG_MODE = process.env.DEBUG_MODE === "true" ? true : false;
const ENV = process.env.NODE_ENV || 'development';

module.exports = {PORT, LOG_LEVEL, DEBUG_MODE, ENV};