import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const todoClient = new PrismaClient().todo;

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await todoClient.findMany();

    res.status(200).json(todos);
  } catch (e) {
    console.log(e);
  }
};

export const getTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo = await todoClient.findUnique({
      where: {
        id,
      },
    });

    res.status(200).json(todo);
  } catch (e) {
    console.log(e);
  }
};

export const addNewTodo = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const newTodo = await todoClient.create({
      data: {
        // user: {
        //   connect: { id: todoData.userId },
        // },
        title,
      },
    });

    res.status(201).json(newTodo);
  } catch (e) {
    console.log(e);
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const updatedTodo = await todoClient.update({
      where: {
        id,
      },
      data: { title },
    });

    res.status(200).json(updatedTodo);
  } catch (e) {
    console.log(e);
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedTodo = await todoClient.delete({
      where: {
        id,
      },
    });

    res.status(200).json(deletedTodo);
  } catch (e) {
    console.log(e);
  }
};
