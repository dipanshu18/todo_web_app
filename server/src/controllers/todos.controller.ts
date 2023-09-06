import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const todoClient = new PrismaClient().todo;

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await todoClient.findMany();

    res.status(200).json({ data: todos });
  } catch (e) {
    console.log(e);
  }
};

export const getTodo = async (req: Request, res: Response) => {
  try {
    const todoId = req.params.id;
    const todo = await todoClient.findUnique({
      where: {
        id: todoId,
      },
    });

    res.status(200).json({ data: todo });
  } catch (e) {
    console.log(e);
  }
};

export const addNewTodo = async (req: Request, res: Response) => {
  try {
    const todoData = req.body;
    const newTodo = await todoClient.create({
      data: {
        user: {
          connect: { id: todoData.userId },
        },
        title: todoData.title,
        description: todoData.description,
      },
    });

    res.status(201).json({ data: newTodo });
  } catch (e) {
    console.log(e);
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const todoId = req.params.id;
    const updatedTodoData = req.body;
    const updatedTodo = await todoClient.update({
      where: {
        id: todoId,
      },
      data: updatedTodoData,
    });

    res.status(200).json({ data: updatedTodo });
  } catch (e) {
    console.log(e);
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const todoId = req.params.id;
    const deletedTodo = await todoClient.delete({
      where: {
        id: todoId,
      },
    });

    res.status(200).json({ data: deletedTodo });
  } catch (e) {
    console.log(e);
  }
};
