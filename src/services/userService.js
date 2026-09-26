const userRepository = require("../repositories/userRepository");
const AppError = require("../errors/AppError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");


async function registerUser(userData) {
    const { name, email, password } = userData;

    const existingUser = await userRepository.findByEmail(email);

    if (existingUser) {
        throw new AppError(
            "Email already exists",
            409
        );
    }

    const hashedPassword =
        await bcrypt.hash(password, 10);

    const user = await userRepository.create({
        name,
        email,
        password: hashedPassword
    });

    return user;
}

async function loginUser(userData) {
    const { email, password } = userData;

    const user = await userRepository.findByEmail(email);

    if (!user) {
        throw new AppError(
            "Invalid email or password",
            401
        );
    }

    const isMatch =
        await bcrypt.compare(
            password,
            user.password
        );

    if (!isMatch) {
        throw new AppError(
            "Invalid email or password",
            401
        );
    }
    const token = jwt.sign(
        {
           userId: user._id
        },
        config.jwtSecret,
        {
            expiresIn: "1h"
        }
    );
    return {
        token
    };
}

module.exports = {
    registerUser,
    loginUser
};
