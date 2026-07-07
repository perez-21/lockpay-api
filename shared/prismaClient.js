const { PrismaPg } = require("@prisma/adapter-pg");
const { PrismaClient } = require("../generated/prisma/client");
const config = require("../shared/config");

const adapter = new PrismaPg({connectionString: config.DATABASE_URL});
const prisma = new PrismaClient({adapter});

module.exports = prisma;