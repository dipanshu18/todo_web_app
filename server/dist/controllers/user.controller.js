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
exports.deleteUser = exports.updateUser = exports.addNewUser = exports.getUser = exports.getAllUsers = void 0;
const client_1 = require("@prisma/client");
const userClient = new client_1.PrismaClient().user;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield userClient.findMany({
            include: {
                todos: true,
            },
        });
        res.status(200).json(allUsers);
    }
    catch (e) {
        console.log(e);
    }
});
exports.getAllUsers = getAllUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const user = yield userClient.findUnique({
            where: {
                id: userId,
            },
        });
        res.status(200).json(user);
    }
    catch (e) {
        console.log(e);
    }
});
exports.getUser = getUser;
const addNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const newUser = yield userClient.create({
            data: { name, email, password },
        });
        res.status(201).json(newUser);
    }
    catch (e) {
        console.log(e);
    }
});
exports.addNewUser = addNewUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const updatedUserData = req.body;
        const updatedUser = yield userClient.update({
            where: {
                id: userId,
            },
            data: updatedUserData,
        });
        res.status(200).json(updatedUser);
    }
    catch (e) {
        console.log(e);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const deletedUser = yield userClient.delete({
            where: {
                id: userId,
            },
        });
        res.status(200).json(deletedUser);
    }
    catch (e) {
        console.log(e);
    }
});
exports.deleteUser = deleteUser;
