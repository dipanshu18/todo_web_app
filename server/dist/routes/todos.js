"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRoutes = void 0;
const express_1 = require("express");
const todos_controller_1 = require("../controllers/todos.controller");
exports.todoRoutes = (0, express_1.Router)();
exports.todoRoutes.get("/", todos_controller_1.getAllTodos);
exports.todoRoutes.post("/", todos_controller_1.addNewTodo);
exports.todoRoutes.patch("/:id", todos_controller_1.updateTodo);
exports.todoRoutes.delete("/:id", todos_controller_1.deleteTodo);