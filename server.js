const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const morganMiddleware = require("./middleware/morgan");
const errorHandler = require("./middleware/error-handler");
const config = require("./shared/config");
const router = require("./routes/v1/index");


const app = express();

app.disable("x-powered-by");

app.use(helmet());
app.use(hpp());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morganMiddleware);

router.get('/health', (req, res) => {
  res.send({ok: true, environment: config.ENV});
});

app.use('/api', router);

app.use(errorHandler);

module.exports = app;
