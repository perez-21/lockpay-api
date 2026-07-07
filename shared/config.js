const { number } = require("joi");

require("dotenv").config();

const PORT = process.env.PORT || 3000;
const LOG_LEVEL = process.env.LOG_LEVEL || 'info';
const DEBUG_MODE = process.env.DEBUG_MODE === "true" ? true : false;
const ENV = process.env.NODE_ENV || 'development';

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  throw new Error("DATABASE_URL cannot be undefined");
}

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET cannot be undefined");
}

const JWT_EXPIRES_IN = Number(process.env.JWT_EXPIRES_IN) || 3600 * 3;


module.exports = {PORT, LOG_LEVEL, DEBUG_MODE, ENV, JWT_SECRET, DATABASE_URL, JWT_EXPIRES_IN};