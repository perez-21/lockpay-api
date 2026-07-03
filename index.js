const server = require("./server");
const logger = require("./shared/logger");
const { PORT } = require("./shared/config");

server.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});