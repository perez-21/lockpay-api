const express = require("express");
const config = require("../../shared/config");
const authRouter = require("./auth.route");

const router = express.Router();

const defaultRoutes = [{ router: authRouter, path: "/auth" }];

const devRoutes = [];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.router);
});

if (config.ENV == "development" && devRoutes.length) {
  devRoutes.forEach((route) => {
    router.use(route.path, route.router);
  });
}

module.exports = router;
