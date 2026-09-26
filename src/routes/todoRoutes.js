
const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todoController");

const { validateCreateTodo } = require("../validators/todoValidators");

const authMiddleware =
    require("../middleware/authMiddleware");

router.get("/", authMiddleware, todoController.getUserTodos);
router.post("/",authMiddleware, validateCreateTodo,todoController.createTodo);
router.get("/:id",authMiddleware,todoController.getTodoById);

module.exports = router;
