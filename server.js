const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const morganMiddleware = require("./middleware/morgan");
const { ENV } = require("./shared/config");



const app = express();

app.disable("x-powered-by");

app.use(helmet());
app.use(hpp());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morganMiddleware);

const router = express.Router();


router.get('/health', (req, res) => {
  res.send({ok: true, environment: ENV});
});

app.use('/api', router);

module.exports = app;
