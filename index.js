const server = require("./server");
const prismaClient = require("./shared/prismaClient");
const logger = require("./shared/logger");
const config = require("./shared/config");
const { error } = require("winston");

prismaClient
  .$connect()
  .then(() => {
    server.listen(config.PORT, () => {
      logger.info(`Listening on port ${config.PORT}`);
    });
  })
  .catch((error) => {
    logger.error("Failed to connect to the database:", error);
    process.exit(1);
  });
