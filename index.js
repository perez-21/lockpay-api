const server = require("./server");
const logger = require("./logger");
const { PORT } = require("./shared/config");


server.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});