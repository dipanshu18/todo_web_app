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
        res.status(200).json(todos);
    }
    catch (e) {
        console.log(e);
    }
});
exports.getAllTodos = getAllTodos;
const getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todo = yield todoClient.findUnique({
            where: {
                id,
            },
        });
        res.status(200).json(todo);
    }
    catch (e) {
        console.log(e);
    }
});
exports.getTodo = getTodo;
const addNewTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title } = req.body;
        const newTodo = yield todoClient.create({
            data: {
                // user: {
                //   connect: { id: todoData.userId },
                // },
                title,
            },
        });
        res.status(201).json(newTodo);
    }
    catch (e) {
        console.log(e);
    }
});
exports.addNewTodo = addNewTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title } = req.body;
        const updatedTodo = yield todoClient.update({
            where: {
                id,
            },
            data: { title },
        });
        res.status(200).json(updatedTodo);
    }
    catch (e) {
        console.log(e);
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedTodo = yield todoClient.delete({
            where: {
                id,
            },
        });
        res.status(200).json(deletedTodo);
    }
    catch (e) {
        console.log(e);
    }
});
exports.deleteTodo = deleteTodo;
