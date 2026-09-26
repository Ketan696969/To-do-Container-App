const userService = require("../services/userService");

async function register(req, res, next) {
    try {
        const user = await userService.registerUser(req.body);

        res.status(201).json({
            success: true,
            data: user
        });
    } catch (error) {
        next(error);
    }
}

async function login(req, res, next) {
    try {
        const result =
            await userService.loginUser(req.body);

        res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    register,
    login
};