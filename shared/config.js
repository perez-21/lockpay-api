require("dotenv").config();

const PORT = process.env.PORT || 3000;
const LOG_LEVEL = process.env.LOG_LEVEL || 'info';

module.exports = {PORT, LOG_LEVEL};