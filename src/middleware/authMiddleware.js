const jwt = require("jsonwebtoken");
const AppError = require("../errors/AppError");
const config = require("../config");

function authMiddleware(req, res, next) {

    const authHeader =
        req.headers.authorization;

    if (!authHeader) {
        return next(
            new AppError(
                "Authentication required",
                401
            )
        );
    }

    const token =
        authHeader.split(" ")[1];

    try {

        const payload =
            jwt.verify(
                token,
                config.jwtSecret
            );

        req.user = {
            userId: payload.userId
        };

        next();

    } catch {

        next(
            new AppError(
                "Invalid token",
                401
            )
        );

    }
}

module.exports = authMiddleware;