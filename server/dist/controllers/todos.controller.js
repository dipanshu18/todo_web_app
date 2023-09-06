"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.addNewTodo = exports.getTodo = exports.getAllTodos = void 0;
const client_1 = require("@prisma/client");
const todoClient = new client_1.PrismaClient().todo;
const getAllTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todoClient.findMany();
        res.status(200).json({ data: todos });
    }
    catch (e) {
        console.log(e);
    }
});
exports.getAllTodos = getAllTodos;
const getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoId = req.params.id;
        const todo = yield todoClient.findUnique({
            where: {
                id: todoId,
            },
        });
        res.status(200).json({ data: todo });
    }
    catch (e) {
        console.log(e);
    }
});
exports.getTodo = getTodo;
const addNewTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoData = req.body;
        const newTodo = yield todoClient.create({
            data: {
                user: {
                    connect: { id: todoData.userId },
                },
                title: todoData.title,
                description: todoData.description,
            },
        });
        res.status(201).json({ data: newTodo });
    }
    catch (e) {
        console.log(e);
    }
});
exports.addNewTodo = addNewTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoId = req.params.id;
        const updatedTodoData = req.body;
        const updatedTodo = yield todoClient.update({
            where: {
                id: todoId,
            },
            data: updatedTodoData,
        });
        res.status(200).json({ data: updatedTodo });
    }
    catch (e) {
        console.log(e);
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoId = req.params.id;
        const deletedTodo = yield todoClient.delete({
            where: {
                id: todoId,
            },
        });
        res.status(200).json({ data: deletedTodo });
    }
    catch (e) {
        console.log(e);
    }
});
exports.deleteTodo = deleteTodo;
