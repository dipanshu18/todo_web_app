import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const userClient = new PrismaClient().user;

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await userClient.findMany({
      include: {
        todos: true,
      },
    });

    res.status(200).json(allUsers);
  } catch (e) {
    console.log(e);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await userClient.findUnique({
      where: {
        id: userId,
      },
    });

    res.status(200).json(user);
  } catch (e) {
    console.log(e);
  }
};

export const addNewUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await userClient.create({
      data: { name, email, password },
    });

    res.status(201).json(newUser);
  } catch (e) {
    console.log(e);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const updatedUserData = req.body;
    const updatedUser = await userClient.update({
      where: {
        id: userId,
      },
      data: updatedUserData,
    });

    res.status(200).json(updatedUser);
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const deletedUser = await userClient.delete({
      where: {
        id: userId,
      },
    });

    res.status(200).json(deletedUser);
  } catch (e) {
    console.log(e);
  }
};
