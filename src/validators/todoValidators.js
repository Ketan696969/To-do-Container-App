const AppError = require("../errors/AppError");

function validateCreateTodo(req, res, next) {
    const { title } = req.body;

    if (title === undefined) {
        return next(
            new AppError("Title is required", 400)
        );
    }

    if (typeof title !== "string") {
        return next(
            new AppError("Title must be a string", 400)
        );
    }

    if (title.trim().length === 0) {
        return next(
            new AppError("Title cannot be empty", 400)
        );
    }

    next();
}

module.exports = {
    validateCreateTodo
}; 