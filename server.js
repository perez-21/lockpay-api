const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const logger = require("./logger");


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const morganMiddleware = morgan(':method :url :status :res[content-length] - response-time ms', {
  stream: {
    write: (message) => logger.http(message.trim()),
  }
});
app.use(morganMiddleware);

const router = express.Router();


router.get('/health', (req, res) => {
  res.send({ok: true});
});

app.use('/api', router);

module.exports = app;
