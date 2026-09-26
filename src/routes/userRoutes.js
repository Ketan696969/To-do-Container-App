const express = require("express");
const userController = require("../controllers/userController");

const {
    validateRegisterUser,
    validateLoginUser
} = require("../validators/userValidators");

const router = express.Router();

router.post(
    "/register",
    validateRegisterUser,
    userController.register
);

router.post(
    "/login",
    validateLoginUser,
    userController.login
);

module.exports = router;