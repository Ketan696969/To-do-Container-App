const config = {
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGO_URI,
    nodeEnv: process.env.NODE_ENV || "development",
    jwtSecret: process.env.JWT_SECRET
};

module.exports = config;