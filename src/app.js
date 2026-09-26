const express = require("express");
const todoRoutes = require("./routes/todoRoutes");
const userRoutes = require("./routes/userRoutes");
const globalErrorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});
app.get("/", (req, res) => {
    res.json({ message: "API Running" });
});

app.use("/todos", todoRoutes);
app.use("/users", userRoutes);

app.use(globalErrorHandler);

module.exports = app;