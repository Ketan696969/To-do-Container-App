const AppError = require("../errors/AppError");

function validateRegisterUser(req, res, next) {
    const { name, email, password } = req.body;

    if (name === undefined) {
        return next(new AppError("Name is required", 400));
    }

    if (typeof name !== "string" || name.trim().length === 0) {
        return next(new AppError("Name must be a non-empty string", 400));
    }

    if (email === undefined) {
        return next(new AppError("Email is required", 400));
    }

    if (typeof email !== "string" || !email.includes("@")) {
        return next(new AppError("Email must be valid", 400));
    }

    if (password === undefined) {
        return next(new AppError("Password is required", 400));
    }

    if (typeof password !== "string" || password.length < 8) {
        return next(new AppError("Password must be at least 8 characters", 400));
    }

    next();
}

function validateLoginUser(req, res, next) {
    const { email, password } = req.body;

    if (email === undefined) {
        return next(new AppError("Email is required", 400));
    }

    if (typeof email !== "string" || !email.includes("@")) {
        return next(new AppError("Email must be valid", 400));
    }

    if (password === undefined) {
        return next(new AppError("Password is required", 400));
    }

    if (typeof password !== "string" || password.length === 0) {
        return next(new AppError("Password cannot be empty", 400));
    }

    next();
}


module.exports = {
    validateRegisterUser,
    validateLoginUser
};