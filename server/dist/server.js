"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = require("./routes/user.route");
const todos_route_1 = require("./routes/todos.route");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/user", user_route_1.userRoutes);
app.use("/api/todos", todos_route_1.todoRoutes);
app.listen(port, () => {
    console.log("server started on port", port);
});
