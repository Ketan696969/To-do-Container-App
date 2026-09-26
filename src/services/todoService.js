const todoRepository = require("../repositories/todoRepository");
const AppError = require("../errors/AppError");

async function createTodo(title, userId) {

    title = title.trim();
    
    const todo = await todoRepository.create({
        title,
        userId
    });

    return todo;
}

async function getUserTodos(userId) {

    const todos = await todoRepository.findByUserId(userId);

    return todos;
}

async function getTodoById(todoId, userId) {

    const todo = await todoRepository.findByIdAndUserId(todoId, userId);

    if (!todo) {
        throw new AppError(
            "Todo not found",
            404
        );
    }

    return todo;
}

module.exports = {
    getUserTodos,
    createTodo,
    getTodoById
};