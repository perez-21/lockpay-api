const express = require("express");
const authController = require("../../controllers/auth.controller");
const validate = require("../../middleware/validate");
const authValidationSchemas = require("../../validations/auth.validations");

const router = express.Router();

router.post("/register", validate(authValidationSchemas.register), authController.register);
router.post("/login", validate(authValidationSchemas.login), authController.login);

module.exports = router;