import { Router } from "express";
import {
  getAllTodos,
  getTodo,
  addNewTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todos.controller";

export const todoRoutes = Router();

todoRoutes.get("/", getAllTodos);

todoRoutes.get("/:id", getTodo);

todoRoutes.post("/", addNewTodo);

todoRoutes.put("/:id", updateTodo);

todoRoutes.delete("/:id", deleteTodo);
