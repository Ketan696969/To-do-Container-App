const todoService = require("../services/todoService");


async function createTodo(req, res, next) {
    try {
        const title = req.body.title;
        const userId = req.user.userId;

        const todo = await todoService.createTodo(title, userId);

        res.json(todo);
    } catch (err) {
        next(err);
    }
}

async function getUserTodos(req, res, next) {
    try {

        const userId =
            req.user.userId;
        
        const todos =
            await todoService.getUserTodos(userId);

        res.json(todos);

    } catch (err) {
        next(err);
    }
}

async function getTodoById(req, res, next) {
    try {
        const todoId = req.params.id;
        const userId = req.user.userId;

        const todo = await todoService.getTodoById(todoId, userId);

        res.json(todo);
        
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getUserTodos,
    createTodo,
    getTodoById,
};