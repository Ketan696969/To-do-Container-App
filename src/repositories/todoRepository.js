const Todo = require("../models/Todo");

async function create(todoData) {
    return Todo.create(todoData);
}

async function findByUserId(userId) {
    return Todo.find({ userId });
}

async function findByIdAndUserId(todoId, userId) {
    return Todo.findOne({
        _id: todoId,
        userId
    });
}

module.exports = {
    create,
    findByUserId,
    findByIdAndUserId
};
