const User = require("../models/User");

async function findByEmail(email) {
    return User.findOne({ email });
}

async function create(userData) {
    return User.create(userData);
}

module.exports = {
    findByEmail,
    create
};
